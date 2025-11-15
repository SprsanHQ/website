import { motion } from 'framer-motion'
import { ShoppingCart, Hospital, DollarSign, GraduationCap, Building, Plane } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import ParticleBackground from '../components/ParticleBackground'

const Solutions = () => {
  const industries = [
    { name: 'E-Commerce', icon: ShoppingCart, desc: 'Order tracking, product recommendations, returns' },
    { name: 'Healthcare', icon: Hospital, desc: 'Appointment scheduling, patient FAQs, secure data handling' },
    { name: 'Financial Services', icon: DollarSign, desc: 'Account inquiries, fraud detection, compliance' },
    { name: 'Education', icon: GraduationCap, desc: 'Student enrollment, course info, admin support' },
    { name: 'Real Estate', icon: Building, desc: 'Property inquiries, showing scheduling, tenant support' },
    { name: 'Travel & Hospitality', icon: Plane, desc: 'Booking management, itinerary updates, customer service' }
  ]

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/50 to-dark-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Industry <span className="neon-text">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI-powered automation tailored for your industry.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-dark-bg to-dark-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-8">
                <industry.icon className="w-12 h-12 text-neon-cyan mb-4" />
                <h3 className="text-2xl font-bold mb-3">{industry.name}</h3>
                <p className="text-gray-400">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-6 neon-text">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-10">Schedule a demo to see how Sparsan can automate your workflows.</p>
          <a
            href="https://calendly.com/av-sparsan/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg inline-block"
          >
            Book Demo
          </a>
        </div>
      </section>
    </div>
  )
}

export default Solutions
