import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>あなたの名前</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          こんにちは、私の名前は<span className="text-blue-600">あなたの名前</span>です。
        </h1>

        <p className="mt-3 text-2xl">
          私はWebエンジニアとして活動しています。
        </p>

        <nav>
          <ul className="flex justify-center space-x-10 mt-10">
            <li><a href="/">ホーム</a></li>
            <li><a href="/profile">プロフィール</a></li>
            <li><a href="/projects">プロジェクト</a></li>
            <li><a href="/blog">ブログ</a></li>
            <li><a href="/contact">コンタクト</a></li>
          </ul>
        </nav>

      </main>
    </div>
  )
}
