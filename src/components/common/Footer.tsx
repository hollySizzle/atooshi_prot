import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="flex items-center mb-2">
              <img src="/logo.svg" alt="Atooshi" className="h-6 brightness-0 invert" />
            </Link>
            <p className="text-gray-400 text-sm">実行力でつなぐクラウドファンディング</p>
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-brand-teal transition-colors">会社情報</a>
            <a href="#" className="hover:text-brand-teal transition-colors">利用規約</a>
            <a href="#" className="hover:text-brand-teal transition-colors">プライバシー</a>
            <a href="#" className="hover:text-brand-teal transition-colors">お問い合わせ</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
