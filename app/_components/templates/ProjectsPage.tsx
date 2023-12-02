import Eyecatch from '../organisms/Eyecatch'
import Navigation from '../molecules/Navigation'
import SiteHead from '../organisms/SiteHead'
import GlobalNav from '../organisms/GlobalNav'

type ProjectsPageType = {
  title: string
  favicon: string
  h1: string
  desc: string
  projects: { href: string; text: string }[]
}

export default function ProjectsPage(props: ProjectsPageType) {
  const { title, favicon, h1, desc, projects } = props

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <SiteHead title={title} favicon={favicon} />
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <Eyecatch h1={h1} desc={desc} />
        <GlobalNav />
        <Navigation items={projects} />
      </main>
    </div>
  )
}
