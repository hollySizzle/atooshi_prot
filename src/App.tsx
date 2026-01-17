import { Routes, Route } from 'react-router-dom'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Landing from './pages/Landing'
import ProjectList from './pages/ProjectList'
import ProjectDetail from './pages/ProjectDetail'
import ProjectCreate from './pages/ProjectCreate'
import ProjectCreateTeam from './pages/ProjectCreateTeam'
import ProjectCreateConfirm from './pages/ProjectCreateConfirm'
import CommitterMatch from './pages/CommitterMatch'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/projects/create" element={<ProjectCreate />} />
          <Route path="/projects/create/team" element={<ProjectCreateTeam />} />
          <Route path="/projects/create/confirm" element={<ProjectCreateConfirm />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/match" element={<CommitterMatch />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
