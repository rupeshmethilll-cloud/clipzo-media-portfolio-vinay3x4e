"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isPlayHover, setIsPlayHover] = useState(false);
  const [isDragHover, setIsDragHover] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    // Disable custom cursor on touch/mobile devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) {
      return;
    }

    setIsHidden(false);

    const outer = outerRef.current;
    const inner = innerRef.current;

    if (!outer || !inner) return;

    // quickTo updates x and y positions instantly but smoothly
    const xToOuter = gsap.quickTo(outer, "x", { duration: 0.35, ease: "power3.out" });
    const yToOuter = gsap.quickTo(outer, "y", { duration: 0.35, ease: "power3.out" });

    const xToInner = gsap.quickTo(inner, "x", { duration: 0.08, ease: "power1.out" });
    const yToInner = gsap.quickTo(inner, "y", { duration: 0.08, ease: "power1.out" });

    // Set initial opacity to zero to prevent flash of cursor on top-left of page
    gsap.set([outer, inner], { opacity: 0 });

    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half of cursor size
      // Outer is w-8 (32px), inner is w-1.5 (6px)
      xToOuter(e.clientX - 16);
      yToOuter(e.clientY - 16);

      xToInner(e.clientX - 3);
      yToInner(e.clientY - 3);

      // Make visible once mouse starts moving
      gsap.to([outer, inner], { opacity: 1, duration: 0.15 });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Detect hover on links, buttons, or custom data-cursor elements
      const interactiveEl = target.closest("a, button, [data-cursor], .cursor-pointer");

      if (interactiveEl) {
        setIsHovered(true);
        const cursorType = interactiveEl.getAttribute("data-cursor");

        if (cursorType === "play") {
          setIsPlayHover(true);
          setCursorText("PLAY");
        } else if (cursorType === "drag") {
          setIsDragHover(true);
          setCursorText("DRAG");
        } else {
          setCursorText("");
        }
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const interactiveEl = target.closest("a, button, [data-cursor], .cursor-pointer");
      if (interactiveEl) {
        setIsHovered(false);
        setIsPlayHover(false);
        setIsDragHover(false);
        setCursorText("");
      }
    };

    const handleMouseLeave = () => {
      gsap.to([outer, inner], { opacity: 0, duration: 0.2 });
    };

    const handleMouseEnter = () => {
      gsap.to([outer, inner], { opacity: 1, duration: 0.2 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (isHidden) return null;

  return (
    <>
      {/* Outer Follower Circle */}
      <div
        ref={outerRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[99999] flex items-center justify-center text-[10px] font-bold tracking-widest transition-all duration-300 ease-out border ${
          isPlayHover
            ? "w-20 h-20 bg-accent-cyan border-accent-cyan text-primary shadow-[0_0_30px_rgba(34,211,238,0.5)]"
            : isDragHover
            ? "w-20 h-20 bg-accent-purple border-accent-purple text-textWhite shadow-[0_0_30px_rgba(139,92,246,0.5)]"
            : isHovered
            ? "w-14 h-14 bg-white/10 border-white"
            : "w-8 h-8 bg-transparent border-accent-cyan/40"
        }`}
      >
        <span className="pointer-events-none select-none font-display">
          {cursorText}
        </span>
      </div>

      {/* Inner Pinpoint Dot */}
      <div
        ref={innerRef}
        className={`fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[100000] bg-accent-purple transition-transform duration-200 ${
          isHovered ? "scale-0" : "scale-100"
        }`}
      />
    </>
  );
}
