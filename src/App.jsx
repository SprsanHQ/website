import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Pages
import Home from './pages/Home'
import Features from './pages/Features'
import Developers from './pages/Developers'
import Platform from './pages/Platform'
import Integrations from './pages/Integrations'
import Solutions from './pages/Solutions'
import Pricing from './pages/Pricing'
import Documentation from './pages/Documentation'
import Resources from './pages/Resources'
import Investors from './pages/Investors'
import UseCases from './pages/UseCases'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-x-hidden">
      <Navbar />
      <ScrollToTop />

      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  )
}

export default App
