'use client'

import { motion } from 'framer-motion'
import { Users, TrendingUp, Target } from 'lucide-react'

const benefits = [
  {
    icon: Users,
    title: "Beginners and Scale athletes",
    description: "Faster progress → fewer dropouts in first year.",
    color: "from-yorx-primary to-purple-600"
  },
  {
    icon: TrendingUp,
    title: "Rx athletes",
    description: "Structured way to improve → they don't leave for 1:1 coaching apps.",
    color: "from-yorx-secondary to-blue-600"
  },
  {
    icon: Target,
    title: "CrossFit Box",
    description: "Better retention by delivering results your trainees can see and feel.",
    color: "from-yorx-accent to-orange-600"
  }
]

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Benefits of using YORX</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 card-hover">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-yorx-primary/5 to-yorx-secondary/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >

        </motion.div>
      </div>
    </section>
  )
}
