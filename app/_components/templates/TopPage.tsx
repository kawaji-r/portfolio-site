import Eyecatch from '../organisms/Eyecatch'
import Navigation from '../molecules/Navigation'
import SiteHead from '../organisms/SiteHead'
import GlobalNav from '../organisms/GlobalNav'

type TopPageType = {
  title: string
  favicon: string
  h1: string
  desc: string
}

export default function TopPage(props: TopPageType) {
  const { title, favicon, h1, desc } = props

  const globalNav = [
    { href: '/', text: 'ホーム' },
    { href: '/profile', text: 'プロフィール' },
    { href: '/projects', text: 'プロジェクト' },
    { href: '/blog', text: 'ブログ' },
    { href: '/contact', text: 'コンタクト' }
  ]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <SiteHead title={title} favicon={favicon} />
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <Eyecatch h1={h1} desc={desc} />
        <GlobalNav />
      </main>
    </div>
  )
}
