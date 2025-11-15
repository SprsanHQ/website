import { motion } from 'framer-motion'
import { Code2, Terminal, Book, Zap, Copy } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import SectionTitle from '../components/SectionTitle'
import ParticleBackground from '../components/ParticleBackground'

const Developers = () => {
  const installCode = `# Install via npm
npm install @sparsan/sdk

# Or via pip
pip install sparsan-sdk

# Or via yarn
yarn add @sparsan/sdk`

  const quickStartJS = `import { Sparsan } from '@sparsan/sdk'

// Initialize client
const sparsan = new Sparsan({
  apiKey: process.env.SPARSAN_API_KEY
})

// Ingest documentation
await sparsan.ingest({
  type: 'api-docs',
  source: './openapi.yaml'
})

// Deploy agent
const agent = await sparsan.deploy({
  name: 'customer-support',
  channels: ['web', 'whatsapp', 'sms'],
  workflows: ['support-ticket', 'faq']
})

console.log('Agent deployed:', agent.id)`

  const quickStartPython = `from sparsan import Sparsan

# Initialize client
client = Sparsan(api_key=os.getenv('SPARSAN_API_KEY'))

# Ingest documentation
client.ingest(
    type='graphql-schema',
    source='./schema.graphql'
)

# Deploy agent
agent = client.deploy(
    name='sales-assistant',
    channels=['web', 'phone', 'slack'],
    workflows=['lead-qualification']
)

print(f'Agent deployed: {agent.id}')`

  const sdks = [
    { lang: 'JavaScript/TypeScript', pkg: '@sparsan/sdk', version: '2.1.0' },
    { lang: 'Python', pkg: 'sparsan-sdk', version: '2.1.0' },
    { lang: 'Go', pkg: 'github.com/sparsan/go-sdk', version: 'v2.1.0' },
    { lang: 'Java', pkg: 'com.sparsan:sparsan-sdk', version: '2.1.0' },
    { lang: 'Ruby', pkg: 'sparsan', version: '2.1.0' },
    { lang: '.NET', pkg: 'Sparsan.SDK', version: '2.1.0' }
  ]

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/50 to-dark-bg" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-2 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full text-neon-cyan text-sm font-semibold mb-6">
              Developer Documentation
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Build With <span className="neon-text">Sparsan SDK</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive APIs, SDKs, and tools to integrate AI agents into your application.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-dark-bg to-dark-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Get Started" title="Quick Start Guide" />
          
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-bold mb-4">Installation</h3>
              <div className="glass-card p-6">
                <SyntaxHighlighter language="bash" style={vscDarkPlus} customStyle={{ background: 'transparent', padding: 0 }}>
                  {installCode}
                </SyntaxHighlighter>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-bold mb-4">JavaScript Example</h3>
              <div className="glass-card p-6">
                <SyntaxHighlighter language="javascript" style={vscDarkPlus} customStyle={{ background: 'transparent', padding: 0, fontSize: '0.75rem' }}>
                  {quickStartJS}
                </SyntaxHighlighter>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8">
            <h3 className="text-2xl font-bold mb-4">Python Example</h3>
            <div className="glass-card p-6">
              <SyntaxHighlighter language="python" style={vscDarkPlus} customStyle={{ background: 'transparent', padding: 0, fontSize: '0.85rem' }}>
                {quickStartPython}
              </SyntaxHighlighter>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-dark-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Official SDKs" title="Multi-Language Support" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdks.map((sdk, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="glass-card p-6">
                <Code2 className="w-10 h-10 text-neon-cyan mb-4" />
                <h3 className="text-xl font-bold mb-2">{sdk.lang}</h3>
                <p className="text-gray-400 text-sm mb-3">{sdk.pkg}</p>
                <div className="flex items-center justify-between">
                  <span className="text-neon-green text-sm">v{sdk.version}</span>
                  <button className="btn-outline text-sm py-1 px-3">Install</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-dark-navy to-dark-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-6 neon-text">Ready to Start Building?</h2>
          <p className="text-xl text-gray-300 mb-10">Explore our full documentation and API reference.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/documentation" className="btn-primary text-lg inline-block">View Full Docs</a>
            <a href="/documentation" className="btn-secondary text-lg inline-block">API Reference</a>
            <a
              href="https://calendly.com/av-sparsan/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-lg inline-block"
            >
              Book Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Developers
