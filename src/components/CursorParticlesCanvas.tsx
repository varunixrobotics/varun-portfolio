/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
  shape: "square" | "circle" | "diamond";
  rotation: number;
  rotSpeed: number;
}

const COLORS = ["#00fff9", "#ff00c1", "#6366f1", "#3b82f6", "#a855f7"];

export default function CursorParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const containerElRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Find the parent projects section to track bounds
    const findSection = () => {
      const section = document.getElementById("projects-grid-section");
      containerElRef.current = section;
      return section;
    };

    const syncSize = () => {
      const section = containerElRef.current || findSection();
      if (!section) return;
      const rect = section.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    syncSize();
    const resizeObserver = new ResizeObserver(syncSize);
    const section = findSection();
    if (section) resizeObserver.observe(section);

    // Global mousemove — check if cursor is inside the section bounds
    const onMouseMove = (e: MouseEvent) => {
      const el = containerElRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();

      // Is the mouse inside the projects section?
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        return; // Outside — don't spawn particles
      }

      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      // Spawn 3–5 particles per event
      const count = Math.floor(Math.random() * 3) + 3;
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2 + 0.3;
        const shapes: Particle["shape"][] = ["square", "circle", "diamond"];

        particlesRef.current.push({
          x: mx + (Math.random() - 0.5) * 6,
          y: my + (Math.random() - 0.5) * 6,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.6, // Slight upward drift
          size: Math.random() * 4 + 1.5,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          alpha: 0.9 + Math.random() * 0.1,
          decay: Math.random() * 0.015 + 0.008,
          shape: shapes[Math.floor(Math.random() * shapes.length)],
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.08,
        });
      }
    };

    document.addEventListener("mousemove", onMouseMove);

    // Render loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;
        p.rotation += p.rotSpeed;

        // Gravity-like slow deceleration
        p.vy += 0.005;
        p.vx *= 0.998;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        switch (p.shape) {
          case "square":
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            break;
          case "circle":
            ctx.beginPath();
            ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
            ctx.fill();
            break;
          case "diamond":
            ctx.beginPath();
            ctx.moveTo(0, -p.size);
            ctx.lineTo(p.size * 0.6, 0);
            ctx.lineTo(0, p.size);
            ctx.lineTo(-p.size * 0.6, 0);
            ctx.closePath();
            ctx.fill();
            break;
        }

        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      resizeObserver.disconnect();
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
