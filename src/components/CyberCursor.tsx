/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from "react";

export default function CyberCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -200, y: -200 });
  const ring = useRef({ x: -200, y: -200 });
  const raf = useRef<number>(0);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const isInteractive = !!el.closest(
        'button, a, input, textarea, [role="button"], [tabindex="0"], label'
      );
      setHovering(isInteractive);
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    // RAF loop — inner dot snaps, outer ring lerps with lag
    const animate = () => {
      const lerp = 0.1;
      ring.current.x += (mouse.current.x - ring.current.x) * lerp;
      ring.current.y += (mouse.current.y - ring.current.y) * lerp;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`;
      }

      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Precision inner dot */}
      <div
        ref={dotRef}
        id="cyber-cursor-dot"
        className={[
          "cyber-cursor-dot",
          hovering ? "hovering" : "",
          clicking ? "clicking" : "",
          visible ? "visible" : "",
        ].join(" ")}
      />

      {/* Outer targeting ring with crosshair ticks */}
      <div
        ref={ringRef}
        id="cyber-cursor-ring"
        className={[
          "cyber-cursor-ring",
          hovering ? "hovering" : "",
          clicking ? "clicking" : "",
          visible ? "visible" : "",
        ].join(" ")}
      >
        {/* N / S / E / W tick marks */}
        <span className="ring-tick tick-n" />
        <span className="ring-tick tick-s" />
        <span className="ring-tick tick-e" />
        <span className="ring-tick tick-w" />
      </div>
    </>
  );
}
