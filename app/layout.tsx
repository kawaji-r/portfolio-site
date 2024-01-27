import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "River's Portfolio Site",
  description: 'システムエンジニア「River」のポートフォリオサイトです'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-body bg-base">{children}</body>
    </html>
  )
}
