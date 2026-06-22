/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Cpu, Terminal, Shield, ArrowUp, Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    const el = document.getElementById("hero-header-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer 
      id="portfolio-footer-section" 
      className="relative bg-transparent border-t border-white/5 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Decorative cyber grid in footer background */}
      <div className="absolute inset-0 cyber-grid opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Segment: Brand logo text and scroll back button */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 pb-8 border-b border-white/5 gap-6">
          <div className="flex items-center gap-3">
            <Cpu className="w-5 h-5 text-cyber-blue animate-pulse-slow" />
            <div className="font-space">
              <span className="font-bold tracking-wider text-white text-lg">VARUNIX</span>
              <span className="font-mono text-xs text-cyber-purple ml-2 tracking-widest font-bold">ROBOTICS</span>
            </div>
          </div>
          
          {/* Scroll to Top Action Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 border border-cyber-blue/30 bg-cyber-blue/5 hover:bg-cyber-blue/15 text-cyber-blue px-4 py-2 font-mono text-[10px] tracking-widest uppercase rounded-sm transition-all duration-300 pointer-events-auto touch-manipulation min-h-[44px] hover:glow-blue active:scale-95"
            aria-label="Scroll back to top"
          >
            <span>Back to Summit</span>
            <ArrowUp className="w-4 h-4 animate-bounce" />
          </button>
        </div>

        {/* Center Grid: Navigation links, Telemetry stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Left Block: Brief and Socials */}
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">01 // BRAND CORE</h4>
            <p className="font-sans text-xs text-gray-400 leading-relaxed">
              Engineering advanced cybernetics and micro-actuators for harsh, extreme, and orbital operations. Custom systems engineered on demand.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="mailto:varunix.robotics@gmail.com" 
                className="p-2 border border-white/10 rounded hover:border-cyber-blue hover:text-cyber-blue text-gray-400 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
                aria-label="Email Contact"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="p-2 border border-white/10 rounded hover:border-cyber-blue hover:text-cyber-blue text-gray-400 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com/varunixrobotics" 
                className="p-2 border border-white/10 rounded hover:border-cyber-blue hover:text-cyber-blue text-gray-400 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Block 2: Location and Coordinates */}
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">02 // HQ LOCATIONS</h4>
            <div className="font-mono text-xs text-gray-400 space-y-2.5">
              <div>
                <p className="text-white font-medium">NEO-TAIPEI ASSEMBLY R&D</p>
                <p className="text-[10px] text-gray-500">25.0340N, 121.5645E</p>
              </div>
              <div>
                <p className="text-white font-medium">TOKYO SUBSIDIARY LAB</p>
                <p className="text-[10px] text-gray-500">35.6762N, 139.6503E</p>
              </div>
            </div>
          </div>

          {/* Block 3: Engineering Stats */}
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">03 // SERVICE REGISTRY</h4>
            <div className="font-mono text-xs text-gray-400 space-y-2">
              <p className="hover:text-cyber-blue transition-colors cursor-pointer">• JOINT-ACTUATION SYSTEMS</p>
              <p className="hover:text-cyber-blue transition-colors cursor-pointer">• SLAM autonomous NAVDRIVE</p>
              <p className="hover:text-cyber-blue transition-colors cursor-pointer">• NEURAL BIO-FEEDBACK API</p>
              <p className="hover:text-cyber-blue transition-colors cursor-pointer">• HARSH-ENVIRO COATING</p>
            </div>
          </div>

          {/* Block 4: System Logs */}
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">04 // DIAGNOSTICS</h4>
            <div className="bg-white/2 border border-white/5 p-3 rounded-sm font-mono text-[9px] text-gray-500 space-y-1">
              <div className="flex justify-between">
                <span>PORT_3000:</span>
                <span className="text-cyber-blue font-bold">ONLINE</span>
              </div>
              <div className="flex justify-between">
                <span>NODE_SERVER:</span>
                <span className="text-cyber-purple font-bold">STANDBY</span>
              </div>
              <div className="flex justify-between">
                <span>SSL_CERT:</span>
                <span className="text-cyber-blue">SECURE</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/5 pt-8 text-center sm:text-left gap-4">
          <div className="font-mono text-[9px] text-gray-600">
            <span>© {new Date().getFullYear()} VARUNIX ROBOTICS CO. ALL RIGHT RESERVED TO CARBON-SILICON DIVISION.</span>
          </div>
          <div className="flex items-center gap-3 font-mono text-[8px] text-gray-600">
            <Shield className="w-3.5 h-3.5 text-cyber-purple" />
            <span>ENCRYPTED SECURE SSL // DATA TRANSMISSION PROTOCOL INSECURE IN IFRAME</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
