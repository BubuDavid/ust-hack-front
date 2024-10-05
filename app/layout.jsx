import localFont from "next/font/local"
import { ClerkProvider } from "@clerk/nextjs"

import { Navbar } from "@/components/navbar/navbar"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import { siteConfig } from "@/config/site"
import { headers } from "next/headers"
import { cn } from "@/lib/utils"

import "./globals.css"

const fontSans = localFont({
  src: "fonts/Agrandir-Regular.otf",
})

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/logo.png",
      href: "/logo.png",
    },
  ],
}

export default async function RootLayout({ children }) {
  const headerList = headers()
  const pathname = headerList.get("x-current-path")
  let extraClass = "max-w-screen-xl"
  if (pathname === "/sign-in" || pathname === "/sign-up") {
    extraClass = ""
  }
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn("h-screen overflow-x-hidden", fontSans.className)}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className={cn("kg-black")}>
              <div className="z-0 pointer-events-none inset-0 flex items-center justify-center dark:bg-black"></div>
              <div className={cn("z-20 min-h-screen mx-auto", extraClass)}>
                {children}
              </div>
            </main>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
