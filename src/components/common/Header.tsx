import { useState } from 'react'
import { Link } from 'react-router-dom'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import PersonSearchIcon from '@mui/icons-material/PersonSearch'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AddIcon from '@mui/icons-material/Add'
import LoginIcon from '@mui/icons-material/Login'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b-2 border-brand-teal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center">
              <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Atooshi" className="h-8" />
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/projects" className="flex items-center gap-1 text-brand-gray hover:text-brand-teal transition-colors">
                <FolderOpenIcon fontSize="small" />
                プロジェクト
              </Link>
              <Link to="/match" className="flex items-center gap-1 text-brand-gray hover:text-brand-teal transition-colors">
                <PersonSearchIcon fontSize="small" />
                人材を探す
              </Link>
              <Link to="/dashboard" className="flex items-center gap-1 text-brand-gray hover:text-brand-teal transition-colors">
                <DashboardIcon fontSize="small" />
                ダッシュボード
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/projects/new" className="hidden sm:inline-flex items-center gap-1 px-4 py-2 bg-brand-green text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium">
              <AddIcon fontSize="small" />
              プロジェクトを始める
            </Link>
            <button className="hidden md:flex items-center gap-1 text-brand-gray hover:text-brand-dark transition-colors">
              <LoginIcon fontSize="small" />
              ログイン
            </button>
            {/* モバイル用ハンバーガーボタン */}
            <button
              className="md:hidden flex items-center text-brand-gray hover:text-brand-dark transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="メニュー"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-brand-light">
            <div className="flex flex-col gap-4">
              <Link
                to="/projects"
                className="flex items-center gap-2 text-brand-gray hover:text-brand-teal transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <FolderOpenIcon fontSize="small" />
                プロジェクト
              </Link>
              <Link
                to="/match"
                className="flex items-center gap-2 text-brand-gray hover:text-brand-teal transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <PersonSearchIcon fontSize="small" />
                人材を探す
              </Link>
              <Link
                to="/dashboard"
                className="flex items-center gap-2 text-brand-gray hover:text-brand-teal transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <DashboardIcon fontSize="small" />
                ダッシュボード
              </Link>
              <Link
                to="/projects/new"
                className="flex items-center gap-2 text-brand-green hover:opacity-80 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                <AddIcon fontSize="small" />
                プロジェクトを始める
              </Link>
              <button className="flex items-center gap-2 text-brand-gray hover:text-brand-dark transition-colors">
                <LoginIcon fontSize="small" />
                ログイン
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
