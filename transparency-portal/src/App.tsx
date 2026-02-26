import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Homepage from './pages/Homepage'
import Budget from './pages/Budget'
import Procurement from './pages/Procurement'
import Projects from './pages/Projects'
import Officials from './pages/Officials'
import FOI from './pages/FOI'
import Reports from './pages/Reports'

function App() {
  return (
    <Router basename="/transparency-portal">
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/procurement" element={<Procurement />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/officials" element={<Officials />} />
          <Route path="/foi" element={<FOI />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
