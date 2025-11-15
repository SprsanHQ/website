import { motion } from 'framer-motion'
import { FileText, Video, BookOpen, Award } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import ParticleBackground from '../components/ParticleBackground'

const Resources = () => {
  const posts = [
    { title: 'Building Enterprise AI Agents in 2024', category: 'Guide', date: 'Nov 15, 2024' },
    { title: 'How RetailCo Reduced Support Costs by 73%', category: 'Case Study', date: 'Nov 10, 2024' },
    { title: 'Multi-Channel AI Deployment Best Practices', category: 'Tutorial', date: 'Nov 5, 2024' },
    { title: 'Agentic AI vs Traditional Chatbots', category: 'Blog', date: 'Nov 1, 2024' }
  ]

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/50 to-dark-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Resources & <span className="neon-text">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn from our blog, guides, case studies, and webinars.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-dark-bg to-dark-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-8 hover:scale-105 transition-transform cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-neon-cyan/20 text-neon-cyan text-xs rounded-full">{post.category}</span>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-400">Read more →</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resources
