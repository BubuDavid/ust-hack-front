import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

// const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)", "/"])
const isProtected = createRouteMatcher(["/protected"])

export default clerkMiddleware((auth, request) => {
  const headers = new Headers(request.headers)
  headers.set("x-current-path", request.nextUrl.pathname)
  if (isProtected(request)) {
    auth().protect()
  }
  return NextResponse.next({ headers })
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
}
