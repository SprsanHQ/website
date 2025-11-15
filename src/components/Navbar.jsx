import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [location])

  const menuItems = [
    {
      name: 'Platform',
      submenu: [
        { name: 'Overview', path: '/platform' },
        { name: 'Features', path: '/features' },
        { name: 'Integrations', path: '/integrations' },
      ],
    },
    {
      name: 'Solutions',
      submenu: [
        { name: 'By Industry', path: '/solutions' },
        { name: 'Use Cases', path: '/use-cases' },
      ],
    },
    {
      name: 'Developers',
      submenu: [
        { name: 'Documentation', path: '/documentation' },
        { name: 'SDK & APIs', path: '/developers' },
      ],
    },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Resources', path: '/resources' },
  ]

  const secondaryMenu = [
    { name: 'About', path: '/about' },
    { name: 'Investors', path: '/investors' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-bg/80 backdrop-blur-xl border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/logo.png"
              alt="Sparsan Logo"
              className="h-10 w-auto transform group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-2xl font-display font-bold neon-text">
              Sparsan
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.submenu ? (
                  <>
                    <button className="flex items-center space-x-1 text-gray-300 hover:text-neon-cyan transition-colors duration-200">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 glass-card p-2"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className="block px-4 py-2 rounded-lg text-gray-300 hover:text-neon-cyan hover:bg-white/5 transition-all duration-200"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-gray-300 hover:text-neon-cyan transition-colors duration-200 ${
                      location.pathname === item.path ? 'text-neon-cyan' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Secondary Menu */}
            <div className="flex items-center space-x-4 border-l border-white/10 pl-8">
              {secondaryMenu.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm text-gray-400 hover:text-neon-cyan transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://calendly.com/av-sparsan/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                Book Demo
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-dark-navy/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === item.name ? null : item.name
                          )
                        }
                        className="flex items-center justify-between w-full text-gray-300 py-2"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-2 mt-2"
                          >
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.path}
                                to={subItem.path}
                                className="block py-2 text-gray-400 hover:text-neon-cyan"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="block py-2 text-gray-300 hover:text-neon-cyan"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="border-t border-white/10 pt-4 space-y-2">
                {secondaryMenu.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block py-2 text-gray-400 hover:text-neon-cyan"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="border-t border-white/10 pt-4 space-y-3">
                <a
                  href="https://calendly.com/av-sparsan/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-primary block text-center"
                >
                  Book Demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
