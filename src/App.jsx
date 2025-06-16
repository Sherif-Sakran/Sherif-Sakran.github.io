import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import About from './pages/About'
import Projects from './pages/Projects'
import Project from './pages/Project'
import Resume from './pages/Resume'
import './App.css'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<About />} />
          <Route path="resume" element={<Resume />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<Project />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </HashRouter>  )
}

export default App
