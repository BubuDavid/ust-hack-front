import { getTableRecord } from "@/actions/tables"
import { ProjectCard } from "@/app/projects/_components/project_card"
import { FaFacebookSquare } from "react-icons/fa"
import { FaAt } from "react-icons/fa"
import { FaSquareInstagram } from "react-icons/fa6"
import { AboutMe } from "./_compontents/aboutMe"

export default async function ProjectIDPage({ params }) {
  let projectId = "1"
  if (params.profileId === "URBE") projectId = "2"
  const projectData = await getTableRecord(projectId)
  const userData = await getTableRecord(params.profileId)

  return (
    <div className="px-8">
      <nav className="flex justify-between items-center">
        <h1 className="text-6xl">{userData.ProjectName}</h1>
        <div className="bg-black p-8 pt-2 text-white text-xl flex flex-col space-y-4">
          <h2>Contact info</h2>
          <div className="flex space-x-2 justify-between">
            <FaFacebookSquare className=" text-xl" />
            <FaAt className=" text-xl" />
            <FaSquareInstagram className=" text-xl" />
          </div>
        </div>
      </nav>
      <AboutMe userData={userData} />
      <ProjectCard projectId={projectData.partitionKey} />
    </div>
  )
}
