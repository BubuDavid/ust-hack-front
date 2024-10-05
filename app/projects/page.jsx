import { getAllTables } from "@/actions/allTables"
import { ProjectCard } from "./_components/project_card"

export default async function ProjectsPage() {
  const projects = await getAllTables()

  return (
    <div>
      {projects.map((project) =>
        project.IsProject ? (
          <ProjectCard
            key={project.projectId}
            projectId={project.partitionKey}
          />
        ) : null,
      )}
    </div>
  )
}
