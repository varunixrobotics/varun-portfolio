/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import ProjectDetailOverlay from "./components/ProjectDetailOverlay";
import Footer from "./components/Footer";
import CyberCursor from "./components/CyberCursor";
import { Project } from "./types";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleEnterExperienceScroll = () => {
    // Smooth scroll down to projects section
    const element = document.getElementById("projects-grid-section");
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  };

  return (
    <div id="application-container-root" className="min-h-screen bg-cyber-dark text-white font-sans overflow-x-hidden selection:bg-cyber-blue selection:text-cyber-dark relative mesh-gradient">
      {/* Immersive Background Carbon Texture overlay */}
      <div className="fixed inset-0 z-0 carbon-fibre opacity-10 pointer-events-none"></div>
      
      {/* Consistent continuous subtle screen-space scanline */}
      <div className="fixed inset-0 z-10 pointer-events-none cyber-scanlines opacity-20"></div>
      <div className="scanline-immersive"></div>
      
      <div className="relative z-10 flex flex-col w-full h-full">
        {/* 1. Full screen Cybernetic Hero Segment */}
        <Hero onEnter={handleEnterExperienceScroll} />

        {/* 2. Interactive Bento Projects grid */}
        <ProjectGrid onSelectProject={(project) => setSelectedProject(project)} />

        {/* 3. Futuristic Credit Deck Footer */}
        <Footer />
      </div>

      {/* 4. Full screen separate page overlay walkthrough */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailOverlay
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      {/* 5. Global cyberpunk custom cursor (highest z-index) */}
      <CyberCursor />
    </div>
  );
}

