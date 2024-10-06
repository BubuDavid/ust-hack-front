import { getBlobs } from "@/actions/getBlobs"
import { InteractiveMapa } from "./_components/mapa"
import { Button } from "@/components/ui/button"
import { DownloadButton } from "./_components/download-button"

export default async function ResultPage({ params }) {
  const resultId = decodeURIComponent(params.resultId)
  const prefix = `${params.projectId}/${resultId.toLowerCase()}`

  const result = await getBlobs(prefix, "metadata")
  const metadatasResult = []
  for (let i = 0; i < result[0].length; i++) {
    metadatasResult.push([JSON.parse(result[0][i]), result[1][i]])
  }
  const currentMeta = metadatasResult.filter(
    (item) => item[0].name.toLowerCase() === resultId.toLowerCase(),
  )[0]

  let currentPath = ""
  try {
    currentPath = currentMeta[1].split("/").slice(0, 2).join("/") + "/"
  } catch {
    console.log({ resultId: resultId.toLowerCase() })
    console.log({ currentMeta })
    console.log({ result })
    console.log({ metadatasResult })
    return null
  }

  const downloadLink = currentMeta[0].download_link

  const allMapas = await getBlobs(currentPath, "mapa")
  let currentMapa = null
  for (let i = 0; i < allMapas[0].length; i++) {
    if (allMapas[1][i].split("/")[1] === resultId.toLowerCase()) {
      currentMapa = [allMapas[0][i], allMapas[1][i]]
    }
  }

  return (
    <div>
      <div className="flex justify-between">
        <h1>
          {params.projectId} - {resultId}
        </h1>
        <DownloadButton downloadLink={downloadLink} />
      </div>
      <InteractiveMapa htmlString={currentMapa[0]} />
    </div>
  )
}
