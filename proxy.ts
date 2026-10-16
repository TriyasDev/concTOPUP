// proxy.ts
import { NextResponse, type NextRequest } from "next/server"
import { getSessionCookie } from "better-auth/cookies"

export function proxy(request: NextRequest) {
  // Pengecekan cepat berbasis cookie. Ini belum memvalidasi session di database,
  // validasi sebenarnya dilakukan di halaman server (lihat contoh /akun).
  const hasSession = getSessionCookie(request)

  if (!hasSession) {
    const url = new URL("/login", request.url)
    url.searchParams.set("next", request.nextUrl.pathname)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/akun/:path*"],
}