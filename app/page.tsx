import TopPage from './_components/templates/TopPage'

export default function Home() {
  const title = 'あなたの名前'
  const favicon = '/favicon.ico'
  const h1 =
    'こんにちは、私の名前は<span className="text-blue-600">あなたの名前</span>です。'
  const desc = '私はWebエンジニアとして活動しています。'
  return <TopPage title={title} favicon={favicon} h1={h1} desc={desc} />
}
