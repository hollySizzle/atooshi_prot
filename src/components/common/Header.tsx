import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-bold text-gray-900">
              Atooshi
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/projects" className="text-gray-600 hover:text-gray-900">
                プロジェクト
              </Link>
              <Link to="/match" className="text-gray-600 hover:text-gray-900">
                人材を探す
              </Link>
              <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">
                仕組み
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900">
              ログイン
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
