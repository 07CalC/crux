import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent");
  return NextResponse.next();
}


export const config = {
  matcher: ["/:path*"]
}
