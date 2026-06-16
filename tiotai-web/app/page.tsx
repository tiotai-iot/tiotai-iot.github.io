'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProtocolFeed {
  id: number;
  protocol: string;
  metric: string;
  raw: string;
  location: string;
  delay: string;
}

interface NormalizedItem {
  id: number;
  source: string;
  origin: string;
  payload: string;
  timestamp: string;
}

interface EdgeNode {
  id: string;
  label: string;
  type: 'sensor' | 'gateway' | 'cloud';
  x: number;
  y: number;
}

const protocolFeeds: ProtocolFeed[] = [
  { id: 1, protocol: 'LoRaWAN', metric: 'Freq: 868MHz', raw: '0x4A7F2C...[RSSI: -112]', location: 'JAFZA Logistics', delay: '12ms' },
  { id: 2, protocol: '5G / NB-IoT', metric: 'Band: B20', raw: 'AT+NMGS=12,04A2... ', location: 'Downtown Facility', delay: '8ms' },
  { id: 3, protocol: 'BMS / WiFi', metric: 'Ch: 6 (2.4GHz)', raw: 'JSON: {"temp": 23.4, "v": 1}', location: 'KIZAD Warehouse', delay: '4ms' }
];

const mockNodes: EdgeNode[] = [
  { id: 'n1', label: 'JAFZA Valve Lock', type: 'sensor', x: 20, y: 30 },
  { id: 'n2', label: 'Downtown Smart Container', type: 'sensor', x: 25, y: 70 },
  { id: 'n3', label: 'KIZAD Environmental Mesh', type: 'sensor', x: 15, y: 50 },
  { id: 'gtw', label: 'TIOTAI EDGE GATEWAY v1.2', type: 'gateway', x: 55, y: 50 },
  { id: 'cloud', label: 'Unified Ingestion Layer', type: 'cloud', x: 85, y: 50 },
];

