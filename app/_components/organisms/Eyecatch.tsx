import Section from '../atoms/Section'
import H1 from '../atoms/H1'
import P from '../atoms/P'

export default function Eyecatch({ h1, desc }: { h1: string; desc: string }) {
  return (
    <Section id="eye-catch">
      <>
        <H1>{h1}</H1>
        <P>{desc}</P>
      </>
    </Section>
  )
}
