import Ul from '../atoms/Ul'
import Li from '../atoms/Li'
import A from '../atoms/A'

export default function Navigation({
  items
}: {
  items: { href: string; text: string }[]
}) {
  return (
    <nav>
      <Ul>
        {items.map(item => (
          <Li>
            <A href={item.href}>{item.text}</A>
          </Li>
        ))}
      </Ul>
    </nav>
  )
}
