"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"
import Image from "next/image"
import { FaChevronCircleDown } from "react-icons/fa"

export function AboutMe({ userData }) {
  const [open, setOpen] = useState(false)

  const onClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <div className="flex space-x-2 items-center justify-start transition">
        <FaChevronCircleDown
          className={cn(
            "text-primary",
            open ? "rotate-0" : "-rotate-90",
            "transition-transform duration-300",
          )}
        />
        <span
          className="font-light underline cursor-pointer select-none"
          onClick={onClick}
        >
          About me
        </span>
      </div>

      {/* Container for the transition */}
      <div
        className={cn(
          "about-me-section overflow-hidden w-full flex items-center justify-center my-4",
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
        )}
        style={{
          transition: "max-height 0.5s ease-out, opacity 0.5s ease-out",
        }}
      >
        <div
          className="transition-transform transform-gpu flex items-center justify-center space-x-4"
          style={{
            transform: open ? "translateY(0)" : "translateY(-20px)",
            transition: "transform 0.5s ease-out",
          }}
        >
          <Image
            src={userData.ImgURL}
            width={450}
            height={450}
            alt="team"
            className="rounded-full w-[250px] border-primary border-8 p-4"
          />
          <p className="mt-4">{userData.projectDescriptionMini}</p>
        </div>
      </div>
    </>
  )
}
