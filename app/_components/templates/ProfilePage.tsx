import Eyecatch from '../organisms/Eyecatch'
import SiteHead from '../organisms/SiteHead'
import GlobalNav from '../organisms/GlobalNav'

type ProfilePageType = {
  title: string
  favicon: string
  h1: string
  desc: string
}

export default function ProfilePage(props: ProfilePageType) {
  const { title, favicon, h1, desc } = props
  return (
    <>
      <SiteHead title={title} favicon={favicon} />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <GlobalNav page="profile" />
        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
          <Eyecatch h1={h1} desc={desc} />
        </main>
      </div>
    </>
  )
}
