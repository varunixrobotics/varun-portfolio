/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Volume2, VolumeX, ArrowDown, ShieldAlert } from "lucide-react";
import ParticlesCanvas from "./ParticlesCanvas";

interface HeroProps {
  onEnter: () => void;
}

export default function Hero({ onEnter }: HeroProps) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [showEnterButton, setShowEnterButton] = useState(true);
  const [logoLoaded, setLogoLoaded] = useState(true);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Shared helper: ramp up audio volume smoothly to avoid a loud pop
  const startAudio = () => {
    if (!audioRef.current || isPlayingAudio) return;
    audioRef.current.volume = 0;
    audioRef.current.play()
      .then(() => {
        setIsPlayingAudio(true);
        setAudioError(false);
        let vol = 0;
        const ramp = setInterval(() => {
          if (vol < 0.65 && audioRef.current) {
            vol += 0.05;
            audioRef.current.volume = Math.min(vol, 0.65);
          } else {
            clearInterval(ramp);
          }
        }, 50);
      })
      .catch(() => {
        // Will be triggered by first interaction listener instead
      });
  };

  // Auto-start video + music on mount
  useEffect(() => {
    // 1. Start video (muted — always allowed by browsers)
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn("Video autoplay blocked:", err);
      });
    }

    // 2. Try to autoplay music immediately
    if (audioRef.current) {
      audioRef.current.volume = 0;
      audioRef.current.play()
        .then(() => {
          setIsPlayingAudio(true);
          setAudioError(false);
          let vol = 0;
          const ramp = setInterval(() => {
            if (vol < 0.65 && audioRef.current) {
              vol += 0.05;
              audioRef.current.volume = Math.min(vol, 0.65);
            } else {
              clearInterval(ramp);
            }
          }, 50);
        })
        .catch(() => {
          // Browser blocked autoplay — start on very first user interaction
          const startOnFirstInteraction = () => {
            startAudio();
            document.removeEventListener('mousedown', startOnFirstInteraction);
            document.removeEventListener('touchstart', startOnFirstInteraction);
            document.removeEventListener('keydown', startOnFirstInteraction);
          };
          document.addEventListener('mousedown', startOnFirstInteraction, { once: true });
          document.addEventListener('touchstart', startOnFirstInteraction, { once: true });
          document.addEventListener('keydown', startOnFirstInteraction, { once: true });
        });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEnterExperience = () => {
    setShowEnterButton(false);
    // Music already playing or will start on interaction — just scroll
    onEnter();
  };

  const toggleAudioMute = (e: MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;

    if (isPlayingAudio) {
      audioRef.current.pause();
      setIsPlayingAudio(false);
    } else {
      startAudio();
    }
  };

  return (
    <div 
      id="hero-header-section" 
      className="relative w-full h-[100vh] min-h-[500px] flex flex-col items-center justify-center overflow-hidden bg-[#05040a] select-none"
    >
      {/* Background Video Stream */}
      <video
        ref={videoRef}
        src="upscaled-video.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-45 pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Cybernetic Grid/HUD Overlays for atmospheric coloring */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#080710]/20 via-[#0d0c1c]/40 to-[#080710] pointer-events-none"></div>
      <div className="absolute inset-0 z-0 cyber-grid opacity-15 mix-blend-color-dodge pointer-events-none"></div>
      
      {/* Animated Static Scanline Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-cyber-blue/25 opacity-40 shadow-cyan-500 shadow-md animate-scanline pointer-events-none z-1"></div>

      {/* HTML5 Particle Canvas Behind Logo */}
      <ParticlesCanvas />

      {/* Audio Engine Backing Track (Seamless loop) */}
      <audio
        ref={audioRef}
        src="web music.mp3"
        loop
        preload="auto"
      />

      {/* Main HUD Presentation Panel */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full max-w-4xl text-center">
        
        {/* Top telemetry lines */}
        <div className="flex items-center gap-2 mb-8 font-mono text-xs tracking-[0.25em] text-cyber-blue opacity-85 select-none uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue inline-block animate-ping"></span>
          <span>VARUNIX COMMAND MODULE ONLINE</span>
        </div>

        {/* Glitch Animated Logo Package */}
        <div className="relative mb-10 w-full max-w-[620px] aspect-[2.2/1] glitch-logo-container">
          {logoLoaded ? (
            <div className="relative w-full h-full glitch-logo-wrapper">
              <img
                src="log.png"
                alt="VARUNIX ROBOTICS LOGO"
                onError={() => {
                  // If log.png is missing or fails, swap to glowing vector fallback
                  setLogoLoaded(false);
                }}
                className="w-full h-full object-contain glitch-logo-base select-none"
                draggable="false"
              />
              {logoLoaded && (
                <>
                  <img
                    src="log.png"
                    alt=""
                    className="w-full h-full object-contain glitch-logo-layer glitch-logo-cyan select-none absolute inset-0 pointer-events-none"
                    draggable="false"
                  />
                  <img
                    src="log.png"
                    alt=""
                    className="w-full h-full object-contain glitch-logo-layer glitch-logo-magenta select-none absolute inset-0 pointer-events-none"
                    draggable="false"
                  />
                </>
              )}
            </div>
          ) : (
            /* Premium glowing responsive SVG fallback if 'log.png' isn't in root */
            <div className="w-full h-full flex flex-col items-center justify-center p-4 border border-cyber-blue/25 bg-cyber-slate/60 backdrop-blur-md glow-blue rounded-sm select-none">
              <span className="hud-corner hud-tl" />
              <span className="hud-corner hud-tr" />
              <span className="hud-corner hud-bl" />
              <span className="hud-corner hud-br" />
              
              <div className="flex items-center gap-12 max-sm:gap-4 justify-center w-full">
                {/* Simulated twin robotic controllers */}
                <div className="w-10 h-10 border border-cyber-blue/40 rounded-full flex items-center justify-center animate-pulse-slow">
                  <div className="w-6 h-6 border-2 border-dotted border-cyber-blue rounded-full"></div>
                </div>
                
                <div className="text-center font-space">
                  <h1 className="text-4xl sm:text-6xl font-black italic tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-white to-cyber-purple drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                    VARUNIX
                  </h1>
                  <h2 className="text-xs sm:text-sm font-mono tracking-[0.45em] text-cyber-purple font-bold mt-1">
                    R O B O T I C S
                  </h2>
                </div>

                <div className="w-10 h-10 border border-cyber-purple/40 rounded-full flex items-center justify-center animate-pulse-slow">
                  <div className="w-6 h-6 border-2 border-dotted border-cyber-purple rounded-full"></div>
                </div>
              </div>
              
              <p className="font-mono text-[9px] text-gray-500 tracking-widest mt-4 uppercase">
                TECHNOLOGY × INTELLIGENCE // CREATING THE FUTURE
              </p>
            </div>
          )}
        </div>

        {/* Dynamic description of robotic studio */}
        <p className="max-w-lg mb-10 font-sans text-gray-400 text-sm sm:text-base leading-relaxed tracking-wide select-none max-xs:hidden">
          Forging the boundary between biological perception and carbon actuation. Explore our index of high-precision autonomous defense, humanoid, and medical platforms.
        </p>

        {/* Action Button Segment */}
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          {showEnterButton ? (
            <button
              id="enter-experience-btn"
              onClick={handleEnterExperience}
              className="group relative px-10 py-4 overflow-hidden border border-cyber-blue/50 rounded-sm bg-cyber-blue/10 hover:bg-cyber-blue/20 text-white font-space font-medium text-base sm:text-lg tracking-[0.15em] uppercase transition-all duration-300 transform active:scale-95 glow-blue touch-manipulation min-h-[44px] cursor-pointer"
            >
              {/* Button inner high tech border effect */}
              <span className="absolute inset-0 w-full h-full pointer-events-none border-b-2 border-b-cyber-blue/80 translate-y-1 transform group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center justify-center gap-3">
                <span>Enter Experience</span>
                <ArrowDown className="w-5 h-5 text-cyber-blue animate-bounce" />
              </span>
            </button>
          ) : (
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="font-mono text-xs text-cyber-blue animate-pulse">
                SCROLLING TO PORTFOLIO GRID...
              </span>
              <button
                onClick={() => {
                  const el = document.getElementById("projects-grid-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="p-3 border border-white/5 bg-white/5 rounded-full hover:bg-white/10 text-white transition-all min-h-[44px]"
              >
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>
            </div>
          )}

          {/* Interactive audio/mute telemetry control widget */}
          <div className="flex items-center gap-4 mt-6">
            <button
              id="audio-mute-toggle-btn"
              onClick={toggleAudioMute}
              className={`flex items-center gap-2.5 px-3.5 py-2 border rounded-full font-mono text-[9px] tracking-widest uppercase transition-all duration-300 pointer-events-auto touch-manipulation min-h-[44px] min-w-[120px] justify-center ${
                isPlayingAudio
                  ? "border-cyber-blue/30 bg-cyber-blue/10 text-cyber-blue hover:bg-cyber-blue/20"
                  : "border-white/10 bg-white/2 text-gray-500 hover:bg-white/5"
              }`}
            >
              {isPlayingAudio ? (
                <>
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>MUSIC ON // LOOP</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span>MUSIC MUTED</span>
                </>
              )}
            </button>

            {/* Audio equalizing wave bars when playing */}
            <div className="flex items-end gap-[3px] h-6 w-14 overflow-hidden select-none">
              {isPlayingAudio ? (
                <>
                  <div className="audio-bar" />
                  <div className="audio-bar" />
                  <div className="audio-bar" />
                  <div className="audio-bar" />
                  <div className="audio-bar" />
                  <div className="audio-bar" />
                </>
              ) : (
                <div className="text-[8px] font-mono text-gray-600 tracking-tighter uppercase self-center leading-none">
                  OFF
                </div>
              )}
            </div>
          </div>

          {/* Fallback indicator if browser locks audio entirely */}
          {audioError && (
            <div className="flex items-center gap-2 bg-[#ff0055]/10 border border-[#ff0055]/30 px-3 py-1.5 rounded-sm font-mono text-[9px] text-[#ff0055] mt-2 animate-pulse">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>TAP MUSIC TO ACTIVATE BROWSER DRIVER</span>
            </div>
          )}
        </div>

      </div>

      {/* Decorative Outer Side Borders (Sci-Fi Layout Frame) */}
      <div className="absolute top-4 left-4 font-mono text-[9px] text-gray-600 mix-blend-screen max-sm:hidden">
        <span>V_09 [PORTFOLIO INDEX]</span>
      </div>
      <div className="absolute top-4 right-4 font-mono text-[9px] text-gray-600 mix-blend-screen max-sm:hidden text-right">
        <span>REF_VARUNIX_2026</span>
      </div>
      <div className="absolute bottom-4 left-4 flex gap-4 max-sm:hidden select-none z-10 z-index font-mono text-[9px] text-gray-600">
        <span>GRID: 25.40N / 121.56E</span>
        <span>LATENCY: 12ms</span>
      </div>
    </div>
  );
}
