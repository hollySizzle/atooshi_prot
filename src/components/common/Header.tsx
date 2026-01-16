import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white border-b-2 border-brand-teal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center">
              <img src="/logo.svg" alt="Atooshi" className="h-8" />
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/projects" className="text-brand-gray hover:text-brand-teal transition-colors">
                プロジェクト
              </Link>
              <Link to="/match" className="text-brand-gray hover:text-brand-teal transition-colors">
                人材を探す
              </Link>
              <Link to="/dashboard" className="text-brand-gray hover:text-brand-teal transition-colors">
                仕組み
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/projects/new" className="hidden sm:inline-flex items-center px-4 py-2 bg-brand-green text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium">
              プロジェクトを始める
            </Link>
            <button className="text-brand-gray hover:text-brand-dark transition-colors">
              ログイン
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
