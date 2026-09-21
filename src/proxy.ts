import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyAdminToken } from '@/lib/auth/jwt';

export default async function proxy(request: NextRequest) {
  const cookieName = process.env.ADMIN_SESSION_COOKIE_NAME || "joat_admin_session";
  const sessionToken = request.cookies.get(cookieName)?.value;
  const isLoginPage = request.nextUrl.pathname === '/admin/login';
  const isAdminApi = request.nextUrl.pathname.startsWith('/api/admin');
  const isAdminPage = request.nextUrl.pathname.startsWith('/admin') && !isLoginPage;

  if (isAdminApi || isAdminPage) {
    if (!sessionToken) {
      if (isAdminApi) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    const payload = await verifyAdminToken(sessionToken);
    
    if (!payload) {
      if (isAdminApi) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
      const response = NextResponse.redirect(new URL('/admin/login', request.url));
      response.cookies.delete(cookieName);
      return response;
    }

    // Attach admin context via headers for API routes
    if (isAdminApi) {
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set('x-admin-id', payload.id);
      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    }
  }

  // Redirect to dashboard if logged in
  if (isLoginPage && sessionToken) {
    const payload = await verifyAdminToken(sessionToken);
    if (payload) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
