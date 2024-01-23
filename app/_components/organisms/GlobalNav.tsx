import WindGlobalNav from '@/_components/windcss/WindGlobalNav'

export default function GlobalNav({ page }: { page: string }) {
  const navContent = [
    { name: 'ホーム', href: '/', current: page === 'home' },
    { name: 'プロフィール', href: '/profile', current: page === 'profile' },
    { name: 'プロジェクト', href: '/projects', current: page === 'project' },
    { name: 'ブログ', href: '/blog', current: page === 'blog' },
    { name: 'コンタクト', href: '/contact', current: page === 'contact' }
  ]
  const profile = {
    flg: false,
    content: {
      icon: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Ted'
    }
  }
  return <WindGlobalNav navContent={navContent} profile={profile} />
}
