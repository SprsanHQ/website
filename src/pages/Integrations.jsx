import { motion } from 'framer-motion'
import { MessageSquare, Phone, Mail, Code } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import ParticleBackground from '../components/ParticleBackground'

const Integrations = () => {
  const channels = [
    { name: 'Web Chat', icon: MessageSquare, desc: 'Embed on any website', color: 'text-blue-400' },
    { name: 'WhatsApp', icon: MessageSquare, desc: 'WhatsApp Business API', color: 'text-green-400' },
    { name: 'Phone/IVR', icon: Phone, desc: 'Voice interactions', color: 'text-purple-400' },
    { name: 'SMS', icon: Mail, desc: 'Text messaging', color: 'text-pink-400' },
    { name: 'Slack', icon: Code, desc: 'Team collaboration', color: 'text-yellow-400' },
    { name: 'Teams', icon: Code, desc: 'Microsoft Teams', color: 'text-cyan-400' }
  ]

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/50 to-dark-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="neon-text">Omnichannel</span> Integrations
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deploy once, reach your customers everywhere.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-dark-bg to-dark-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {channels.map((channel, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="glass-card p-8 hover:scale-105 transition-transform">
                <channel.icon className={`w-16 h-16 mx-auto mb-4 ${channel.color}`} />
                <h3 className="text-2xl font-bold mb-2 text-center">{channel.name}</h3>
                <p className="text-gray-400 text-center">{channel.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Integrations
