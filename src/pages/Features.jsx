import { motion } from 'framer-motion'
import {
  FileText,
  Brain,
  Globe,
  Mic,
  Code2,
  Workflow,
  Shield,
  BarChart3,
  Zap,
  Database,
  GitBranch,
  Lock,
  Eye,
  Users,
  Clock,
  CheckCircle2
} from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import ParticleBackground from '../components/ParticleBackground'

const Features = () => {
  const mainFeatures = [
    {
      icon: FileText,
      title: 'Intelligent Document Ingestion',
      description: 'Automatically parse and understand any format',
      gradient: 'from-blue-500 to-cyan-500',
      features: [
        'PDF, Markdown, HTML, DOCX support',
        'API documentation (OpenAPI, Swagger, GraphQL schemas)',
        'Version control integration (GitHub, GitLab, Bitbucket)',
        'Auto-parsing with semantic understanding',
        'Real-time sync and updates',
        'Custom format support'
      ],
      stats: { value: '50+', label: 'File Formats' }
    },
    {
      icon: Brain,
      title: 'Advanced Learning Engine',
      description: 'NLP-powered domain understanding',
      gradient: 'from-purple-500 to-pink-500',
      features: [
        'Continuous learning from interactions',
        'Domain-specific training',
        'Context-aware responses',
        'Multi-language support (40+ languages)',
        'Sentiment analysis',
        'Intent recognition with 95%+ accuracy'
      ],
      stats: { value: '95%', label: 'Accuracy' }
    },
    {
      icon: Globe,
      title: 'Omnichannel Deployment',
      description: 'One codebase, every platform',
      gradient: 'from-green-500 to-emerald-500',
      features: [
        'Web SDK (React, Vue, Angular, vanilla JS)',
        'Mobile (iOS, Android, React Native, Flutter)',
        'WhatsApp Business API',
        'Phone IVR with voice synthesis',
        'SMS/MMS messaging',
        'Slack, Teams, Discord integrations'
      ],
      stats: { value: '10+', label: 'Channels' }
    },
    {
      icon: Mic,
      title: 'Voice & Conversational AI',
      description: 'Natural human-like interactions',
      gradient: 'from-orange-500 to-red-500',
      features: [
        'Speech-to-text with 98% accuracy',
        'Text-to-speech in 40+ languages',
        'Custom voice models',
        'Real-time conversation handling',
        'Emotion detection',
        'Background noise cancellation'
      ],
      stats: { value: '40+', label: 'Languages' }
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Visual orchestration for complex tasks',
      gradient: 'from-yellow-500 to-orange-500',
      features: [
        'Drag-and-drop workflow builder',
        'Multi-agent orchestration',
        'Event-driven triggers',
        'Conditional logic and branching',
        'Integration with business tools',
        'Pre-built templates'
      ],
      stats: { value: '100+', label: 'Templates' }
    },
    {
      icon: Code2,
      title: 'Developer-First SDK',
      description: 'Comprehensive APIs and tools',
      gradient: 'from-indigo-500 to-purple-500',
      features: [
        'RESTful & GraphQL APIs',
        'WebSocket for real-time',
        'Multi-language SDKs (Python, Node.js, Go, Java)',
        'Comprehensive documentation',
        'Playground environment',
        'Webhook support'
      ],
      stats: { value: '6', label: 'SDK Languages' }
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security and compliance',
      gradient: 'from-red-500 to-pink-500',
      features: [
        'Enterprise-grade encryption',
        'Compliance-ready architecture',
        'End-to-end data protection',
        'Role-based access control (RBAC)',
        'Audit logs and security reports',
        'Data residency options'
      ],
      stats: { value: '100%', label: 'Secure' }
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Real-time performance metrics',
      gradient: 'from-cyan-500 to-blue-500',
      features: [
        'Conversation analytics dashboard',
        'User behavior tracking',
        'A/B testing framework',
        'Custom KPI tracking',
        'Exportable reports',
        'AI-powered recommendations'
      ],
      stats: { value: '50+', label: 'Metrics' }
    }
  ]

  const technicalCapabilities = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Response time <200ms average',
      metric: '<200ms'
    },
    {
      icon: Database,
      title: 'Scalable',
      description: 'Handle 1M+ requests per second',
      metric: '1M+/sec'
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      description: 'Agent versioning and rollback',
      metric: 'Git-like'
    },
    {
      icon: Lock,
      title: 'Secure',
      description: 'Enterprise-grade encryption everywhere',
      metric: 'Encrypted'
    },
    {
      icon: Eye,
      title: 'Observable',
      description: 'Full observability stack included',
      metric: 'Real-time'
    },
    {
      icon: Users,
      title: 'Multi-tenant',
      description: 'Isolated environments per client',
      metric: 'Isolated'
    }
  ]

  const integrations = [
    { name: 'Salesforce', category: 'CRM' },
    { name: 'HubSpot', category: 'CRM' },
    { name: 'Zendesk', category: 'Support' },
    { name: 'Intercom', category: 'Support' },
    { name: 'Shopify', category: 'E-commerce' },
    { name: 'Stripe', category: 'Payments' },
    { name: 'Twilio', category: 'Communications' },
    { name: 'SendGrid', category: 'Email' },
    { name: 'Slack', category: 'Collaboration' },
    { name: 'Teams', category: 'Collaboration' },
    { name: 'Jira', category: 'Project Management' },
    { name: 'GitHub', category: 'Development' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/50 to-dark-bg" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full text-neon-cyan text-sm font-semibold mb-6">
              Platform Capabilities
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Enterprise-Grade{' '}
              <span className="neon-text">AI Infrastructure</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Everything you need to build, deploy, and scale intelligent AI agents across any channel.
              No compromises on security, performance, or developer experience.
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-24 bg-gradient-to-b from-dark-bg to-dark-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 hover:scale-[1.02] transition-all duration-300"
              >
                {/* Feature Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} p-4`}>
                      <feature.icon className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-display font-bold neon-text">
                      {feature.stats.value}
                    </div>
                    <div className="text-sm text-gray-500">{feature.stats.label}</div>
                  </div>
                </div>

                {/* Feature List */}
                <ul className="space-y-3">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-neon-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-24 bg-dark-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ParticleBackground />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Technical Excellence"
            title="Built for Scale and Performance"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <capability.icon className="w-12 h-12 mx-auto mb-4 text-neon-cyan" />
                <div className="text-3xl font-display font-bold neon-text mb-2">
                  {capability.metric}
                </div>
                <h4 className="text-lg font-semibold mb-2">{capability.title}</h4>
                <p className="text-gray-400 text-sm">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 bg-gradient-to-b from-dark-navy to-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Integrations"
            title="Connect With Your Favorite Tools"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card p-6 text-center hover:scale-105 transition-transform"
              >
                <div className="text-lg font-semibold mb-1">{integration.name}</div>
                <div className="text-sm text-gray-500">{integration.category}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-4">
              + 100s more integrations via our REST API and webhooks
            </p>
            <button className="btn-secondary">
              View All Integrations
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Deploy your first AI agent in under 15 minutes. No credit card required.
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
                href="/documentation"
                className="btn-outline text-lg"
              >
                View Documentation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Features
