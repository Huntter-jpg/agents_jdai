"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

function getConfig(mobile: boolean): ISourceOptions {
  return {
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    particles: {
      color: { value: ["#0097ce", "#003764", "#4db5dc"] },
      links: {
        color: "#0097ce",
        distance: mobile ? 120 : 150,
        enable: true,
        opacity: 0.15,
        width: 1,
      },
      move: {
        enable: true,
        speed: mobile ? 0.3 : 0.6,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "bounce" },
      },
      number: {
        value: mobile ? 30 : 80,
        density: {
          enable: true,
          width: mobile ? 800 : 1200,
          height: mobile ? 600 : 800,
        },
      },
      opacity: { value: { min: 0.1, max: 0.4 } },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };
}

export default function ParticleNetwork() {
  const [ready, setReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
    setIsMobile(window.innerWidth < 768);

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setReady(true);
    });
  }, []);

  const config = useMemo(() => getConfig(isMobile), [isMobile]);

  if (reducedMotion || !ready) return null;

  return (
    <Particles
      id="hero-particles"
      options={config}
      className="absolute inset-0 w-full h-full"
    />
  );
}
