import { motion } from 'framer-motion'
import { Book, Code, Lightbulb, Terminal, FileText, Video } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import ParticleBackground from '../components/ParticleBackground'

const Documentation = () => {
  const sections = [
    { title: 'Getting Started', icon: Lightbulb, items: ['Quick Start Guide', 'Installation', 'Your First Agent', 'Concepts'] },
    { title: 'API Reference', icon: Code, items: ['REST API', 'GraphQL API', 'WebSocket API', 'Authentication'] },
    { title: 'SDK Guides', icon: Terminal, items: ['JavaScript/TypeScript', 'Python', 'Go', 'Java'] },
    { title: 'Tutorials', icon: Video, items: ['Building a Chatbot', 'Multi-Channel Deploy', 'Voice Integration', 'Workflows'] }
  ]

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/50 to-dark-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="neon-text">Documentation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to build with Sparsan.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-dark-bg to-dark-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-8">
                <section.icon className="w-12 h-12 text-neon-cyan mb-4" />
                <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="text-gray-400 hover:text-neon-cyan cursor-pointer transition-colors">→ {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Documentation
