'use client'

import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import Image from 'next/image'

const integrations = [
  {
    name: "eFitness",
    logo: "/images/eFitness-logo.png",
    delay: 0.2
  },
  {
    name: "SugarWOD", 
    logo: "/images/sugarwod-logo.jpg",
    delay: 0.4
  },
  {
    name: "More coming soon",
    logo: null,
    delay: 0.6
  }
]

export default function IntegrationsSection() {
  return (
    <section id="integrations" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Integrated with:</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: integration.delay }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-xl border border-gray-100 mb-4 p-3">
                {integration.logo ? (
                  <Image
                    src={integration.logo}
                    alt={`${integration.name} logo`}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <Plus className="w-10 h-10 text-gray-400" />
                )}
              </div>
              <span className={`text-lg font-medium ${
                integration.logo ? 'text-gray-900' : 'text-gray-600'
              }`}>
                {integration.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            YORX seamlessly integrates with your existing workflow and popular CrossFit management platforms. 
            Start scaling workouts intelligently without changing how you run your box.
          </p>
        </motion.div>

        {/* Integration benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-yorx-primary/5 to-transparent border border-yorx-primary/10">
            <div className="w-12 h-12 bg-yorx-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-yorx-primary font-bold">1</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Easy Setup</h3>
            <p className="text-gray-600 text-sm">Connect your existing tools in minutes</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-yorx-secondary/5 to-transparent border border-yorx-secondary/10">
            <div className="w-12 h-12 bg-yorx-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-yorx-secondary font-bold">2</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Sync Data</h3>
            <p className="text-gray-600 text-sm">Automatic workout and athlete synchronization</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-yorx-accent/5 to-transparent border border-yorx-accent/10">
            <div className="w-12 h-12 bg-yorx-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-yorx-accent font-bold">3</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Scale Smart</h3>
            <p className="text-gray-600 text-sm">Intelligent scaling delivered back to your platform</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
