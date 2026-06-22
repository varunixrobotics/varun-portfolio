/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, Eye, Radio, Orbit, Database } from "lucide-react";
import { Project } from "../types";
import { ProjectsData } from "../data/projects";
import CursorParticlesCanvas from "./CursorParticlesCanvas";

interface ProjectGridProps {
  onSelectProject: (project: Project) => void;
}

type FilterCategory = "ALL" | "Bipedal Humanoid Class" | "Aerospace Vector Class" | "Autonomous Ground Sentry" | "Precision Medical Robotics";

export default function ProjectGrid({ onSelectProject }: ProjectGridProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("ALL");

  const categories: { label: string; value: FilterCategory }[] = [
    { label: "ALL UNITS", value: "ALL" },
    { label: "HUMANOID CORE", value: "Bipedal Humanoid Class" },
    { label: "AEROSPACE VECTOR", value: "Aerospace Vector Class" },
    { label: "GROUND DEFENSE", value: "Autonomous Ground Sentry" },
    { label: "PRECISION MEDICINE", value: "Precision Medical Robotics" }
  ];

  const filteredProjects = activeFilter === "ALL"
    ? ProjectsData
    : ProjectsData.filter(p => p.category === activeFilter);

  return (
    <section 
      id="projects-grid-section" 
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-transparent min-h-[800px] flex flex-col items-center"
    >
      {/* Cyber cursor particle flow background */}
      <CursorParticlesCanvas />

      {/* Decorative vertical background divider */}
      <div className="absolute top-0 left-12 w-[1px] h-full bg-gradient-to-b from-cyber-blue/10 via-transparent to-cyber-purple/10 pointer-events-none max-md:hidden"></div>
      <div className="absolute top-0 right-12 w-[1px] h-full bg-gradient-to-b from-cyber-purple/10 via-transparent to-cyber-blue/10 pointer-events-none max-md:hidden"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        {/* Section Heading with high tech bracket accents */}
        <div className="text-center mb-16 relative">
          <div className="flex items-center justify-center gap-2 mb-3 text-cyber-purple font-mono text-xs font-bold uppercase tracking-widest">
            <Database className="w-4 h-4" />
            <span>PROJECT_HARDWARE_INDEX // DEPLOYED_ASSETS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-space font-medium text-white tracking-tight leading-none mb-4 uppercase">
            Active Hardware Modules
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-cyber-blue to-transparent mx-auto"></div>
          
          <span className="absolute -top-6 -left-6 text-2xl font-mono text-white/5 max-sm:hidden">[SYSTEM // ARCH]</span>
        </div>

        {/* Categories / Cyber filter deck */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-4xl w-full border-b border-white/5 pb-6">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              id={`filter-${cat.value.replace(/\s+/g, '-').toLowerCase()}`}
              onClick={() => setActiveFilter(cat.value)}
              className={`px-4 py-2 text-[10px] font-mono tracking-widest border transition-all duration-300 rounded-sm touch-manipulation min-h-[44px] cursor-pointer ${
                activeFilter === cat.value
                  ? "bg-cyber-blue/15 border-cyber-blue text-cyber-blue glow-blue"
                  : "bg-transparent border-white/10 text-gray-500 hover:text-white hover:border-white/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid Display Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative cyber-panel rounded-sm cursor-pointer overflow-hidden p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 z-1 pointer-events-auto min-h-[410px] focus:outline-none focus:ring-2 focus:ring-cyber-blue"
                onClick={() => onSelectProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onSelectProject(project);
                  }
                }}
              >
                {/* Embedded HUD Corners */}
                <span className="hud-corner hud-tl" />
                <span className="hud-corner hud-tr" />
                <span className="hud-corner hud-bl" />
                <span className="hud-corner hud-br" />

                {/* Card Header information */}
                <div>
                  <div className="flex items-center justify-between font-mono text-[9px] text-gray-500 tracking-wider mb-5">
                    <span className="text-cyber-purple font-semibold uppercase">#{project.id.replace("-", "_").toUpperCase()}</span>
                    <span>SERIAL UNIT: 00{index + 1}-VRX</span>
                  </div>

                  <div className="mb-4">
                    <p className="font-mono text-[10px] text-cyber-blue uppercase font-bold tracking-widest mb-1.5">{project.category}</p>
                    <h3 className="font-space text-2xl sm:text-3xl font-medium text-white tracking-tight group-hover:text-cyber-blue transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  {/* High Tech image placeholder block with tech layout mesh */}
                  <div className="relative w-full h-40 mb-6 bg-slate-950/80 rounded-sm border border-white/5 overflow-hidden flex items-center justify-center">
                    <div className={`absolute inset-0 bg-gradient-to-tr ${project.imageFallbackGradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                    <div className="absolute inset-0 cyber-grid opacity-15"></div>
                    
                    {/* Floating HUD Target Crosshair icon */}
                    <Orbit className="w-10 h-10 text-cyber-blue/20 group-hover:text-cyber-blue/60 group-hover:scale-110 transition-all duration-500" />
                    
                    <div className="absolute bottom-2 left-2 flex items-center gap-1.5 bg-cyber-dark/80 px-2 py-1 border border-white/10 rounded font-mono text-[8px] text-gray-400">
                      <Radio className="w-3 h-3 text-cyber-blue animate-pulse" />
                      <span>TELEMETRY FEED CONNECTED</span>
                    </div>
                  </div>

                  <p className="font-sans text-sm text-gray-400 mb-6 leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Stats block listed on card footer */}
                <div className="border-t border-white/5 pt-5 flex items-center justify-between mt-auto">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-left">
                    {project.stats.slice(0, 2).map((stat, sIdx) => (
                      <div key={sIdx} className="truncate max-w-[130px]">
                        <p className="font-mono text-[8px] text-gray-500 uppercase tracking-widest">{stat.name}</p>
                        <p className="font-mono font-semibold text-xs text-cyber-blue">{stat.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* View walkthrough trigger arrow button */}
                  <div className="flex items-center gap-2 text-cyber-blue font-mono text-xs font-bold tracking-widest group-hover:translate-x-1 transition-transform duration-300 uppercase min-h-[44px]">
                    <span>Inspect</span>
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
