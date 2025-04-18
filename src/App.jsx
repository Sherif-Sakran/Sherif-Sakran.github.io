import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="resume" element={<Resume />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </Router>  )
}

export default App
