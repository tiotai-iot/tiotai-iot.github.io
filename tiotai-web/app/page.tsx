'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface UseCase {
  id: number;
  title: string;
  description: string;
  icon: string;
  metric: string;
  color: string;
}

interface Stat {
  label: string;
  value: string;
  change: string;
}
const useCases: UseCase[] = [
  { 
    id: 1, 
    title: 'Smart Logistics', 
    description: 'Real-time tracking across UAE supply chains',
    icon: '📦',
    metric: '850+ active nodes',
    color: 'from-blue-500 to-cyan-400'
  },
  { 
    id: 2, 
    title: 'Industrial IoT', 
    description: 'Multi-protocol sensor fusion at the edge',
    icon: '⚙️',
    metric: '15+ protocols',
    color: 'from-purple-500 to-pink-400'
  },
  { 
    id: 3, 
    title: 'Smart Cities', 
    description: 'Unified infrastructure for Abu Dhabi & Dubai',
    icon: '🏙️',
    metric: '2.4M endpoints',
    color: 'from-amber-500 to-orange-400'
  },
];

const mockNodes: Stat[] = [
  { label: 'Active Gateways', value: '127', change: '+12% mo' },
  { label: 'Data Processed', value: '2.4TB', change: '+340%' },
  { label: 'Uptime', value: '99.97%', change: 'SLA' },
];

export default function TiotaiHome() {
  const [hoveredUseCase, setHoveredUseCase] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 backdrop-blur-md bg-black/40 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">tiotai</span>
          </motion.div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-shadow"
          >
            Get Started
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className="text-xs font-bold tracking-widest uppercase text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full">
                  🚀 Unified Physical Intelligence for UAE
                </span>
              </motion.div>
              <h1 className="text-5xl lg:text-6xl font-black leading-tight">
                The Operating System <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">for IoT</span>
              </h1>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
              Tiotai unifies fragmented IoT infrastructure across the UAE. Single platform. Multi-protocol. Enterprise-grade. From hardware deployment to real-time data orchestration.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                Explore Platform
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-white/20 rounded-lg font-semibold hover:bg-white/5 transition-all"
              >
                View Docs
              </motion.button>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-white/10 space-y-3">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Trusted by industry leaders</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full" />
                <div className="w-8 h-8 bg-purple-500/20 rounded-full" />
                <div className="w-8 h-8 bg-cyan-500/20 rounded-full" />
                <span className="text-sm text-gray-400">+ 40+ enterprises</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-96 lg:h-full min-h-96"
          >
            {/* Animated tech visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-sm">
                {/* Orbiting circles */}
                <motion.div 
                  className="absolute inset-0 border-2 border-cyan-500/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div 
                  className="absolute inset-8 border-2 border-purple-500/20 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div 
                  className="absolute inset-16 border-2 border-blue-500/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                />

                {/* Center glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-30"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <div className="absolute w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl" />
                </div>

                {/* Floating icons */}
                <motion.div 
                  className="absolute top-4 left-8 text-3xl"
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  📡
                </motion.div>
                <motion.div 
                  className="absolute top-12 right-4 text-3xl"
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                >
                  ⚡
                </motion.div>
                <motion.div 
                  className="absolute bottom-8 left-4 text-3xl"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                >
                  🔗
                </motion.div>
                <motion.div 
                  className="absolute bottom-12 right-8 text-3xl"
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, delay: 1.5 }}
                >
                  💾
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="relative py-20 px-6 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Scale That Matters
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockNodes.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-white/20 transition-all hover:shadow-lg hover:shadow-blue-500/10"
              >
                <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">{stat.label}</p>
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-sm text-cyan-400 font-medium">{stat.change}</p>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Enterprise Use Cases</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Purpose-built for UAE industry leaders tackling real-world IoT complexity</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <motion.div
                key={useCase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: useCase.id * 0.1 }}
                onHoverStart={() => setHoveredUseCase(useCase.id)}
                onHoverEnd={() => setHoveredUseCase(null)}
                className="group relative h-80 rounded-2xl border border-white/10 overflow-hidden cursor-pointer"
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50" />

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col justify-between">
                  <div>
                    <p className="text-4xl mb-4">{useCase.icon}</p>
                    <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{useCase.description}</p>
                  </div>
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Current scale</p>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${useCase.color} bg-clip-text text-transparent`}>
                      {useCase.metric}
                    </p>
                  </div>
                </div>

                {/* Hover effect */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-0 pointer-events-none`}
                  animate={{ opacity: hoveredUseCase === useCase.id ? 0.05 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">Ready to Transform Your Infrastructure?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Join leading enterprises deploying next-generation IoT at scale
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-bold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                Schedule Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 border border-white/20 rounded-lg font-bold hover:bg-white/5 transition-all"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
              <span className="font-bold">tiotai</span>
            </div>
            <p className="text-sm text-gray-500">Physical intelligence for enterprise</p>
          </div>
          <div>
            <p className="text-sm font-semibold mb-4">Product</p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-white transition-colors cursor-pointer">Platform</li>
              <li className="hover:text-white transition-colors cursor-pointer">Pricing</li>
              <li className="hover:text-white transition-colors cursor-pointer">Enterprise</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold mb-4">Company</p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-white transition-colors cursor-pointer">About</li>
              <li className="hover:text-white transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold mb-4">Legal</p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-white transition-colors cursor-pointer">Privacy</li>
              <li className="hover:text-white transition-colors cursor-pointer">Terms</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex justify-between items-center">
          <p className="text-sm text-gray-500">© 2024 Tiotai. All rights reserved.</p>
          <div className="flex gap-4">
            <button className="text-gray-500 hover:text-white transition-colors">Twitter</button>
            <button className="text-gray-500 hover:text-white transition-colors">LinkedIn</button>
            <button className="text-gray-500 hover:text-white transition-colors">GitHub</button>
          </div>
        </div>
      </footer>
    </div>
  );
}