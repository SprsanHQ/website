import { motion } from 'framer-motion'
import { Headphones, ShoppingBag, Users, FileText } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import ParticleBackground from '../components/ParticleBackground'

const UseCases = () => {
  const useCases = [
    { 
      title: 'Customer Support Automation',
      icon: Headphones,
      desc: '24/7 support coverage with AI agents that escalate to humans when needed',
      metrics: ['73% ticket deflection', '24/7 availability', '<2min response time']
    },
    {
      title: 'E-Commerce Assistant',
      icon: ShoppingBag,
      desc: 'Product recommendations, order tracking, and returns processing',
      metrics: ['25% increase in sales', '40% fewer support calls', '90% customer satisfaction']
    },
    {
      title: 'Lead Qualification',
      icon: Users,
      desc: 'Automate lead capture and qualification on your website',
      metrics: ['3x more qualified leads', '50% faster response', '80% cost reduction']
    },
    {
      title: 'Internal Knowledge Base',
      icon: FileText,
      desc: 'Help employees find information instantly',
      metrics: ['5hrs saved per employee/week', '95% accuracy', '10min setup']
    }
  ]

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/50 to-dark-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Real-World <span className="neon-text">Use Cases</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how companies are using Sparsan to automate and scale.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-dark-bg to-dark-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {useCases.map((useCase, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-8">
                <useCase.icon className="w-12 h-12 text-neon-cyan mb-4" />
                <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-gray-400 mb-6">{useCase.desc}</p>
                <div className="space-y-2">
                  {useCase.metrics.map((metric, j) => (
                    <div key={j} className="text-sm text-neon-green">✓ {metric}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default UseCases
