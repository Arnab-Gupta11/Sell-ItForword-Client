import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCurrentUser } from "./services/auth";
// Adjust import based on your utility function

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Retrieve user info
  const userInfo = await getCurrentUser(); // Assumes this function returns user data or null if not logged in
  const userRole = userInfo?.role; // Assuming userInfo has a `role` property

  // Redirect unauthenticated users away from the dashboard
  if (pathname.startsWith("/dashboard")) {
    if (!userInfo) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    // Restrict access to `/dashboard/admin/*` only to admins
    if (pathname.startsWith("/dashboard/admin") && userRole !== "admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }

    // Restrict access to `/dashboard/user/*` only to users (not admins)
    if (pathname.startsWith("/dashboard/user") && userRole !== "user") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

// Define paths that the middleware should run on
export const config = {
  matcher: ["/dashboard/:path*"], // Ensures middleware runs on all dashboard routes
};
