'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function TiotaiHome() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10 backdrop-blur-md sticky top-0 z-50 bg-black/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-bold tracking-tight text-lg">tiotai</div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2 bg-white text-black rounded text-sm font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact
          </motion.button>
        </div>
      </nav>

      {/* Hero */}
      <section className="border-b border-white/10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">Enterprise IoT Platform</p>
              <h1 className="text-6xl font-light leading-tight mb-6 max-w-3xl">
                Unified infrastructure for physical operations
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                Connect disparate IoT devices, normalize multi-protocol data streams, and orchestrate operations across your enterprise. Built for scale. Built for the UAE.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-8">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-black font-semibold rounded hover:bg-gray-100 transition-colors"
              >
                Schedule Demo
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-white/30 rounded font-semibold hover:border-white/60 transition-colors"
              >
                View Docs
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Metrics */}
      <section className="border-b border-white/10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { label: 'Active Nodes', value: '2,847', context: 'Across UAE' },
              { label: 'Data Processed', value: '12.4TB', context: 'Last 30 days' },
              { label: 'Avg Latency', value: '68ms', context: 'Edge to cloud' },
              { label: 'Uptime SLA', value: '99.97%', context: 'Year-to-date' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-2"
              >
                <p className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</p>
                <p className="text-4xl font-light">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.context}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-white/10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-16">How it works</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              { step: '01', title: 'Collect', description: 'Aggregate data from LoRaWAN, 5G/NB-IoT, BMS, WiFi, and custom sensors across your infrastructure' },
              { step: '02', title: 'Normalize', description: 'Transform heterogeneous data streams into a unified schema with lossless protocol translation' },
              { step: '03', title: 'Orchestrate', description: 'Deploy logic at the edge or cloud. Real-time insights. Deterministic control. Enterprise workflows.' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-4 border-l border-white/20 pl-6"
              >
                <p className="text-sm text-gray-500 font-light">{item.step}</p>
                <h3 className="text-2xl font-light">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="border-b border-white/10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-16">Built for enterprise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: '📦', title: 'Logistics & Supply Chain', desc: 'Real-time tracking, temperature monitoring, tamper detection across regional hubs' },
              { icon: '⚙️', title: 'Industrial Operations', desc: 'Multi-site asset monitoring, predictive maintenance, efficiency optimization' },
              { icon: '🏙️', title: 'Smart City Infrastructure', desc: 'Unified sensor networks for utilities, traffic, environmental monitoring' },
              { icon: '🔋', title: 'Energy & Utilities', desc: 'Distributed generation, grid management, demand forecasting at scale' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 border border-white/10 rounded-lg hover:border-white/30 transition-colors"
              >
                <p className="text-3xl mb-4">{item.icon}</p>
                <h3 className="text-lg font-light mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="border-b border-white/10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-16">Technical Foundation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="space-y-6">
              <div>
                <h3 className="text-lg font-light mb-3">Protocols</h3>
                <div className="flex flex-wrap gap-2">
                  {['LoRaWAN', '5G/NB-IoT', 'WiFi', 'Bluetooth', 'Zigbee', 'BMS', 'Custom'].map(p => (
                    <span key={p} className="px-3 py-1 text-sm border border-white/20 rounded text-gray-300">{p}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-light mb-3">Deployment</h3>
                <div className="space-y-2 text-gray-400 text-sm">
                  <p>• On-premise gateway architecture</p>
                  <p>• Edge compute with local persistence</p>
                  <p>• Hybrid cloud/edge orchestration</p>
                  <p>• Kubernetes-ready containers</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="space-y-6">
              <div>
                <h3 className="text-lg font-light mb-3">Security</h3>
                <div className="space-y-2 text-gray-400 text-sm">
                  <p>• End-to-end encryption</p>
                  <p>• Device authentication & mTLS</p>
                  <p>• Data residency compliance</p>
                  <p>• Audit logging & compliance dashboards</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-light mb-3">Scalability</h3>
                <div className="space-y-2 text-gray-400 text-sm">
                  <p>• Sub-second data ingestion</p>
                  <p>• Horizontal scaling to millions of devices</p>
                  <p>• Multi-region deployment</p>
                  <p>• 99.97% availability SLA</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Tiotai */}
      <section className="border-b border-white/10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light mb-12">Why tiotai</h2>
          
          <div className="space-y-6">
            {[
              { title: 'Regional Expertise', desc: 'Deep understanding of UAE regulatory environment, climate conditions, and enterprise infrastructure patterns' },
              { title: 'Multi-Protocol Native', desc: 'No forced migrations. Integrate legacy equipment alongside new deployments' },
              { title: 'Edge-First Architecture', desc: 'Operate independently of cloud connectivity. Deterministic latency. Your data, locally controlled' },
              { title: 'Enterprise Ready', desc: 'Not a hobbyist platform. Designed for 24/7 critical infrastructure with comprehensive SLAs' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="border-l-2 border-white/30 pl-6 py-4"
              >
                <h3 className="text-lg font-light mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl font-light">Ready to scale?</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Join enterprises transforming their physical operations infrastructure</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-10 py-4 bg-white text-black font-semibold rounded hover:bg-gray-100 transition-colors">Schedule a Demo</motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-10 py-4 border border-white/30 rounded font-semibold hover:border-white/60 transition-colors">hello@tiotai.io</motion.button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-gray-500">
          <p>© 2024 Tiotai. Physical intelligence for enterprise.</p>
          <div className="flex gap-6">
            <button className="hover:text-white transition-colors">Docs</button>
            <button className="hover:text-white transition-colors">Blog</button>
            <button className="hover:text-white transition-colors">Status</button>
          </div>
        </div>
      </footer>
    </div>
  );
}