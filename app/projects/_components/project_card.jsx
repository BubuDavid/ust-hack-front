import { getTableRecord } from "@/actions/tables"
import Image from "next/image"
import Link from "next/link"

export async function ProjectCard({ projectId }) {
  const projectData = await getTableRecord(projectId)
  const objetiveList = projectData.Objetives.split(",")
  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
      <div className="relative flex p-8 pr-0 pt-0 items-center">
        <Image
          src={projectData.ImgURL}
          width={4096}
          height={2722}
          alt="Water Pollution"
          className="shadow-lg w-[520px] translate-x-8 z-20"
        />
        <div className="w-[60px] h-[60px] border-8 border-black border-r-0 border-t-0 absolute bottom-0 left-0"></div>
        <div className="py-16 pr-4 pl-8 bg-white">
          <div className="flex-1 bg-white pt-8 pb-2 relative px-8 w-full">
            <div className="w-[60px] h-[60px] border-8 z-50 border-black border-l-0 border-b-0 absolute top-0 right-0"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 text-right">
              {projectData.ProjectName}
            </h2>
            <p className="text-gray-700 mb-4">
              {projectData.projectDescriptionMini}
            </p>
            <h3 className="text-sm font-semibold text-primary mb-2">
              Objectives
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 text-sm">
              {objetiveList.map((ob) => (
                <li key={ob}>{ob}</li>
              ))}
            </ul>
            <div className="text-right">
              <Link
                href={`/projects/${projectData.partitionKey}`}
                className="text-primary font-light underline"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
