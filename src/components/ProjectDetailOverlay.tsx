/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { X, Cpu, Terminal, Shield, Workflow, Layers, ArrowLeft } from "lucide-react";
import { Project } from "../types";

interface ProjectDetailOverlayProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetailOverlay({ project, onClose }: ProjectDetailOverlayProps) {
  return (
    <motion.div
      id={`project-overlay-${project.id}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-cyber-dark/95 backdrop-blur-md flex flex-col pt-4 pb-12 px-4 sm:px-6 lg:px-8 cyber-scanlines"
    >
      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col">
        {/* Navigation / Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-cyber-blue/15">
          <button
            id={`btn-close-back-${project.id}`}
            onClick={onClose}
            className="flex items-center gap-3 px-5 py-2.5 rounded-sm border border-cyber-blue/30 bg-cyber-blue/5 hover:bg-cyber-blue/20 text-cyber-blue font-mono text-sm tracking-wider uppercase transition-all duration-300 pointer-events-auto touch-manipulation min-h-[44px] hover:glow-blue active:scale-95"
            aria-label="Back to Portfolio"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </button>
          
          <div className="flex items-center gap-2 text-xs font-mono text-gray-500 max-sm:hidden">
            <span className="w-1.5 h-1.5 bg-cyber-blue animate-ping rounded-full inline-block"></span>
            <span>SYSTEM_ONLINE // PROTOCOL_WALKTHROUGH</span>
          </div>
          
          <button
            id={`btn-close-[x]-${project.id}`}
            onClick={onClose}
            className="p-3 rounded-full border border-cyber-purple/30 bg-cyber-purple/5 hover:bg-cyber-purple/20 text-cyber-purple hover:text-white transition-all duration-200 pointer-events-auto touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center hover:glow-purple"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 flex-grow items-start my-auto">
          
          {/* Left Column: Visual Showcase & Telemetry */}
          <motion.div 
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Visual Blueprint / Image Showcase */}
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-cyber-blue/30 shadow-inner group">
              <div className={`absolute inset-0 bg-gradient-to-tr ${project.imageFallbackGradient} flex items-center justify-center`}>
                <div className="absolute inset-0 cyber-grid opacity-35 bg-center"></div>
                <div className="absolute inset-0 cyber-grid-dots opacity-40 bg-center"></div>
                
                {/* HUD Overlay Lines */}
                <span className="hud-corner hud-tl" />
                <span className="hud-corner hud-tr" />
                <span className="hud-corner hud-bl" />
                <span className="hud-corner hud-br" />
                
                {/* Visualizer Circle */}
                <div className="relative w-48 h-48 rounded-full border border-cyber-blue/15 flex items-center justify-center animate-spin-slow">
                  <div className="w-36 h-36 rounded-full border border-dashed border-cyber-purple/20 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full border-2 border-cyber-blue/40 border-dotted flex items-center justify-center">
                      <Cpu className="w-10 h-10 text-cyber-blue animate-pulse-slow" />
                    </div>
                  </div>
                  {/* Rotating Ring Indicator */}
                  <div className="absolute inset-2 border-t-2 border-b-2 border-cyber-blue/50 rounded-full"></div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-cyber-dark/80 backdrop-blur-sm p-3 rounded border border-cyber-blue/20 font-mono text-[10px] text-gray-400">
                  <div className="flex justify-between border-b border-cyber-blue/10 pb-1 mb-1">
                    <span className="text-cyber-blue font-bold tracking-wider">PROJECT_GRID_COORD</span>
                    <span className="text-cyber-purple">VARUNIX-O_9</span>
                  </div>
                  <div className="grid grid-cols-2 gap-x-2 text-[9px]">
                    <span className="truncate">ACCEL: MULTI-AXIS</span>
                    <span className="truncate text-right">LIDAR: ACTIVE</span>
                    <span className="truncate">SENSORS: STABILIZED</span>
                    <span className="truncate text-right">PWR: 100% [NOMINAL]</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Diagnostics Terminal */}
            <div className="cyber-panel p-5 rounded-sm overflow-hidden font-mono text-xs text-gray-300 relative">
              <span className="hud-corner hud-tl" />
              <span className="hud-corner hud-tr" />
              <span className="hud-corner hud-bl" />
              <span className="hud-corner hud-br" />
              <div className="flex items-center gap-2 mb-3 text-cyber-blue select-none border-b border-cyber-blue/15 pb-2">
                <Terminal className="w-4 h-4" />
                <span className="font-bold tracking-wider uppercase text-[10px]">Diagnostics Telemetry</span>
              </div>
              <pre className="whitespace-pre-wrap leading-relaxed text-cyber-blue/90 select-all overflow-x-auto max-h-[140px]">
                <code>{project.blueprintText}</code>
              </pre>
            </div>
          </motion.div>

          {/* Right Column: Detailed copy, specifications, tags */}
          <motion.div 
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            {/* Title Block */}
            <div>
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-cyber-purple font-bold uppercase tracking-wider">
                <Workflow className="w-3.5 h-3.5" />
                <span>{project.category}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-space font-medium tracking-tight text-white glow-text-blue mb-3">
                {project.title}
              </h1>
              <p className="font-sans text-lg text-cyber-blue font-medium tracking-wide">
                {project.subtitle}
              </p>
            </div>

            {/* Core Overview Description */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs text-gray-500 uppercase tracking-widest border-b border-white/5 pb-2">01 // Engineering Brief</h3>
              <p className="font-sans text-gray-300 leading-relaxed text-base sm:text-lg">
                {project.description}
              </p>
              <p className="font-sans text-gray-400 leading-relaxed text-sm sm:text-base">
                {project.shortDesc}
              </p>
            </div>

            {/* Core Metrics Visualizers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-4">
              {project.stats.map((stat, sIdx) => (
                <div 
                  key={sIdx} 
                  className="cyber-panel p-4 rounded-sm border-l-3 border-l-cyber-blue"
                >
                  <p className="font-mono text-[10px] text-gray-500 uppercase tracking-wider mb-1">{stat.name}</p>
                  <p className="font-space text-lg text-white font-semibold">{stat.value}</p>
                  
                  {/* Fictional cyber bar loading status */}
                  <div className="mt-2 w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple shadow-cyan-500 shadow-md"
                      style={{ width: `${sIdx % 2 === 0 ? "85%" : "72%"}` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Engineering Specs Logs lists */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs text-cyber-purple uppercase tracking-widest border-b border-cyber-purple/15 pb-2">02 // Technical Specifications</h3>
              <ul className="space-y-3 font-sans text-sm text-gray-300">
                {project.specs.map((spec, specIdx) => (
                  <li key={specIdx} className="flex gap-3 items-start leading-relaxed">
                    <span className="flex-shrink-0 w-5 h-5 rounded-sm bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue font-mono text-[9px] font-bold flex items-center justify-center mt-0.5">
                      {specIdx + 1}
                    </span>
                    <p>{spec}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech tag widgets */}
            <div className="space-y-3">
              <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest">03 // Technology Stack Mesh</h4>
              <div className="flex flex-wrap gap-2.5">
                {project.techTags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-3.5 py-1.5 rounded-sm bg-white/5 border border-white/10 text-xs font-mono text-gray-300 tracking-wider hover:border-cyber-blue/50 hover:text-white transition-all cursor-default"
                  >
                    #{tag.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}
