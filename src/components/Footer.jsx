import { Link } from 'react-router-dom'
import {
  Github,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  MessageSquare,
} from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Platform', path: '/platform' },
      { name: 'Features', path: '/features' },
      { name: 'Integrations', path: '/integrations' },
      { name: 'Pricing', path: '/pricing' },
      { name: 'Security', path: '/platform#security' },
    ],
    developers: [
      { name: 'Documentation', path: '/documentation' },
      { name: 'API Reference', path: '/developers#api' },
      { name: 'SDKs', path: '/developers#sdks' },
      { name: 'GitHub', href: 'https://github.com/sparsan' },
      { name: 'Discord', href: 'https://discord.gg/sparsan' },
    ],
    solutions: [
      { name: 'By Industry', path: '/solutions' },
      { name: 'By Use Case', path: '/use-cases' },
      { name: 'Case Studies', path: '/resources#case-studies' },
      { name: 'Workflow Templates', path: '/solutions#templates' },
    ],
    company: [
      { name: 'About', path: '/about' },
      { name: 'Careers', path: '/about#careers' },
      { name: 'Blog', path: '/resources' },
      { name: 'Press', path: '/about#press' },
      { name: 'Contact', path: '/contact' },
      { name: 'Investors', path: '/investors' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Security', path: '/security' },
      { name: 'Compliance', path: '/compliance' },
      { name: 'Cookie Policy', path: '/cookies' },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/sparsan', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/sparsan', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/sparsan', label: 'GitHub' },
    { icon: Youtube, href: 'https://youtube.com/@sparsan', label: 'YouTube' },
  ]

  const certifications = [
    'SOC 2 Type II',
    'GDPR',
    'HIPAA',
    'ISO 27001',
  ]

  return (
    <footer className="bg-dark-navy border-t border-white/10">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-display font-bold mb-2 neon-text">
                Stay Updated
              </h3>
              <p className="text-gray-400">
                Get weekly insights on AI, product updates, and industry trends.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-neon-cyan text-white placeholder-gray-500"
              />
              <button className="btn-primary whitespace-nowrap">
                <Mail className="w-5 h-5 inline mr-2" />
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img
                src="/logo.png"
                alt="Sparsan Logo"
                className="h-10 w-auto"
              />
              <span className="text-xl font-display font-bold neon-text">
                Sparsan
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Agentic AI Infrastructure Platform. Deploy intelligent agents across any channel in 15 minutes.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon-cyan transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-neon-cyan transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-neon-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-white">Developers</h4>
            <ul className="space-y-3">
              {footerLinks.developers.map((link) => (
                <li key={link.name}>
                  {link.href ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-neon-cyan transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-neon-cyan transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-white">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-neon-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-neon-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-neon-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Sparsan. All rights reserved.
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-xs text-gray-500">Certified:</span>
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Live Chat Demo Widget */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="w-14 h-14 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-full flex items-center justify-center shadow-neon-cyan hover:scale-110 transition-transform duration-300">
          <MessageSquare className="w-6 h-6" />
        </button>
      </div>
    </footer>
  )
}

export default Footer
