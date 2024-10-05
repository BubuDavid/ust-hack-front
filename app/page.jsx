import { GlobeDemo } from "@/components/ui/globe-wrapper"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function MainPage() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-col md:flex-row pt-12 md:pt-0 items-center md:justify-between justify-center w-full h-full bg-black">
        <div className="absolute top-0 left-0 w-screen h-[110vh] -z-10 bg-black"></div>
        <div className="text-white font-bold md:text-8xl text-3xl w-full h-full flex flex-col md:items-center items-center md:justify-start justify-center">
          <h1 className="md:text-7xl mb-2">
            Colaborative <span className="text-primary">Impact</span>
          </h1>
          <hr className="w-full border-0 h-[2px] my-5 bg-gradient-to-r from-transparent via-white to-transparent" />
          <p className="md:text-4xl text-xl font-extralight">
            Collective Solutions for collective problems
          </p>
        </div>
        <GlobeDemo className="md:translate-x-[100px]" />
      </div>

      <div className="h-full w-full bg-background flex md:py-8 flex-col items-center justify-start">
        <div className="bg-white md:w-1/2 w-full rounded p-16 relative">
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
        <div className="px-12 md:px-0">
          <p className="pt-4">
            At ImColab, we believe in collaboration, innovation, and the power
            of collective action to drive social change
          </p>
        </div>
      </div>
    </div>
  )
}
