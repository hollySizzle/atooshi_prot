import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, useNavigate } from 'react-router-dom'
import App from './App.tsx'
import './styles/styles.scss'

// GitHub Pages の base パスを取得
const basename = import.meta.env.BASE_URL

// GitHub Pages 404 リダイレクト処理
function RedirectHandler({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()

  useEffect(() => {
    const redirect = sessionStorage.getItem('redirect')
    if (redirect) {
      sessionStorage.removeItem('redirect')
      // basename を除去してパスを取得
      const path = redirect.replace(basename, '/') || '/'
      navigate(path, { replace: true })
    }
  }, [navigate])

  return <>{children}</>
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <RedirectHandler>
        <App />
      </RedirectHandler>
    </BrowserRouter>
  </StrictMode>,
)
