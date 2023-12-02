export default function A({
  href,
  children
}: {
  href: string
  children: string
}) {
  return <a href={href}>{children}</a>
}
