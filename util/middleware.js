export function middleware(req) {
  const nextUrl = req?.nextUrl
  if (nextUrl?.pathname === '/secrets') {
    if (req?.cookies?.authToken) {
      return NextResponse.rewrite(new URL('/secrets', req?.url))
    } else {
      return NextResponse.rewrite(new URL('/', req?.url))
    }
  }
}