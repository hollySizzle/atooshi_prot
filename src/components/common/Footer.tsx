export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold">Atooshi</p>
            <p className="text-gray-400 text-sm">実行力でつなぐクラウドファンディング</p>
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white">会社情報</a>
            <a href="#" className="hover:text-white">利用規約</a>
            <a href="#" className="hover:text-white">プライバシー</a>
            <a href="#" className="hover:text-white">お問い合わせ</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
