import Image from "next/image"
import Link from "next/link"

export async function ResultCards({ data, projectId }) {
  return (
    <>
      {data.map((d, key) => (
        <Link href={`/projects/${projectId}/${d.name}`} key={key}>
          <div className="w-[300px] min-h-[200px] rounded overflow-hidden">
            <div className="w-full h-[200px]">
              <Image
                src={d.imgURL}
                width={300}
                height={200}
                alt={d.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h1 className="text-xl underline font-light mt-2 text-black text-center">
              {d.name}
            </h1>
          </div>
        </Link>
      ))}
    </>
  )
}
