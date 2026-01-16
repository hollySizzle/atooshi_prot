/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ユーザータイプカラー
        innovator: {
          DEFAULT: '#3b82f6', // blue-500
          light: '#93c5fd',   // blue-300
          dark: '#1d4ed8',    // blue-700
        },
        committer: {
          DEFAULT: '#10b981', // emerald-500
          light: '#6ee7b7',   // emerald-300
          dark: '#047857',    // emerald-700
        },
        investor: {
          DEFAULT: '#8b5cf6', // purple-500
          light: '#c4b5fd',   // purple-300
          dark: '#6d28d9',    // purple-700
        },
      },
    },
  },
  plugins: [],
}
