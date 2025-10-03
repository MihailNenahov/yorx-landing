'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<'mobile' | 'web'>('mobile')
  const [userInteracted, setUserInteracted] = useState(false)

  // Auto-switch tabs every 5 seconds if user hasn't interacted
  useEffect(() => {
    if (userInteracted) return

    const interval = setInterval(() => {
      setActiveTab(prev => prev === 'mobile' ? 'web' : 'mobile')
    }, 5000)

    return () => clearInterval(interval)
  }, [userInteracted])

  const handleTabClick = (tab: 'mobile' | 'web') => {
    setActiveTab(tab)
    setUserInteracted(true)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-yorx-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yorx-secondary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="gradient-text">Personalized WOD Scaling</span>
              <br />
              <span className="text-gray-900">for Your Crossfit Classes</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Keep members longer by giving them steady progress.
              <br />
              Minimal coach effort. More wins for your box.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="btn-primary group flex items-center justify-center gap-3">
                <span>Schedule Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <a href="#benefits" className="btn-secondary">
                Learn more
              </a>
            </motion.div>
          </motion.div>

          {/* Right content - Tabbed Product Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Tab Headers */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex gap-4 mb-8 justify-center"
              >
                <button
                  onClick={() => handleTabClick('mobile')}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === 'mobile'
                      ? 'bg-gradient-yorx text-white shadow-lg'
                      : 'bg-white/80 text-gray-700 hover:bg-white shadow-md'
                  }`}
                >
                  Mobile app for trainers
                </button>
                <button
                  onClick={() => handleTabClick('web')}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === 'web'
                      ? 'bg-gradient-yorx text-white shadow-lg'
                      : 'bg-white/80 text-gray-700 hover:bg-white shadow-md'
                  }`}
                >
                  Web app for admins
                </button>
              </motion.div>

              {/* Tab Content */}
              <div className="relative min-h-[600px] flex items-center justify-center">
                {/* Mobile App Tab */}
                {activeTab === 'mobile' && (
                  <motion.div
                    key="mobile"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.6 }}
                    className="flex gap-6 justify-center"
                  >
                    <div className="relative glass-effect rounded-2xl p-4 shadow-lg">
                      <Image
                        src="/images/yorx-user-profile.PNG"
                        alt="YORX User Profile - Mobile App"
                        width={250}
                        height={400}
                        className="w-full h-auto rounded-xl object-cover"
                      />
                    </div>
                    <div className="relative glass-effect rounded-2xl p-4 shadow-lg">
                      <Image
                        src="/images/yorx-workout-help.PNG"
                        alt="YORX Workout Help - Mobile App"
                        width={250}
                        height={400}
                        className="w-full h-auto rounded-xl object-cover"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Web App Tab */}
                {activeTab === 'web' && (
                  <motion.div
                    key="web"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center"
                  >
                    <div className="relative glass-effect rounded-2xl p-4 shadow-lg max-w-4xl">
                      <Image
                        src="/images/yorx-admin-class.png"
                        alt="YORX Admin Dashboard - Web App"
                        width={800}
                        height={500}
                        className="w-full h-auto rounded-xl object-cover"
                      />
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
