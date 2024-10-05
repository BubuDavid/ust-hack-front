"use server"

import { TableClient } from "@azure/data-tables"

export async function getAllTables() {
  const connectionString = process.env.AZURE_TABLE_CONNECTION_STRING
  if (!connectionString) {
    throw new Error("Azure connection string not set in environment variables.")
  }

  const tableClient = TableClient.fromConnectionString(
    connectionString,
    "imcolab",
  )

  try {
    const result = tableClient.listEntities()
    const allItems = []
    const pagesIterator = result.byPage()
    for await (const page of pagesIterator) {
      allItems.push(...page)
    }

    return allItems
  } catch (error) {
    return { error: error.message }
  }
}
