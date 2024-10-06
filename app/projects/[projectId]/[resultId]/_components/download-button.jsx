import { Button } from "@/components/ui/button"
import Link from "next/link"

export function DownloadButton({ downloadLink }) {
  return (
    <Link href={downloadLink} target="_blank">
      <Button className="btn-download p-4 text-xl">Download Data</Button>
    </Link>
  )
}
