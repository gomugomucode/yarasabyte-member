import { NextRequest, NextResponse } from 'next/server';
import { getMemberSlugFromHost } from '@/lib/member-domain';

export function middleware(request: NextRequest) {
  // Extract host from standard headers (x-forwarded-host takes precedence on proxies like Vercel)
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host');
  const memberSlug = getMemberSlugFromHost(host);

  // If host does not map to a recognized member, proceed normally (main site or safe fallback)
  if (!memberSlug) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // Prevent rewrite loops:
  // If the request is already internally targeting this member profile, do not rewrite again.
  if (pathname === `/team/${memberSlug}`) {
    return NextResponse.next();
  }

  // Root path on a member's domain (e.g. yarasabyte.anupambaral.com.np/)
  // internally rewrites to their team profile page (/team/anupam)
  if (pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = `/team/${memberSlug}`;

    // Pass member domain headers for downstream server components if needed
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-member-slug', memberSlug);
    if (host) {
      requestHeaders.set('x-member-host', host);
    }

    return NextResponse.rewrite(url, {
      request: {
        headers: requestHeaders,
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * 1. _next/static (static files)
     * 2. _next/image (image optimization files)
     * 3. favicon.ico, sitemap.xml, robots.txt
     * 4. Static assets with extensions: svg, png, jpg, jpeg, gif, webp, ico, css, js
     */
    '/((?!_next/static|_next/image|favicon\\.ico|robots\\.txt|sitemap\\.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)',
  ],
};
