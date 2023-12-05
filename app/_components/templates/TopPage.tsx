import Eyecatch from '../organisms/Eyecatch'
import SiteHead from '../organisms/SiteHead'
import GlobalNav from '../organisms/GlobalNav'
import WindGlobalNav from '../organisms/WindGlobalNav'

type TopPageType = {
  title: string
  favicon: string
  h1: string
  desc: string
}

export default function TopPage(props: TopPageType) {
  const { title, favicon, h1, desc } = props
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <SiteHead title={title} favicon={favicon} />
      <WindGlobalNav
        profile={{
          icon: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          name: 'Ted'
        }}
      />
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <Eyecatch h1={h1} desc={desc} />
        <GlobalNav />
      </main>
    </div>
  )
}
