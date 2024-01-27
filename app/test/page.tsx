'use client'
import React, { useState, useEffect } from 'react'

// 目次の項目とセクションIDのマッピング
const toc = [
  { id: 'section1', title: 'セクション 1' },
  { id: 'section2', title: 'セクション 2' },
  { id: 'section3', title: 'セクション 3' }
  // 他のセクション...
]

const MyComponent = () => {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    // スクロールのたびに呼び出される関数
    const onScroll = () => {
      let currentSection = ''

      toc.forEach(section => {
        const element = document.getElementById(section.id)
        if (element === null) return
        // 現在地取得
        const scrollPosition = window.scrollY

        // 要素の高さが現在地(+100)より高かったらcurrentSectionに格納
        if (element.offsetTop <= scrollPosition + 100) {
          currentSection = section.id
        }
      })

      // currentSectionをアクティブの要素としてセット
      setActiveId(currentSection)
    }

    // リスナーをセット
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="flex">
      <div className="fixed w-50">
        <ul>
          {toc.map(item => (
            <li
              key={item.id}
              className={item.id === activeId ? 'font-bold' : 'font-normal'}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="ml-48">
        {/* ここに本文のコンテンツを追加 */}
        <div id="section1" className="h-screen">
          セクション 1 の内容
        </div>
        <div id="section2" className="h-screen">
          セクション 2 の内容
        </div>
        <div id="section3" className="h-screen">
          セクション 3 の内容
        </div>
        {/* 他のセクションのコンテンツ */}
      </div>
    </div>
  )
}

export default MyComponent
