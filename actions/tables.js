"use server"

import { TableClient } from "@azure/data-tables"

export async function getTableRecord(recordPK) {
  const connectionString = process.env.AZURE_TABLE_CONNECTION_STRING
  if (!connectionString) {
    throw new Error("Azure connection string not set in environment variables.")
  }

  const tableClient = TableClient.fromConnectionString(
    connectionString,
    "imcolab",
  )

  try {
    const result = await tableClient.getEntity(recordPK, recordPK)
    return result
  } catch (error) {
    return { error: error.message }
  }
}
