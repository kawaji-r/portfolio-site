export default function Section({
  id,
  children
}: {
  id: string
  children: JSX.Element
}) {
  return <section id={id}>{children}</section>
}
