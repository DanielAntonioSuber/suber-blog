import { auth } from "@/auth"
import { NextResponse } from "next/server"


export default auth((req) => {
    const isLoggedIn = !!req.auth
    const isOnAdmin = req.nextUrl.pathname.startsWith("/admin")
    if (isOnAdmin && !isLoggedIn) {
        return NextResponse.redirect(new URL("/api/auth/signin", req.url))
    }
})

export const config = {
    matcher: ["/admin/:path*"],
}
