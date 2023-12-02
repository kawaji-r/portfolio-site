export default function H1({ children }: { children: string }) {
  return (
    <h1
      className="text-6xl font-bold"
      dangerouslySetInnerHTML={{ __html: children }}
    ></h1>
  )
}
