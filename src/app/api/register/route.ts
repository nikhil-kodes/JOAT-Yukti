import { NextResponse } from "next/server";
import { registrationSchema } from "@/lib/validation/registration";
import { createAdminClient } from "@/lib/supabase/server";

const rateLimit = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5;

  let user = rateLimit.get(ip);
  if (!user || now > user.resetTime) {
    user = { count: 1, resetTime: now + windowMs };
  } else {
    user.count++;
  }
  rateLimit.set(ip, user);

  // cleanup old entries occasionally
  if (Math.random() < 0.1) {
    for (const [key, value] of Array.from(rateLimit.entries())) {
      if (now > value.resetTime) rateLimit.delete(key);
    }
  }

  return user.count <= maxRequests;
}

export async function POST(request: Request) {
  try {
    // 0. Rate Limiting
    const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: "rate_limit_exceeded" }, { status: 429 });
    }

    const body = await request.json();
    
    // 1. Validate payload
    const result = registrationSchema.safeParse(body);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      const fields: Record<string, string> = {};
      for (const [key, val] of Object.entries(fieldErrors)) {
        if (val && val.length > 0) fields[key] = val[0];
      }
      return NextResponse.json({ error: "validation_failed", fields }, { status: 422 });
    }
    
    const data = result.data;
    const supabase = createAdminClient();

    // 2. Pre-check for duplicate for friendly error
    const { data: existingData } = await supabase
      .from('registrations')
      .select('college_email, roll_number')
      .or(`college_email.eq.${data.collegeEmail},roll_number.eq.${data.rollNumber}`)
      .limit(1)
      .single();

    if (existingData) {
      const field = existingData.college_email === data.collegeEmail ? 'collegeEmail' : 'rollNumber';
      return NextResponse.json({ error: "duplicate", field }, { status: 409 });
    }

    // 3. Insert and generate ID atomically at the database level
    const { data: insertedData, error: insertError } = await supabase
      .from('registrations')
      .insert({
        full_name: data.fullName,
        college_email: data.collegeEmail,
        phone_number: data.phoneNumber,
        roll_number: data.rollNumber,
        branch: data.branch,
        year: data.year,
        section: data.section || null,
        programming_experience: data.programmingExperience,
        preferred_language: data.preferredLanguage,
        github_url: data.githubUrl || null,
        consent_given: data.consentGiven,
        status: 'pending'
      })
      .select('participant_id')
      .single();

    if (insertError) {
      // Check if it's a unique constraint violation (race condition caught by DB)
      if (insertError.code === '23505') {
        const field = insertError.message.includes('email') ? 'collegeEmail' : 'rollNumber';
        return NextResponse.json({ error: "duplicate", field }, { status: 409 });
      }
      throw insertError;
    }

    return NextResponse.json({ participantId: insertedData.participant_id, status: "pending" }, { status: 201 });

  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ error: "internal_error" }, { status: 500 });
  }
}
