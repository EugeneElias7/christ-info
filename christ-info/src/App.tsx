import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import ProgrammesPage from './pages/ProgrammesPage'
import ProgrammeDetailPage from './pages/ProgrammeDetailPage'
import AboutUniversityPage from './pages/AboutUniversityPage'
import FacultyPage from './pages/FacultyPage'
import SamagraPage from './pages/SamagraPage'

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-cream font-sans">
      <ScrollToTop />
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/programmes" element={<ProgrammesPage />} />
            <Route path="/programmes/:id" element={<ProgrammeDetailPage />} />
            <Route path="/about-university" element={<AboutUniversityPage />} />
            <Route path="/faculty" element={<FacultyPage />} />
            <Route path="/samagra" element={<SamagraPage />} />
            <Route path="*" element={
              <div className="min-h-screen bg-cream pt-nav-h flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-display-sm font-serif text-maroon mb-2">404</h1>
                  <p className="text-body text-charcoal/60 font-sans mb-4">Page not found</p>
                  <a href="/" className="text-label-sm font-sans text-gold hover:text-gold-light transition-colors">
                    ← Back to Home
                  </a>
                </div>
              </div>
            } />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <Footer />
    </div>
  )
}

export default App
