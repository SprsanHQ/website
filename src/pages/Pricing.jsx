import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, X, ArrowRight } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import ParticleBackground from '../components/ParticleBackground'

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly')
  const [apiCalls, setApiCalls] = useState(100000)
  const [channels, setChannels] = useState(5)

  const tiers = [
    {
      name: 'Developer',
      price: { monthly: 0, annual: 0 },
      description: 'Perfect for testing and personal projects',
      features: [
        '1,000 API calls/month',
        '2 channels',
        'Community support',
        'Basic analytics',
        'Documentation access',
        '1 team member'
      ],
      limitations: [
        'No SLA',
        'No priority support',
        'Limited customization'
      ],
      cta: 'Book Demo',
      ctaLink: 'https://calendly.com/av-sparsan/30min',
      popular: false,
      gradient: 'from-gray-600 to-gray-700'
    },
    {
      name: 'Startup',
      price: { monthly: 199, annual: 159 },
      description: 'For growing companies and products',
      features: [
        '100,000 API calls/month',
        'All channels included',
        'Email support (24h response)',
        'Advanced analytics',
        'Custom workflows',
        '5 team members',
        'Webhook support',
        'A/B testing'
      ],
      limitations: [],
      cta: 'Book Demo',
      ctaLink: 'https://calendly.com/av-sparsan/30min',
      popular: false,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Business',
      price: { monthly: 599, annual: 479 },
      description: 'For established businesses scaling fast',
      features: [
        '1M API calls/month',
        'All channels + priority routing',
        'Priority support (4h response)',
        'Real-time analytics dashboard',
        'Advanced workflow automation',
        '20 team members',
        'Dedicated account manager',
        'Custom integrations',
        '99.9% SLA',
        'SSO (SAML/OIDC)'
      ],
      limitations: [],
      cta: 'Book Demo',
      ctaLink: 'https://calendly.com/av-sparsan/30min',
      popular: true,
      gradient: 'from-neon-cyan to-neon-purple'
    },
    {
      name: 'Enterprise',
      price: { monthly: 'Custom', annual: 'Custom' },
      description: 'For large-scale deployments',
      features: [
        'Unlimited API calls',
        'Dedicated infrastructure',
        '24/7 phone support',
        'Custom analytics & reporting',
        'Multi-agent orchestration',
        'Unlimited team members',
        'Dedicated success team',
        'Custom AI model training',
        '99.99% SLA',
        'On-premise deployment option',
        'Contract negotiation',
        'Volume discounts'
      ],
      limitations: [],
      cta: 'Book Demo',
      ctaLink: 'https://calendly.com/av-sparsan/30min',
      popular: false,
      gradient: 'from-purple-500 to-pink-500'
    }
  ]

  const calculateEstimatedPrice = () => {
    const basePrice = apiCalls / 1000 * 0.01
    const channelMultiplier = channels * 20
    return Math.round(basePrice + channelMultiplier)
  }

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/50 to-dark-bg" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-2 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full text-neon-cyan text-sm font-semibold mb-6">
              Transparent Pricing
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Pricing That <span className="neon-text">Scales With You</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Start free, scale as you grow. No hidden fees, no surprises.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-1">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-gradient-to-r from-neon-cyan to-neon-purple text-white'
                    : 'text-gray-400'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  billingCycle === 'annual'
                    ? 'bg-gradient-to-r from-neon-cyan to-neon-purple text-white'
                    : 'text-gray-400'
                }`}
              >
                Annual
                <span className="ml-2 px-2 py-1 bg-neon-green/20 text-neon-green text-xs rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24 bg-gradient-to-b from-dark-bg to-dark-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative glass-card p-8 ${
                  tier.popular ? 'ring-2 ring-neon-cyan scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-gradient-to-r from-neon-cyan to-neon-purple text-white text-sm font-bold rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tier.gradient} mb-4`} />
                <h3 className="text-2xl font-display font-bold mb-2">{tier.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{tier.description}</p>

                <div className="mb-6">
                  {typeof tier.price[billingCycle] === 'number' ? (
                    <>
                      <span className="text-5xl font-display font-bold neon-text">
                        ${tier.price[billingCycle]}
                      </span>
                      <span className="text-gray-400">/month</span>
                      {billingCycle === 'annual' && tier.price.monthly > 0 && (
                        <div className="text-sm text-gray-500 mt-1">
                          Billed ${tier.price.annual * 12}/year
                        </div>
                      )}
                    </>
                  ) : (
                    <span className="text-4xl font-display font-bold neon-text">
                      {tier.price[billingCycle]}
                    </span>
                  )}
                </div>

                <a
                  href={tier.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full mb-6 block text-center ${tier.popular ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {tier.cta}
                </a>

                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-neon-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                  {tier.limitations.map((limitation, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <X className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-500 line-through">{limitation}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="py-24 bg-dark-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Estimate Your Costs"
            subtitle="Pricing Calculator"
          />

          <div className="glass-card p-8">
            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-sm font-semibold mb-3">
                  API Calls per Month: {apiCalls.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="1000"
                  max="10000000"
                  step="1000"
                  value={apiCalls}
                  onChange={(e) => setApiCalls(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3">
                  Number of Channels: {channels}
                </label>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={channels}
                  onChange={(e) => setChannels(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Estimated Monthly Cost</div>
                  <div className="text-4xl font-display font-bold neon-text">
                    ${calculateEstimatedPrice()}
                  </div>
                </div>
                <a
                  href="https://calendly.com/av-sparsan/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  Get Custom Quote
                  <ArrowRight className="inline ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <ParticleBackground />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-6 neon-text">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Start with our free tier. Upgrade anytime as you scale.
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
        </div>
      </section>
    </div>
  )
}

export default Pricing
