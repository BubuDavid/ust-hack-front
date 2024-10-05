import * as React from "react"
import { ImSpinner9 } from "react-icons/im"
import { SignInButton } from "@clerk/nextjs"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { TiVendorMicrosoft } from "react-icons/ti"

export function UserAuthForm({ className, ...props }) {
  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Con tu cuenta de Microsoft
          </span>
        </div>
      </div>
      <React.Suspense fallback={<ImSpinner9 className="animate-spin" />}>
        <SignInButton
          className="w-full flex items-center justify-center border rounded-lg p-2 bg-primary-foreground hover:bg-muted transition-all"
          redirectUrl="/run-etl"
          mode="modal"
        >
          <Button>
            <TiVendorMicrosoft className="mr-2 h-4 w-4" />
            <p>Microsoft</p>
          </Button>
        </SignInButton>
      </React.Suspense>
    </div>
  )
}
