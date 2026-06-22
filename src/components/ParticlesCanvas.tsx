/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from "react";

interface ParticleTriangle {
  x: number;
  y: number;
  size: number;
  speed: number;
  angle: number;
  spin: number;
  color: string;
  alpha: number;
}

interface ParticleDot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
}

export default function ParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const triangles: ParticleTriangle[] = [];
    const dots: ParticleDot[] = [];
    
    // Configs
    const triangleCount = 18;
    const dotCount = 60;
    const maxLinkDistance = 150;

    const colors = ["#00f0ff", "#bd00ff", "#ff007f"];

    // Initialize Triangles
    for (let i = 0; i < triangleCount; i++) {
      triangles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 25 + 15,
        speed: Math.random() * 0.4 + 0.1,
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.015,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.4 + 0.15,
      });
    }

    // Initialize Dots
    for (let i = 0; i < dotCount; i++) {
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    const drawTrianglePath = (
      context: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      angle: number
    ) => {
      context.beginPath();
      for (let i = 0; i < 3; i++) {
        const theta = angle + (i * Math.PI * 2) / 3;
        const tx = x + Math.cos(theta) * size;
        const ty = y + Math.sin(theta) * size;
        if (i === 0) {
          context.moveTo(tx, ty);
        } else {
          context.lineTo(tx, ty);
        }
      }
      context.closePath();
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;

      // Draw and Update Dots (connecting lines background mesh)
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        // Motion drift
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Screen wrap
        if (dot.x < 0) dot.x = width;
        if (dot.x > width) dot.x = 0;
        if (dot.y < 0) dot.y = height;
        if (dot.y > height) dot.y = 0;

        // Mouse push
        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          const pushX = (dx / dist) * force * 1.5;
          const pushY = (dy / dist) * force * 1.5;
          dot.x += pushX;
          dot.y += pushY;
        }

        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.globalAlpha = dot.alpha;
        ctx.shadowBlur = 8;
        ctx.shadowColor = dot.color;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
        ctx.globalAlpha = 1.0;

        // Connections
        for (let j = i + 1; j < dots.length; j++) {
          const secondDot = dots[j];
          const conDx = dot.x - secondDot.x;
          const conDy = dot.y - secondDot.y;
          const conDist = Math.sqrt(conDx * conDx + conDy * conDy);

          if (conDist < maxLinkDistance) {
            const linkAlpha = (1 - conDist / maxLinkDistance) * 0.12;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(secondDot.x, secondDot.y);
            ctx.strokeStyle = dot.color;
            ctx.globalAlpha = linkAlpha;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.globalAlpha = 1.0;
          }
        }
      }

      // Draw and Update Triangles
      for (let i = 0; i < triangles.length; i++) {
        const t = triangles[i];

        // Drift vertical/horizontal based on angle
        t.y -= t.speed;
        t.angle += t.spin;

        // Wrap around top/bottom
        if (t.y < -t.size * 2) {
          t.y = height + t.size * 2;
          t.x = Math.random() * width;
        }

        // Mouse response
        const dx = t.x - mouse.x;
        const dy = t.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          const force = (180 - dist) / 180;
          // push slightly away
          t.x += (dx / dist) * force * 1.2;
          t.y += (dy / dist) * force * 1.2;
        }

        // Draw floating neon triangles
        ctx.save();
        ctx.strokeStyle = t.color;
        ctx.lineWidth = 1.5;
        ctx.globalAlpha = t.alpha;
        ctx.shadowBlur = 15;
        ctx.shadowColor = t.color;

        // Neon outline triangle
        drawTrianglePath(ctx, t.x, t.y, t.size, t.angle);
        ctx.stroke();
        
        // Solid accent inside
        ctx.beginPath();
        drawTrianglePath(ctx, t.x, t.y, t.size * 0.3, t.angle + Math.PI);
        ctx.fillStyle = t.color;
        ctx.globalAlpha = t.alpha * 0.25;
        ctx.fill();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      id="particles-overlay-canvas"
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-1"
    />
  );
}
