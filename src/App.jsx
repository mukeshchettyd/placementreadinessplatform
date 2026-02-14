import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Practice from './pages/Practice'
import Companies from './pages/Companies'
import Resume from './pages/Resume'
import Settings from './pages/Settings'

import './styles/global.css'
import './styles/components.css'
import './styles/navigation.css'
import './styles/pages.css'
import './styles/dashboard.css'

function App() {
  return (
    <BrowserRouter basename="/placement-readiness-platform">
      <div className="app-layout">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
