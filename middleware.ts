import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log("middleware");
  const userAgent = request.headers.get("user-agent");
  console.log("User-Agent: ", userAgent)
  return NextResponse.next();
}


export const config = {
  matcher: ["/:path*"]
}
