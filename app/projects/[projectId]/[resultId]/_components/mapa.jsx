function extractBodyFromHtml(htmlString) {
  return htmlString
  const bodyStartIndex = htmlString.toLowerCase().indexOf("<body")
  return bodyStartIndex !== -1 ? htmlString.slice(bodyStartIndex) : htmlString
}

export function InteractiveMapa({ htmlString }) {
  const bodyContent = extractBodyFromHtml(htmlString)

  return (
    <div
      className="interactive-map h-screen"
      dangerouslySetInnerHTML={{ __html: bodyContent }}
    />
  )
}
