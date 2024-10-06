import { BlobServiceClient } from "@azure/storage-blob"

export async function getBlobs(prefix = "", filters = "") {
  const connectionString = process.env.AZURE_TABLE_CONNECTION_STRING
  const containerName = "imcolab"
  const blobService = BlobServiceClient.fromConnectionString(connectionString)
  const containerClient = blobService.getContainerClient(containerName)

  const getBlobsInContainer = async (containerClient) => {
    const returnedBlobUrls = []

    for await (const blob of containerClient.listBlobsFlat((prefix = prefix))) {
      returnedBlobUrls.push(blob)
    }

    return returnedBlobUrls
  }

  const items = await getBlobsInContainer(containerClient)
  const names = items.map((i) => i.name)
  const filteredNames = names.filter((x) => x.includes(filters))

  const results = []
  for (const f of filteredNames) {
    const blobClient = containerClient.getBlobClient(f)
    const downloadBlockBlobResponse = await blobClient.download()
    const downloadedContent = await streamToString(
      downloadBlockBlobResponse.readableStreamBody,
    )
    results.push(downloadedContent)
  }

  return [results, filteredNames]
}

async function streamToString(readableStream) {
  return new Promise((resolve, reject) => {
    const chunks = []
    readableStream.on("data", (data) => {
      chunks.push(data.toString())
    })
    readableStream.on("end", () => {
      resolve(chunks.join(""))
    })
    readableStream.on("error", reject)
  })
}
