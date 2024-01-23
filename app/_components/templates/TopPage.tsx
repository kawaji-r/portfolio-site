import Eyecatch from '../organisms/Eyecatch'
import SiteHead from '../organisms/SiteHead'
import GlobalNav from '../organisms/GlobalNav'
import Hero1 from '../windcss/Hero1'
import Services1 from '../windcss/Services1'

type TopPageType = {
  title: string
  favicon: string
  h1: string
  desc: string
}

export default function TopPage(props: TopPageType) {
  const { title, favicon, h1, desc } = props
  return (
    <>
      <SiteHead title={title} favicon={favicon} />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <GlobalNav page="home" />
        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
          <Hero1 />
          <Services1 />
          <Eyecatch h1={h1} desc={desc} />
        </main>
      </div>
    </>
  )
}
