import Head from 'next/head'
export default function SiteHead({
  title,
  favicon
}: {
  title: string
  favicon: string
}) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href={favicon} />
    </Head>
  )
}
