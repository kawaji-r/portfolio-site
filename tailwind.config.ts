import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: [
          "YakuHanJP_Noto",
          "Noto Sans Japanese",
          "Hiragino Sans",
          "Hiragino Kaku Gothic ProN",
          "Meiryo",
          "sans-serif"
        ],
        maru: [
          'Zen Maru Gothic',
        ]
      },
      backgroundImage: {
      },
      colors: {
        main: '#E76F51',
        accent: '#264653',
        base: '#fffbec'
      },
      animation: {
          "wobble-hor-bottom": "wobble-hor-bottom 2.5s ease infinite both"
      },
      keyframes: {
          "wobble-hor-bottom": {
              "33%": {
                  transform: "translateX(-20px) rotate(-6deg)"
              },
              "66%": {
                  transform: "translateX(20px) rotate(6deg)"
              },
          }
      }
    },
  },
  plugins: [],
}
export default config
