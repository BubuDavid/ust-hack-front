"use client"

import Link from "next/link"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { NavbarLink } from "./navbar_link"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()
  if (pathname === "/sign-in" || pathname === "/sign-up") {
    return null
  }
  return (
    <nav className="w-full flex items-center justify-center h-[6rem]">
      <div
        className={cn(
          "h-full max-w-screen-xl w-full flex items-center justify-between bg-white",
          "max-w-screen",
        )}
      >
        <div className="w-full max-w-screen-xl mx-auto h-full flex items-center justify-between px-10">
          <Link href="/">
            <Image src="/imcolab.png" width={200} height={200} alt="Logo" />
          </Link>
          <ul className="flex items-center justify-center space-x-6 text-lg">
            <li>
              <NavbarLink name="Home" link="/" />
            </li>
            <li>
              <NavbarLink name="Projects" link="/projects" />
            </li>

            <div className="hidden md:block">
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}
