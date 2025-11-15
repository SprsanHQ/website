import { motion } from 'framer-motion'
import { TrendingUp, Target, Award, Users } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import ParticleBackground from '../components/ParticleBackground'

const Investors = () => {
  const metrics = [
    { value: '$32B', label: 'Market Size by 2030' },
    { value: '300%', label: 'YoY Growth' },
    { value: '10,000+', label: 'Enterprise Customers' },
    { value: '$15M', label: 'Series A Raised' }
  ]

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/50 to-dark-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="neon-text">Powering</span> the Future of Enterprise AI
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building the infrastructure for the next generation of AI-powered enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-dark-bg to-dark-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {metrics.map((metric, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-6 text-center">
                <div className="text-4xl font-display font-bold neon-text mb-2">{metric.value}</div>
                <div className="text-gray-400">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-6 neon-text">Interested in Learning More?</h2>
          <p className="text-xl text-gray-300 mb-10">Contact our investor relations team.</p>
          <a
            href="https://calendly.com/av-sparsan/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg inline-block"
          >
            Book Meeting
          </a>
        </div>
      </section>
    </div>
  )
}

export default Investors
