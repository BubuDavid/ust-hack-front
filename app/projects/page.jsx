import { getAllTables } from "@/actions/allTables"
import { ProjectCard } from "./_components/project_card"

export default async function ProjectsPage() {
  const projects = await getAllTables()

  return (
    <div>
      {projects.map((project, key) => {
        if (project.IsProject) {
          return <ProjectCard key={key} projectId={project.partitionKey} />
        }
        return null
      })}
    </div>
  )
}
