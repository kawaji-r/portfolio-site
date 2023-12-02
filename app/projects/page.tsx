import ProjectsPage from '../_components/templates/ProjectsPage'

export default function Projects() {
  const title = 'あなたのプロジェクト'
  const favicon = '/favicon.ico'
  const h1 = 'これは私のプロジェクトページです。'
  const desc = 'ここでは、私が開発に関与したプロジェクトの一部を紹介します。'
  const projects = [
    { href: '#project1', text: 'プロジェクト1' },
    { href: '#project2', text: 'プロジェクト2' },
    { href: '#project3', text: 'プロジェクト3' }
  ]
  return (
    <ProjectsPage
      title={title}
      favicon={favicon}
      h1={h1}
      desc={desc}
      projects={projects}
    />
  )
}
