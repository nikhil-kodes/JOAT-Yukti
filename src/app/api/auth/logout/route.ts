import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  const cookieName = process.env.ADMIN_SESSION_COOKIE_NAME || "joat_admin_session";
  const cookieStore = await cookies();
  cookieStore.delete(cookieName);
  return NextResponse.json({ ok: true }, { status: 200 });
}
