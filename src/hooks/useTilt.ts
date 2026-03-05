"use client";

import { useRef, useCallback, useEffect, useState } from "react";

interface TiltOptions {
  maxTilt?: number;
  perspective?: number;
  scale?: number;
  speed?: number;
  glare?: boolean;
  maxGlare?: number;
}

export function useTilt<T extends HTMLElement>(options: TiltOptions = {}) {
  const {
    maxTilt = 8,
    perspective = 1000,
    scale = 1.02,
    speed = 400,
    glare = true,
    maxGlare = 0.15,
  } = options;

  const ref = useRef<T>(null);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const touchDevice = window.matchMedia("(pointer: coarse)").matches;
    setDisabled(reducedMotion || touchDevice);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<T>) => {
      if (disabled || !ref.current) return;
      const el = ref.current;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      el.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;

      if (glare) {
        const glareEl = el.querySelector(
          "[data-tilt-glare]"
        ) as HTMLElement | null;
        if (glareEl) {
          const angle =
            Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) + 90;
          const intensity =
            Math.min(
              Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2) /
                Math.sqrt(centerX ** 2 + centerY ** 2),
              1
            ) * maxGlare;
          glareEl.style.background = `linear-gradient(${angle}deg, rgba(255,255,255,${intensity}) 0%, transparent 80%)`;
        }
      }
    },
    [maxTilt, perspective, scale, glare, maxGlare, disabled]
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    if (glare) {
      const glareEl = ref.current.querySelector(
        "[data-tilt-glare]"
      ) as HTMLElement | null;
      if (glareEl) glareEl.style.background = "transparent";
    }
  }, [perspective, glare]);

  return {
    ref,
    handlers: disabled
      ? {}
      : {
          onMouseMove: handleMouseMove,
          onMouseLeave: handleMouseLeave,
        },
    style: {
      transition: `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`,
      transformStyle: "preserve-3d" as const,
      willChange: "transform" as const,
    },
  };
}
