/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ブランドカラー
        brand: {
          teal: '#00CEC9',      // アクセント
          gray: '#636E72',      // サブテキスト
          dark: '#2D3436',      // メインテキスト
          green: '#10B981',     // CTA
        },
        // ユーザータイプカラー
        innovator: {
          DEFAULT: '#3b82f6',
          light: '#93c5fd',
          dark: '#1d4ed8',
        },
        committer: {
          DEFAULT: '#10b981',
          light: '#6ee7b7',
          dark: '#047857',
        },
        investor: {
          DEFAULT: '#8b5cf6',
          light: '#c4b5fd',
          dark: '#6d28d9',
        },
      },
    },
  },
  plugins: [],
}
