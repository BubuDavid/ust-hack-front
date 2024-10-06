import { BlobServiceClient } from "@azure/storage-blob"

export default async function downloadFiles(fileName) {
  try {
    const AZURE_STORAGE_CONNECTION_STRING =
      process.env.AZURE_TABLE_CONNECTION_STRING
    const blobServiceClient = BlobServiceClient.fromConnectionString(
      AZURE_STORAGE_CONNECTION_STRING,
    )
    const containerClient = blobServiceClient.getContainerClient("imcolab")

    const blobClient = containerClient.getBlobClient(fileName)
    const downloadBlockBlobResponse = await blobClient.download()

    const downloadedZip = await streamToBuffer(
      downloadBlockBlobResponse.readableStreamBody,
    )

    return downloadedZip
  } catch (error) {
    return {
      error: error,
    }
  }
}

// Utility function to stream the blob to a buffer
async function streamToBuffer(readableStream) {
  const chunks = []
  for await (const chunk of readableStream) {
    chunks.push(chunk instanceof Buffer ? chunk : Buffer.from(chunk))
  }
  return Buffer.concat(chunks)
}
