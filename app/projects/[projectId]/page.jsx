import { getTableRecord } from "@/actions/tables"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default async function ProjectIDPage({ params }) {
  const projectData = await getTableRecord(params.projectId)
  const profileData = await getTableRecord(projectData.Owner)

  return (
    <div className="px-8">
      <div className="flex flex-col md:flex-row md:justify-between items-start mb-2 md:mb-0">
        <h1 className="text-primary text-6xl py-8">
          {projectData.ProjectName}
        </h1>
        <div className="flex justify-center items-center">
          <Link
            href={`/profiles/${profileData.ProjectName}`}
            className="flex justify-between items-center space-x-4"
          >
            <Image
              src={profileData.ImgURL}
              width={100}
              height={100}
              alt="profile"
              className="rounded-full w-16 border-4 border-primary p-1"
            />
            <p className="text-sm">Go to the organizer profile</p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-between px-16">
        <Image src={projectData.img2} width={400} height={800} alt="img1" />
        <div className="md:w-[50%] w-full md:px-8 py-16">
          <div className="flex md:justify-around justify-between items-center w-full mb-8">
            <div className="text-center md:text-2xl text-xl">
              <p className="text-[#5E17EB] md:text-5xl text-3xl">
                {projectData.Volunteers}
              </p>
              <p className="font-bold">Volunteers</p>
            </div>
            <div className="text-center md:text-2xl text-xl">
              <p className="text-[#5E17EB] md:text-5xl text-3xl">
                {projectData.Reports}
              </p>
              <p className="font-bold">Reports</p>
            </div>
          </div>
          <p className="text-center md:text-left">
            {projectData.ProjectDescription}
          </p>
        </div>
      </div>
      <h1 className="text-primary text-4xl">Objetives</h1>
      <div className="objetives flex md:flex-row flex-col-reverse md:justify-between md:items-start item-center mb-16">
        <ol className="md:w-[50%] w-full md:px-8 md:pt-16 pt-8">
          {projectData.ObjetivesComplete.split(".").map((x) => {
            if (x.length <= 4) return null
            return (
              <li key={x}>
                <span className="font-extrabold">{x.split(":")[0]}:</span>
                <span>{x.split(":")[1]}</span>
              </li>
            )
          })}
        </ol>
        <Image src={projectData.img3} width={500} height={800} alt="img1" />
      </div>
      <div className="objetives flex flex-col md:flex-row md:justify-between md:items-start justify-center items-center md:mb-16">
        <Image src={projectData.img4} width={500} height={800} alt="img1" />
        <ol className="md:w-[50%] w-full px-8 pt-16">
          {projectData.Methodology.split(".").map((x) => {
            if (x.length <= 4) return null
            return (
              <li key={x}>
                <span className="font-extrabold">{x.split(":")[0]}:</span>
                <span>{x.split(":")[1]}</span>
              </li>
            )
          })}
        </ol>
      </div>
      <div className="card bg-white rounded md:p-8 mb-4 mt-4 flex items-center flex-col justify-center">
        <h1 className="text-left text-3xl text-black/70">
          ESG Validation
        </h1>
        <Image src="/essg.gif" width={700} height={350} alt="esg" />
      </div>
      <div className="flex flex-col w-full items-center justify-center md:pb-32 space-y-8">
        <Link href="/protected">
          <Button size="lg" className="text-xl">
            Join {projectData.ProjectName}
          </Button>
        </Link>
        <p className="text-center text-2xl">{projectData.Invitation}</p>
      </div>
    </div>
  )
}
