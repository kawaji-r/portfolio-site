import ProfilePage from '../_components/templates/ProfilePage'

export default function Profile() {
  const title = 'あなたの名前'
  const favicon = '/favicon.ico'
  const h1 =
    'こんにちは、私の名前は<span className="text-blue-600">あなたの名前</span>です。'
  const desc = '私はWebエンジニアとして活動しています。'
  return <ProfilePage title={title} favicon={favicon} h1={h1} desc={desc} />
}
