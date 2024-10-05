import Image from "next/image"
import { GlobeDemo } from "@/components/ui/globe-wrapper"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function MainPage() {
  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-between w-full h-full bg-black">
        <div className="absolute top-0 left-0 w-screen h-[110vh] -z-10 bg-black"></div>
        <div className="text-white font-bold text-8xl w-full h-full flex flex-col items-center justify-start">
          <h1 className="text-7xl mb-2">
            Colaborative <span className="text-primary">Impact</span>
          </h1>
          <hr className="w-full border-0 h-[2px] my-5 bg-gradient-to-r from-transparent via-white to-transparent" />
          <p className="text-4xl font-extralight">
            Collective Solutions for collective problems
          </p>
        </div>
        <GlobeDemo className="translate-x-[100px]" />
      </div>

      <div className="h-full w-full bg-background flex py-8 flex-col items-center justify-start">
        <div className="bg-white w-1/2 rounded p-16 relative">
          <h1 className="text-primary text-xl my-4">About us</h1>
          <p>
            ImColab is a platform dedicated to centralizing and empowering
            social impact projects. We provide continuous support and tracking
            for each initiative, enabling constant data collection, progress
            monitoring, and the creation of a project history. This allows
            organizations to showcase their growth and outcomes transparently.
          </p>
          <Link href="/projects">
            <Button className="absolute bottom-8 right-8">
              Submit a projeect
            </Button>
          </Link>
        </div>
        <p className="pt-4">
          At ImColab, we believe in collaboration, innovation, and the power of
          collective action to drive social change
        </p>
      </div>
    </div>
  )
}
