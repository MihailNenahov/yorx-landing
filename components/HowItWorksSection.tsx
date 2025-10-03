'use client'

import { motion } from 'framer-motion'
import { Calendar, Users, BarChart3, Trophy, CheckCircle, Smile } from 'lucide-react'
import Image from 'next/image'

const steps = [
  {
    icon: Calendar,
    title: "Provide to YORX your workouts for a week",
    description: "Upload your weekly WODs and let YORX analyze the movements and intensity.",
    image: "/images/trainer-making-input.png",
    delay: 0
  },
  {
    icon: Users,
    title: "Train clients as you always did",
    description: "Continue your normal coaching routine while YORX works in the background.",
    image: "/images/crossfit-training.png",
    delay: 0.2
  },
  {
    icon: BarChart3,
    title: "Before workout, spend 5 minutes briefing clients on their YORX targets",
    description: "Quick pre-workout briefing ensures everyone knows their personalized targets.",
    image: "/images/trainer-explaining-training.png",
    delay: 0.4
  },
  {
    icon: Trophy,
    title: "After workout, log results in YORX to improve accuracy",
    description: "Input performance data to continuously improve scaling accuracy.",
    image: "/images/trainer-collection-feedback.png",
    delay: 0.6
  },
  {
    icon: Smile,
    title: "No more guess scaling. Results for athletes, retention for box",
    description: "Athletes get better results and see progress without extra work, box owners get better retention.",
    image: "/images/trainer-with-tablet-logo-no-sign.png",
    delay: 0.8
  }
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-900">How it </span>
            <span className="gradient-text">works:</span>
          </h2>
        </motion.div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: step.delay }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12`}
            >
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  <div className="w-12 h-12 bg-gradient-yorx rounded-xl flex items-center justify-center mr-4">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-yorx-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-yorx-primary font-bold">{index + 1}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {step.description}
                </p>
              </div>

              {/* Real Image */}
              <div className="flex-1 relative">
                <div className="relative glass-effect rounded-3xl p-6 shadow-xl">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={600}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Floating success indicator */}
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-3 -right-3 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <CheckCircle className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-8">
            YORX will update your clients athlete profile based on training results for next training new load for every athlete.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Ready to bring your training to new level?
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
