import { motion } from 'framer-motion'
import { ArrowRight, Zap, Brain, Globe, Shield, Code, MessageSquare, Workflow, BarChart } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ParticleBackground from '../components/ParticleBackground'
import SectionTitle from '../components/SectionTitle'

const Home = () => {
  const codeExample = `// Deploy an AI agent in 15 minutes
import { Sparsan } from '@sparsan/sdk'

const agent = new Sparsan({
  apiKey: process.env.SPARSAN_API_KEY
})

// Ingest your documentation
await agent.ingest({
  type: 'api-docs',
  source: './openapi.yaml'
})

// Deploy across all channels
await agent.deploy({
  channels: ['web', 'whatsapp', 'voice', 'sms']
})

console.log('Agent deployed! 🚀')`

  const stats = [
    { value: '10,000+', label: 'Enterprises' },
    { value: '50M+', label: 'AI Interactions' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '15min', label: 'Time to Deploy' },
  ]

  const features = [
    {
      icon: Brain,
      title: 'Intelligent Learning',
      description: 'Automatically ingests and understands your docs, APIs, GraphQL schemas, and workflows.',
      gradient: 'from-neon-cyan to-blue-500',
    },
    {
      icon: Globe,
      title: 'Omnichannel Deployment',
      description: 'One codebase deploys to web, mobile, WhatsApp, phone IVR, SMS, and more.',
      gradient: 'from-neon-purple to-pink-500',
    },
    {
      icon: Zap,
      title: '15-Minute Integration',
      description: 'From zero to deployed AI agent with our simple SDK and intuitive APIs.',
      gradient: 'from-neon-green to-emerald-500',
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Build complex multi-agent workflows with our visual orchestration engine.',
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Compliance-ready architecture with end-to-end encryption and secure data handling.',
      gradient: 'from-red-400 to-pink-500',
    },
    {
      icon: Code,
      title: 'Developer-First SDK',
      description: 'Multi-language SDKs, comprehensive docs, and GraphQL/REST APIs.',
      gradient: 'from-indigo-400 to-purple-500',
    },
  ]

  const deploymentFlow = [
    {
      step: 1,
      title: 'Upload Resources',
      description: 'Drop your docs, API specs, schemas',
      icon: '📄',
    },
    {
      step: 2,
      title: 'Configure Workflows',
      description: 'Define agent behavior & logic',
      icon: '⚙️',
    },
    {
      step: 3,
      title: 'Train Your Agent',
      description: 'AI learns your domain instantly',
      icon: '🧠',
    },
    {
      step: 4,
      title: 'Deploy Everywhere',
      description: 'Launch across all channels',
      icon: '🚀',
    },
  ]

  const channels = [
    { name: 'Web Chat', icon: MessageSquare, color: 'text-blue-400' },
    { name: 'Mobile Apps', icon: Globe, color: 'text-green-400' },
    { name: 'WhatsApp', icon: MessageSquare, color: 'text-emerald-400' },
    { name: 'Phone IVR', icon: '☎️', color: 'text-purple-400' },
    { name: 'SMS', icon: '💬', color: 'text-pink-400' },
    { name: 'Slack', icon: '💼', color: 'text-yellow-400' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <ParticleBackground />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/50 to-dark-bg pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-6"
              >
                <span className="px-4 py-2 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full text-neon-cyan text-sm font-semibold">
                  ✨ Agentic AI Infrastructure Platform
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight"
              >
                Deploy{' '}
                <span className="neon-text text-shadow-glow">
                  Intelligent AI Agents
                </span>{' '}
                Across Any Channel
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 mb-8 leading-relaxed"
              >
                Transform your enterprise with AI agents that understand your docs, APIs, and workflows.
                Deploy to web, mobile, WhatsApp, phone, and SMS in just 15 minutes.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 mb-12"
              >
                <a
                  href="https://calendly.com/av-sparsan/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-lg group"
                >
                  Book Demo
                  <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/documentation"
                  className="btn-outline text-lg"
                >
                  View Documentation
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center md:text-left">
                    <div className="text-3xl font-display font-bold neon-text mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Code Example */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="glass-card p-6 floating">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-gray-400 font-mono">agent.js</span>
                </div>
                <SyntaxHighlighter
                  language="javascript"
                  style={vscDarkPlus}
                  customStyle={{
                    background: 'transparent',
                    padding: 0,
                    margin: 0,
                    fontSize: '0.875rem',
                  }}
                  wrapLongLines
                >
                  {codeExample}
                </SyntaxHighlighter>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-neon-green to-emerald-500 px-6 py-3 rounded-full shadow-neon-green"
              >
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span className="font-semibold">15 minutes to deploy</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-neon-cyan/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-neon-cyan rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gradient-to-b from-dark-bg to-dark-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Platform Capabilities"
            title="Everything You Need to Build Intelligent Agents"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 group cursor-pointer hover:scale-105 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-3 mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-dark-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ParticleBackground />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Simple Process"
            title="From Zero to Deployed in 15 Minutes"
          />

          <div className="grid md:grid-cols-4 gap-8">
            {deploymentFlow.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {/* Connection line */}
                {index < deploymentFlow.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-neon-cyan/50 to-transparent" />
                )}

                <div className="glass-card p-6 text-center relative z-10">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <div className="text-sm text-neon-cyan font-semibold mb-2">
                    STEP {item.step}
                  </div>
                  <h4 className="font-display font-bold text-lg mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Channel Showcase */}
      <section className="py-24 bg-gradient-to-b from-dark-navy to-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Omnichannel"
            title="One Platform. Every Channel."
          />

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {channels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center hover:scale-110 transition-transform duration-300"
              >
                {typeof channel.icon === 'string' ? (
                  <div className="text-4xl mb-3">{channel.icon}</div>
                ) : (
                  <channel.icon className={`w-12 h-12 mx-auto mb-3 ${channel.color}`} />
                )}
                <div className="text-sm font-semibold">{channel.name}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-gray-300 text-lg mb-6">
              Write once, deploy everywhere. Single SDK, unified analytics, consistent experience.
            </p>
            <button className="btn-primary text-lg">
              Explore All Integrations
              <ArrowRight className="inline ml-2 w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 neon-text">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join 10,000+ companies using Sparsan to power their AI agents.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://calendly.com/av-sparsan/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg"
              >
                Book Demo
              </a>
              <a
                href="/contact"
                className="btn-secondary text-lg"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
