import { Routes, Route } from 'react-router-dom'
import Atmosphere from './components/layout/Atmosphere'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ExperiencePage from './pages/ExperiencePage'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Atmosphere />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
      </Routes>
      <Footer />
    </>
  )
}
