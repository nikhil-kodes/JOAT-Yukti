import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";
import { signAdminToken } from "@/lib/auth/jwt";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    
    if (!email || !password) {
      return NextResponse.json({ error: "invalid_credentials" }, { status: 401 });
    }

    const supabase = createAdminClient();
    
    const { data: admin } = await supabase
      .from('admins')
      .select('id, email, password_hash, role')
      .eq('email', email)
      .limit(1)
      .single();

    if (!admin) {
      console.error("DEBUG: Admin not found for email:", email);
      return NextResponse.json({ error: "invalid_credentials" }, { status: 401 });
    }

    const isValid = await bcrypt.compare(password, admin.password_hash);
    
    if (!isValid) {
      console.error("DEBUG: Password compare failed. Input password:", password, "DB Hash:", admin.password_hash);
      return NextResponse.json({ error: "invalid_credentials" }, { status: 401 });
    }

    // Update last login
    await supabase.from('admins').update({ last_login_at: new Date().toISOString() }).eq('id', admin.id);

    const token = await signAdminToken({ id: admin.id, role: admin.role, email: admin.email });
    
    const cookieName = process.env.ADMIN_SESSION_COOKIE_NAME || "joat_admin_session";
    const cookieStore = await cookies();
    cookieStore.set({
      name: cookieName,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 3600 // 1 hour
    });

    return NextResponse.json({ ok: true }, { status: 200 });

  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "internal_error" }, { status: 500 });
  }
}
