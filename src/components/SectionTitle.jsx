import { motion } from 'framer-motion'

const SectionTitle = ({ title, subtitle, centered = true, gradient = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${centered ? 'text-center' : ''}`}
    >
      {subtitle && (
        <p className="text-neon-cyan text-sm font-semibold uppercase tracking-wider mb-4">
          {subtitle}
        </p>
      )}
      <h2
        className={`text-4xl md:text-5xl font-display font-bold ${
          gradient ? 'neon-text' : 'text-white'
        }`}
      >
        {title}
      </h2>
    </motion.div>
  )
}

export default SectionTitle
