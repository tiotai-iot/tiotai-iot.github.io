'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProtocolFeed {
  id: number;
  protocol: string;
  metric: string;
  raw: string;
  location: string;
}

interface NormalizedItem {
  id: number;
  source: string;
  origin: string;
  payload: string;
}

const protocolFeeds: ProtocolFeed[] = [
  { id: 1, protocol: 'LoRaWAN', metric: 'Freq: 868MHz', raw: '0x4A7F2C...[RSSI: -112]', location: 'JAFZA Logistics' },
  { id: 2, protocol: '5G / NB-IoT', metric: 'Band: B20', raw: 'AT+NMGS=12,04A2... ', location: 'Downtown Facility' },
  { id: 3, protocol: 'BMS / WiFi', metric: 'Ch: 6 (2.4GHz)', raw: 'JSON: {"temp": 23.4, "v": 1}', location: 'KIZAD Warehouse' }
];

export default function TiotaiHome() {
  const [activeTrack, setActiveTrack] = useState<'build' | 'connect'>('connect');
  const [normalizedStream, setNormalizedStream] = useState<NormalizedItem[]>([]);
  const [metrics, setMetrics] = useState({ activeDevices: 1420, totalPayloads: 849200 });

  useEffect(() => {
    const interval = setInterval(() => {
      const randomFeed = protocolFeeds[Math.floor(Math.random() * protocolFeeds.length)];
      const newNormalizedItem: NormalizedItem = {
        id: Date.now(),
        source: randomFeed.protocol,
        origin: randomFeed.location,
        payload: `[NORMALIZED] // status: 200 // system_ok`
      };

      setNormalizedStream(prev => [newNormalizedItem, ...prev.slice(0, 2)]);
      setMetrics(prev => ({
        activeDevices: prev.activeDevices + (Math.random() > 0.7 ? 1 : 0),
        totalPayloads: prev.totalPayloads + Math.floor(Math.random() * 5) + 1
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#08080A] text-[#F4F4F6] font-mono antialiased selection:bg-teal-500/30 relative overflow-hidden">
      {/* Visual Ambient Grid / Glow Effect */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header Panel */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center relative z-10 border-b border-white/[0.04]">
        <div className="flex items-center space-x-3">
          <span className="tracking-widest text-lg uppercase font-bold text-white">TIOTAI</span>
          <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-neutral-400">UAE REGIONAL</span>
        </div>
        <div className="flex items-center space-x-6 text-xs text-neutral-400">
          <span className="hidden sm:inline">TARGET ROUND: $250K - $500K</span>
          <span className="h-2 w-2 bg-teal-400 rounded-full animate-ping" />
        </div>
      </header>

      {/* Interactive Terminal / Dashboard */}
      <main className="max-w-7xl mx-auto px-6 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-center min-h-[calc(100vh-88px)]">
        
        {/* Pitch / Strategic Core Context */}
        <div className="lg:col-span-5 space-y-8">
          <div className="inline-flex items-center space-x-2 bg-white/[0.03] border border-white/10 text-neutral-300 text-xs px-3 py-1.5 rounded-full">
            <span className="text-teal-400">●</span>
            <span>Unified Physical Intelligence Layer</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-white">
            Bridging physical operations across the <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-200 font-normal">UAE</span>.
          </h1>

          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-lg">
            Tiotai tames fragmented B2B IoT infrastructure. We engineer custom field hardware from the ground up or ingest legacy multi-protocol architectures into a single, highly optimized operational execution layer.
          </p>

          {/* Track Selection Switch */}
          <div className="flex border border-white/10 rounded-lg p-1 bg-white/[0.02] max-w-sm text-xs">
            <button 
              onClick={() => setActiveTrack('build')}
              className={`flex-1 py-2 text-center rounded-md transition-all ${activeTrack === 'build' ? 'bg-white text-black font-medium' : 'text-neutral-400 hover:text-white'}`}
            >
              Track 1: Build
            </button>
            <button 
              onClick={() => setActiveTrack('connect')}
              className={`flex-1 py-2 text-center rounded-md transition-all ${activeTrack === 'connect' ? 'bg-white text-black font-medium' : 'text-neutral-400 hover:text-white'}`}
            >
              Track 2: Connect
            </button>
          </div>

          {/* Macro Data Callouts for VCs */}
          <div className="pt-6 grid grid-cols-2 gap-4 border-t border-white/5">
            <div>
              <p className="text-[10px] text-neutral-500 uppercase tracking-wider">Projected UAE Market (2033)</p>
              <p className="text-2xl font-light text-white">$17.48 B</p>
            </div>
            <div>
              <p className="text-[10px] text-neutral-500 uppercase tracking-wider">Integration CAGR</p>
              <p className="text-2xl font-light text-teal-400">32.3%</p>
            </div>
          </div>
        </div>

        {/* Dynamic Telemetry HUD Terminal Window */}
        <div className="lg:col-span-7 h-[540px] border border-white/10 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
          <div className="flex justify-between items-center border-b border-white/5 pb-4 text-xs">
            <span className="text-neutral-400">INGESTION_ENGINE // METRIC_HUD</span>
            <span className="text-neutral-500 text-[11px]">ACTIVE DEVS: {metrics.activeDevices}</span>
          </div>

          <div className="flex-grow my-4 relative">
            <AnimatePresence mode="wait">
              {activeTrack === 'connect' ? (
                <motion.div 
                  key="connect-view"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full items-center"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] text-neutral-500 uppercase block tracking-wider">Raw Heterogeneous Feeds</span>
                    {protocolFeeds.map((feed) => (
                      <div key={feed.id} className="border border-white/5 rounded-lg p-3 bg-white/[0.01] text-[11px] relative overflow-hidden">
                        <div className="flex justify-between text-neutral-400 mb-1">
                          <span className="text-amber-200 font-medium">{feed.protocol}</span>
                          <span className="text-[10px] text-neutral-600">{feed.metric}</span>
                        </div>
                        <div className="text-neutral-500 truncate font-light text-[10px]">{feed.raw}</div>
                        <div className="text-[9px] text-neutral-400 mt-1.5 flex justify-between items-center">
                          <span>{feed.location}</span>
                          <span className="text-amber-400/70 animate-pulse">⚡ Ingesting</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="h-full flex flex-col justify-center space-y-3 border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-4">
                    <span className="text-[10px] text-neutral-500 uppercase block tracking-wider">Normalized Output Stream</span>
                    <div className="bg-black/40 border border-teal-500/20 rounded-xl p-4 flex-grow flex flex-col justify-start space-y-3 min-h-[220px]">
                      {normalizedStream.map((item) => (
                        <div key={item.id} className="text-[11px] border-b border-white/5 pb-2 last:border-none">
                          <div className="flex justify-between text-teal-400">
                            <span>{item.source} → Schema OK</span>
                            <span className="text-neutral-600 text-[9px]">{item.origin}</span>
                          </div>
                          <p className="text-neutral-400 text-[10px] mt-0.5">{item.payload}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="build-view"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col justify-center items-center h-full text-center p-6 space-y-4"
                >
                  <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02]">
                    <span className="text-amber-200 text-xl">⚙️</span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-white font-medium text-sm">Bespoke Architectural Blueprints</h3>
                    <p className="text-neutral-400 text-xs max-w-sm leading-relaxed">
                      Leveraging mature, field-ready hardware IP inherited from Farm21 to synthesize custom embedded microcode, physical topologies, and instant network validation.
                    </p>
                  </div>
                  <div className="inline-flex space-x-6 text-[10px] text-neutral-500 pt-2">
                    <span>● INFRASTRUCTURE-AGNOSTIC</span>
                    <span>● EXTREME ENVIRONMENT VALIDATED</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Operational Footer Details */}
          <div className="border border-white/10 rounded-xl p-4 bg-white/[0.02] backdrop-blur-md flex justify-between items-center text-xs">
            <div>
              <span className="text-neutral-500 text-[10px] block">CORE MANIFESTO</span>
              <p className="text-neutral-200 mt-0.5">"Build it if you do not have it; connect it if you already do."</p>
            </div>
            <div className="text-right">
              <span className="text-neutral-500 text-[10px] block">TOTAL NET PAYLOADS</span>
              <p className="text-teal-400 font-medium">{metrics.totalPayloads.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}