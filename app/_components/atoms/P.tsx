export default function P({ children }: { children: string }) {
  return (
    <p
      className="mt-3 text-2xl"
      dangerouslySetInnerHTML={{ __html: children }}
    ></p>
  )
}
