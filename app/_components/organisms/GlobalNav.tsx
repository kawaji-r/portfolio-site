import Navigation from '../molecules/Navigation'

export default function GlobalNav() {
  const globalNav = [
    { href: '/', text: 'ホーム' },
    { href: '/profile', text: 'プロフィール' },
    { href: '/projects', text: 'プロジェクト' },
    { href: '/blog', text: 'ブログ' },
    { href: '/contact', text: 'コンタクト' }
  ]

  return <Navigation items={globalNav} />
}
