'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Heart } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Final CTA Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">Built by </span>
              <span className="gradient-text">athletes, for boxes.</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Founder trained in CrossFit for 7 years and saw the Scale - Rx gap firsthand.
            </p>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              YORX bridges it to make athletes progress, and your box retains.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 max-w-2xl mx-auto border border-white/20">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Keep more members. Run smoother classes.
              </h3>
              <p className="text-lg text-gray-300 mb-8">
                Ready to bring your training to new level?
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-yorx text-white px-12 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-yorx-primary/25 transition-all duration-300 group"
              >
                  Schedule Demo
                <ArrowRight className="ml-3 w-6 h-6 inline group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
              
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Logo and branding */}
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image
                src="/images/logo-square-no-sign.png"
                alt="YORX Logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <div>
                <span className="text-xl font-bold text-white">YORX</span>
                <p className="text-sm text-gray-400">Personalized WOD Scaling</p>
              </div>
            </div>

            {/* Links */}
            <nav className="flex items-center space-x-8 mb-4 md:mb-0">
              <a href="#benefits" className="text-gray-300 hover:text-white transition-colors duration-200">
                Benefits
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors duration-200">
                How it Works
              </a>
              <a href="#integrations" className="text-gray-300 hover:text-white transition-colors duration-200">
                Integrations
              </a>
            </nav>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm flex items-center justify-center md:justify-end">
                Made with <Heart className="w-4 h-4 text-red-400 mx-1" /> for the CrossFit community
              </p>
              <p className="text-gray-500 text-xs mt-1">
                © 2024 YORX. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
