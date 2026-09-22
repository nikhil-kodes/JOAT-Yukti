import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { verifyAdminToken } from "@/lib/auth/jwt";

export async function PATCH(request: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(process.env.ADMIN_SESSION_COOKIE_NAME || "joat_admin_session")?.value;
    
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const adminData = await verifyAdminToken(token);
    if (!adminData) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { participantId, status } = await request.json();

    if (!['pending', 'approved', 'waitlisted'].includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    const supabase = createAdminClient();
    const { error } = await supabase
      .from('registrations')
      .update({ status })
      .eq('participant_id', participantId);

    if (error) throw error;

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Status update error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