export default function TiotaiHome() {
  const [activeTrack, setActiveTrack] = useState<'build' | 'connect'>('connect');
  const [normalizedStream, setNormalizedStream] = useState<NormalizedItem[]>([]);
  const [metrics, setMetrics] = useState({ activeDevices: 1420, totalPayloads: 849200, throughput: '48.2 kb/s' });

  useEffect(() => {
    const interval = setInterval(() => {
      const randomFeed = protocolFeeds[Math.floor(Math.random() * protocolFeeds.length)];
      const now = new Date();
      const timestamp = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
      
      const newNormalizedItem: NormalizedItem = {
        id: Date.now(),
        source: randomFeed.protocol,
        origin: randomFeed.location,
        payload: `[NORMALIZED] // status: 200 // telemetry_sync_ok`,
        timestamp
      };

      setNormalizedStream(prev => [newNormalizedItem, ...prev.slice(0, 3)]);
      setMetrics(prev => ({
        activeDevices: prev.activeDevices + (Math.random() > 0.85 ? 1 : 0),
        totalPayloads: prev.totalPayloads + Math.floor(Math.random() * 4) + 1,
        throughput: (45.0 + Math.random() * 5).toFixed(1) + ' kb/s'
      }));
    }, 1600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#060608] text-[#F4F4F6] font-mono antialiased selection:bg-cyan-500/30 relative overflow-hidden">
      
      {/* Premium Technical Background Details */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-amber-500/[0.02] rounded-full blur-[150px] pointer-events-none" />

      {/* Header Panel */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center relative z-10 border-b border-white/[0.04] backdrop-blur-md bg-[#060608]/50">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="h-2.5 w-2.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-sm group-hover:rotate-45 transition-transform duration-300" />
          <span className="tracking-widest text-lg font-black text-white">TIOTAI</span>
          <span className="text-[9px] tracking-wider font-bold bg-white/[0.04] border border-white/10 px-2 py-0.5 rounded text-neutral-400 uppercase">UAE REGIONAL ENGINE</span>
        </div>
        <div className="flex items-center space-x-6 text-[11px] text-neutral-400">
          <span className="hidden sm:inline tracking-wider border-r border-white/10 pr-6">TARGET SEED CAPITAL: $250K - $500K</span>
          <div className="flex items-center space-x-2">
            <span className="h-1.5 w-1.5 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-white font-medium tracking-wide">GATEWAY LIVE</span>
          </div>
        </div>
      </header>

      {/* Main Structural Section */}
      <main className="max-w-7xl mx-auto px-6 pt-12 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-center min-h-[calc(100vh-88px)]">
        
        {/* Left Grid Layout: Value Proposition Matrix */}
        <div className="lg:col-span-5 space-y-8 lg:pr-4">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/20 text-cyan-400 text-[11px] uppercase tracking-widest px-3 py-1.5 rounded-md">
            <span className="w-1 h-1 bg-cyan-400 rounded-full animate-ping" />
            <span>Unified Physical Operations Layer</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-light tracking-tight leading-[1.05] text-white">
            Unifying digital intelligence across the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-amber-200 font-normal">UAE ecosystem</span>.
          </h1>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-lg font-sans">
            Tiotai orchestrates fragmented B2B IoT infrastructure. Whether deploying enterprise hardware components from scratch or normalising complex multi-protocol streams, we deliver a single execution environment for physical operations.
          </p>

          {/* Interactive Navigation Selector Buttons */}
          <div className="grid grid-cols-2 border border-white/10 rounded-xl p-1 bg-white/[0.01] max-w-sm text-xs backdrop-blur-sm relative shadow-inner">
            <button 
              onClick={() => setActiveTrack('connect')}
              className={`py-3 text-center rounded-lg transition-all tracking-wider uppercase font-semibold ${activeTrack === 'connect' ? 'bg-white text-black shadow-lg shadow-white/5' : 'text-neutral-400 hover:text-white hover:bg-white/[0.02]'}`}
            >
              Track 1: Connect
            </button>
            <button 
              onClick={() => setActiveTrack('build')}
              className={`py-3 text-center rounded-lg transition-all tracking-wider uppercase font-semibold ${activeTrack === 'build' ? 'bg-white text-black shadow-lg shadow-white/5' : 'text-neutral-400 hover:text-white hover:bg-white/[0.02]'}`}
            >
              Track 2: Build
            </button>
          </div>

          {/* Macro Industry Indicators for Strategic Pitching */}
          <div className="pt-8 grid grid-cols-3 gap-4 border-t border-white/[0.06]">
            <div>
              <p className="text-[9px] text-neutral-500 uppercase font-bold tracking-widest mb-1">UAE IoT Market (2033)</p>
              <p className="text-2xl font-light text-white">$17.48B</p>
            </div>
            <div>
              <p className="text-[9px] text-neutral-500 uppercase font-bold tracking-widest mb-1">Platform Layer (2030)</p>
              <p className="text-2xl font-light text-neutral-300">$346.5M</p>
            </div>
            <div>
              <p className="text-[9px] text-neutral-500 uppercase font-bold tracking-widest mb-1">Integration CAGR</p>
              <p className="text-2xl font-light text-cyan-400">32.3%</p>
            </div>
          </div>
        </div>

        {/* Right Grid Layout: Immersive Core Telemetry Console */}
        <div className="lg:col-span-7 h-[580px] border border-white/10 rounded-2xl bg-gradient-to-b from-white/[0.03] to-[#0A0A0F]/90 p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden backdrop-blur-xl group">
          
          {/* Subtle Graphic Accents */}
          <div className="absolute top-0 left-1/4 w-px h-full bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05)_0%,transparent_100%)] pointer-events-none" />
          <div className="absolute top-0 left-2/4 w-px h-full bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05)_0%,transparent_100%)] pointer-events-none" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05)_0%,transparent_100%)] pointer-events-none" />

          {/* Console Header Frame */}
          <div className="flex justify-between items-center border-b border-white/[0.06] pb-4 text-xs">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-neutral-400 font-bold tracking-wider">SYSTEM_ORCHESTRATION // PIPELINE_HUD</span>
            </div>
            <div className="flex space-x-4 text-[10px] text-neutral-500">
              <span>DEVS: <span className="text-neutral-300 font-semibold">{metrics.activeDevices}</span></span>
              <span>BAND: <span className="text-neutral-300 font-semibold">{metrics.throughput}</span></span>
            </div>
          </div>

          {/* Interactive Rendering Viewport Area */}
          <div className="flex-grow my-4 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {activeTrack === 'connect' ? (
                <motion.div 
                  key="connect-layer"
                  initial={{ opacity: 0, scale: 0.99 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 h-full items-stretch"
                >
                  {/* Left Column Feed Panel */}
                  <div className="md:col-span-5 flex flex-col justify-between space-y-2.5">
                    <span className="text-[10px] text-neutral-500 uppercase font-bold tracking-widest block">Heterogeneous Edge Ingestion</span>
                    {protocolFeeds.map((feed) => (
                      <div key={feed.id} className="border border-white/[0.04] rounded-xl p-3.5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all text-[11px] relative overflow-hidden group/card flex flex-col justify-between h-full shadow-lg">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-transparent opacity-50" />
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-cyan-400 font-bold tracking-wide">{feed.protocol}</span>
                          <span className="text-[9px] text-neutral-600 border border-white/5 px-1.5 py-0.5 rounded bg-black/20">{feed.metric}</span>
                        </div>
                        <div className="text-neutral-500 truncate font-mono text-[10px] my-1.5 bg-black/20 p-1.5 rounded border border-white/[0.02]">{feed.raw}</div>
                        <div className="text-[9px] text-neutral-400 flex justify-between items-center pt-1 border-t border-white/[0.02]">
                          <span className="truncate max-w-[110px]">{feed.location}</span>
                          <span className="text-amber-400/80 font-medium tracking-wider flex items-center space-x-1">
                            <span className="w-1 h-1 bg-amber-400 rounded-full animate-ping" />
                            <span>+{feed.delay}</span>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Central Node Connection Graph Visualiser */}
                  <div className="hidden md:col-span-2 relative flex flex-col justify-center items-center overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                      <line x1="10%" y1="20%" x2="90%" y2="50%" stroke="rgba(34,211,238,0.2)" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="rgba(34,211,238,0.2)" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="10%" y1="80%" x2="90%" y2="50%" stroke="rgba(34,211,238,0.2)" strokeWidth="1" strokeDasharray="3 3" />
                      
                      <motion.circle r="3" fill="#22d3ee"
                        animate={{ cx: ['10%', '90%'], cy: ['20%', '50%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                      <motion.circle r="3" fill="#22d3ee"
                        animate={{ cx: ['10%', '90%'], cy: ['50%', '50%'] }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: "linear", delay: 0.4 }}
                      />
                      <motion.circle r="3" fill="#22d3ee"
                        animate={{ cx: ['10%', '90%'], cy: ['80%', '50%'] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: "linear", delay: 0.2 }}
                      />
                    </svg>
                    <div className="text-[10px] text-neutral-600 font-bold uppercase tracking-widest rotate-90 whitespace-nowrap">INGEST_MESH</div>
                  </div>

                  {/* Right Column Output Stream Container Panel */}
                  <div className="md:col-span-5 flex flex-col space-y-2.5">
                    <span className="text-[10px] text-neutral-500 uppercase font-bold tracking-widest block">Unified Stream Output</span>
                    <div className="bg-black/30 border border-cyan-500/10 rounded-xl p-4 flex-grow flex flex-col justify-start space-y-3 min-h-[220px] shadow-2xl relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/[0.01] to-transparent pointer-events-none" />
                      <AnimatePresence>
                        {normalizedStream.map((item) => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            className="text-[11px] border-b border-white/[0.04] pb-2.5 last:border-none group/stream"
                          >
                            <div className="flex justify-between items-center text-cyan-400 mb-1">
                              <span className="font-bold tracking-wide flex items-center space-x-1.5">
                                <span className="w-1 h-1 bg-cyan-400 rounded-sm" />
                                <span>{item.source} // SCHEMA_OK</span>
                              </span>
                              <span className="text-neutral-600 text-[9px] font-medium">{item.timestamp}</span>
                            </div>
                            <p className="text-neutral-400 text-[10px] font-mono leading-relaxed bg-white/[0.01] px-2 py-1 rounded border border-white/[0.02] truncate">{item.payload}</p>
                            <div className="text-[9px] text-neutral-500 mt-1 pl-2 font-sans truncate">Origin: {item.origin}</div>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* Track 1: Build Blueprint Network Map Visualiser */
                <motion.div 
                  key="build-layer"
                  initial={{ opacity: 0, scale: 0.99 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.2 }}
                  className="relative h-full border border-white/[0.04] rounded-xl bg-black/20 p-4 flex flex-col justify-between"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] bg-[size:1rem_1rem]" />
                  
                  {/* SVG Map Path Interconnections */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    <line x1="20%" y1="30%" x2="55%" y2="50%" stroke="rgba(245,158,11,0.15)" strokeWidth="1.5" />
                    <line x1="25%" y1="70%" x2="55%" y2="50%" stroke="rgba(245,158,11,0.15)" strokeWidth="1.5" />
                    <line x1="15%" y1="50%" x2="55%" y2="50%" stroke="rgba(245,158,11,0.15)" strokeWidth="1.5" />
                    <line x1="55%" y1="50%" x2="85%" y2="50%" stroke="rgba(34,211,238,0.25)" strokeWidth="2" strokeDasharray="4 4" />
                    
                    {/* Signal Pulses tracking between Nodes */}
                    <motion.circle r="4" fill="#f59e0b" animate={{ cx: ['20%', '55%'], cy: ['30%', '50%'] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
                    <motion.circle r="4" fill="#f59e0b" animate={{ cx: ['25%', '55%'], cy: ['70%', '50%'] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} />
                    <motion.circle r="4" fill="#22d3ee" animate={{ cx: ['55%', '85%'], cy: ['50%', '50%'] }} transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }} />
                  </svg>

                  {/* Render Functional Interactive Nodes */}
                  <div className="absolute inset-0 z-10 pointer-events-none">
                    {mockNodes.map((node) => (
                      <div 
                        key={node.id} 
                        style={{ left: `${node.x}%`, top: `${node.y}%` }}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                      >
                        <div className={`w-3 h-3 rounded-full border-2 bg-[#060608] flex items-center justify-center ${node.type === 'cloud' ? 'border-cyan-400 ring-4 ring-cyan-500/10' : node.type === 'gateway' ? 'border-white ring-4 ring-white/10' : 'border-amber-500'}`}>
                          <div className={`w-1 h-1 rounded-full ${node.type === 'cloud' ? 'bg-cyan-400' : node.type === 'gateway' ? 'bg-white' : 'bg-amber-500'}`} />
                        </div>
                        <span className="text-[8px] font-bold text-neutral-400 mt-1.5 whitespace-nowrap bg-black/60 px-1.5 py-0.5 border border-white/5 rounded backdrop-blur-sm tracking-wide">
                          {node.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Content Strategy Context Floating Card Block */}
                  <div className="mt-auto max-w-md bg-[#0A0A0F]/90 border border-white/10 rounded-xl p-4 shadow-2xl relative z-20 backdrop-blur-md self-center text-center sm:text-left">
                    <div className="flex items-center space-x-2 mb-1.5 justify-center sm:justify-start">
                      <span className="text-amber-400 text-xs">⚙️</span>
                      <h4 className="text-white font-bold text-xs uppercase tracking-wider">Farm21 Battle-Tested IP Pedigree</h4>
                    </div>
                    <p className="text-neutral-400 text-[11px] font-sans leading-relaxed">
                      We eliminate greenfield execution dependencies. Tiotai designs, sources, and commissions custom configurations using field-ready blueprints built to process telemetry workloads safely within extreme physical environments.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Core Manifesto HUD Base Tray Dashboard */}
          <div className="border border-white/10 rounded-xl p-4 bg-white/[0.01] backdrop-blur-md flex flex-col sm:flex-row justify-between items-center gap-3 text-xs shadow-inner relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div>
              <span className="text-neutral-500 text-[9px] uppercase font-bold tracking-widest block mb-0.5">Core Operational Manifesto</span>
              <p className="text-neutral-200 font-medium tracking-wide">"Build it if you do not have it; connect it if you already do."</p>
            </div>
            <div className="sm:text-right border-t sm:border-t-0 border-white/5 pt-2 sm:pt-0 w-full sm:w-auto flex sm:flex-col justify-between items-baseline sm:justify-center">
              <span className="text-neutral-500 text-[9px] uppercase font-bold tracking-widest block mb-0.5">Normalized Data Frame Log</span>
              <p className="text-cyan-400 font-bold tracking-widest font-mono text-sm">{metrics.totalPayloads.toLocaleString()}</p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}