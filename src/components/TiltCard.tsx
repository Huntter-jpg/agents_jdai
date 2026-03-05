"use client";

import { useTilt } from "@/hooks/useTilt";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const { ref, handlers, style } = useTilt<HTMLDivElement>({
    maxTilt: 8,
    perspective: 1000,
    scale: 1.02,
    speed: 400,
    glare: true,
    maxGlare: 0.12,
  });

  return (
    <div ref={ref} style={style} className={className} {...handlers}>
      {children}
      <div
        data-tilt-glare
        className="absolute inset-0 rounded-[16px] pointer-events-none"
        style={{ background: "transparent" }}
      />
    </div>
  );
}
