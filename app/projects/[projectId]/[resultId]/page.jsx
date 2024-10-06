import { getBlobs } from "@/actions/getBlobs"

export default async function ResultPage({ params }) {
  const resultId = decodeURIComponent(params.resultId)
  const prefix = `${params.projectId}/${resultId.toLowerCase()}`

  const result = await getBlobs(prefix, "metadata")
  const metadatasResult = result[0]
  const currentMeta = metadatasResult.find(
    (item) => item.name.toLowerCase() === resultId,
  )

  console.log(currentMeta)

  return (
    <div>
      <h1>
        {params.projectId} - {resultId}
      </h1>
    </div>
  )
}
