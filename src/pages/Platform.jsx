import { motion } from 'framer-motion'
import { Cpu, Server, Database, Shield, Zap, Globe } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import ParticleBackground from '../components/ParticleBackground'

const Platform = () => {
  const architecture = [
    { name: 'Ingestion Layer', icon: Database, desc: 'Process docs, APIs, schemas' },
    { name: 'AI Engine', icon: Cpu, desc: 'NLP, training, inference' },
    { name: 'Orchestration', icon: Server, desc: 'Workflows, routing, state' },
    { name: 'Delivery Layer', icon: Globe, desc: 'Multi-channel deployment' }
  ]

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/50 to-dark-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Platform <span className="neon-text">Architecture</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade infrastructure built for scale, security, and performance.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-dark-bg to-dark-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {architecture.map((layer, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-8 text-center">
                <layer.icon className="w-16 h-16 text-neon-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{layer.name}</h3>
                <p className="text-gray-400">{layer.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Technical Specifications" />
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="glass-card p-8">
              <Zap className="w-12 h-12 text-neon-cyan mb-4" />
              <h3 className="text-2xl font-bold mb-4">Performance</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Response time: &lt;200ms p95</li>
                <li>• Throughput: 1M+ req/sec</li>
                <li>• 99.99% uptime SLA</li>
              </ul>
            </div>
            <div className="glass-card p-8">
              <Shield className="w-12 h-12 text-neon-purple mb-4" />
              <h3 className="text-2xl font-bold mb-4">Security</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Enterprise-grade encryption</li>
                <li>• Secure data handling</li>
                <li>• Compliance-ready architecture</li>
              </ul>
            </div>
            <div className="glass-card p-8">
              <Server className="w-12 h-12 text-neon-green mb-4" />
              <h3 className="text-2xl font-bold mb-4">Infrastructure</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Multi-cloud (AWS, Azure, GCP)</li>
                <li>• Auto-scaling</li>
                <li>• Global CDN</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Platform
