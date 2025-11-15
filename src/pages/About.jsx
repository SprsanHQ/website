import { motion } from 'framer-motion'
import { Target, Users, Lightbulb, Award, TrendingUp, Heart, Globe2, Rocket } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import ParticleBackground from '../components/ParticleBackground'

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI technology.'
    },
    {
      icon: Users,
      title: 'Developer-Centric',
      description: 'Built by developers, for developers. DX is our top priority.'
    },
    {
      icon: Award,
      title: 'Enterprise-Grade Quality',
      description: 'No compromises on security, reliability, or performance.'
    },
    {
      icon: Heart,
      title: 'Customer Success',
      description: 'Your success is our success. We\'re here for the long term.'
    }
  ]

  const milestones = [
    { year: '2022', event: 'Company founded in San Francisco', metric: 'Day 1' },
    { year: '2022', event: 'First customer deployment', metric: '100 users' },
    { year: '2023', event: 'Series A funding ($15M)', metric: '$15M raised' },
    { year: '2023', event: 'Launched multi-channel platform', metric: '1,000+ customers' },
    { year: '2024', event: 'Reached 10M API calls/day', metric: '10M calls/day' },
    { year: '2024', event: 'Expanded to EMEA region', metric: 'Global presence' }
  ]

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former VP of Engineering at OpenAI. 15+ years in AI/ML.',
      image: '👩‍💼'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Google Brain. PhD in Computer Science from Stanford.',
      image: '👨‍💻'
    },
    {
      name: 'Emily Watson',
      role: 'VP of Product',
      bio: 'Previously led product at Twilio. Expert in developer tools.',
      image: '👩‍🔬'
    },
    {
      name: 'David Kim',
      role: 'VP of Engineering',
      bio: 'Former Tech Lead at Meta. Built systems for billions of users.',
      image: '👨‍🚀'
    }
  ]

  const stats = [
    { value: '10,000+', label: 'Enterprise Customers' },
    { value: '50M+', label: 'Daily AI Interactions' },
    { value: '99.99%', label: 'Platform Uptime' },
    { value: '150+', label: 'Team Members' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/50 to-dark-bg" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-2 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full text-neon-cyan text-sm font-semibold mb-6">
              About Sparsan
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Building the Future of <span className="neon-text">Agentic AI</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We're on a mission to democratize AI by making it easy for any enterprise to deploy
              intelligent agents across any channel in minutes, not months.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-display font-bold neon-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-b from-dark-bg to-dark-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <Target className="w-12 h-12 text-neon-cyan mb-4" />
              <h2 className="text-3xl font-display font-bold mb-4">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To empower every enterprise with intelligent AI agents that can understand their unique
                business context, automate complex workflows, and deliver exceptional customer experiences
                across every channel.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <Rocket className="w-12 h-12 text-neon-purple mb-4" />
              <h2 className="text-3xl font-display font-bold mb-4">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                A world where AI agents are as easy to deploy as websites. Where enterprises of all sizes
                can harness the power of AI without massive engineering teams or months of development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-dark-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Our Values"
            title="What Drives Us"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <value.icon className="w-12 h-12 text-neon-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-to-b from-dark-navy to-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Our Journey"
            title="Key Milestones"
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-neon-cyan to-neon-purple" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="glass-card p-6">
                      <div className="text-neon-cyan font-bold mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold mb-1">{milestone.event}</h3>
                      <div className="text-gray-400">{milestone.metric}</div>
                    </div>
                  </div>
                  <div className="hidden md:block w-4 h-4 rounded-full bg-neon-cyan shadow-neon-cyan" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-dark-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Leadership Team"
            title="Meet the People Behind Sparsan"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <div className="text-neon-cyan text-sm mb-3">{member.role}</div>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
            <p className="text-gray-400 mb-6">
              We're always looking for talented individuals passionate about AI and developer tools.
            </p>
            <button className="btn-primary">View Open Positions</button>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <ParticleBackground />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-6 neon-text">
            Want to Learn More?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Get in touch with our team or start building with our platform today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://calendly.com/av-sparsan/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg inline-block"
            >
              Book Demo
            </a>
            <a
              href="/contact"
              className="btn-secondary text-lg inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
