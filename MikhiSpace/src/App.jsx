import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import HobbiesPage from './pages/HobbiesPage'
import NotebookStarter from './starter/NotebookStarter'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/hobbies" element={<HobbiesPage />} />
        {/* 🎨 Notebook Starter Template - generic page */}
        <Route path="/starter" element={<NotebookStarter />} />
        {/* 🎨 Dynamic Project Pages - each project has unique content */}
        <Route path="/project/:slug" element={<NotebookStarter />} />
      </Routes>
    </Router>
  )
}

export default App
