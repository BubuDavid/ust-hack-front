"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function NavbarLink({ name, link }) {
  const pathname = usePathname()
  let active = pathname.includes(name.toLowerCase())
  if (pathname === "/" && name == "Home") {
    active = true
  }
  return (
    <Link
      href={link || "#"}
      className={cn(
        "relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[4px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left",
        active ? "after:scale-x-100" : "",
      )}
    >
      {name}
    </Link>
  )
}
