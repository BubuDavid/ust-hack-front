import Image from "next/image"
import { SignUp } from "@clerk/nextjs"
import Link from "next/link"

export default function SignUpPage() {
  return (
    <section className="w-screen h-screen flex justify-between items-center">
      <Link href="/">
        <Image
          src="/imcolab.png"
          width={200}
          height={200}
          className="absolute top-0 left-0 z-50 m-4"
          alt="logo"
        />
      </Link>
      <div className="w-full h-full flex items-center justify-center">
        <SignUp
          appearance={{
            elements: {
              formButtonPrimary: "your-org-button org-red-button",
            },
          }}
        />
      </div>
      <div className="overflow-hidden h-full w-full">
        <Image
          src="/sign-in-image.jpg"
          width={4096}
          height={2730}
          className="object-cover w-full h-full"
          alt="logo"
        />
      </div>
    </section>
  )
}
