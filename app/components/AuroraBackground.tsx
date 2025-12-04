"use client";

import { motion } from "framer-motion";

const AuroraBackground = () => {
  // Configuração dos 3 blobs com gradientes radiais e animações orgânicas
  const blobs = [
    {
      id: 1,
      gradient: "radial-gradient(circle, rgba(230, 200, 202, 0.6) 0%, rgba(230, 200, 202, 0.2) 50%, transparent 100%)",
      initialX: "15%",
      initialY: "25%",
      size: "800px",
      animation: {
        x: ["0%", "12%", "-8%", "6%", "0%"],
        y: ["0%", "-18%", "15%", "-12%", "0%"],
        scale: [1, 1.15, 0.9, 1.08, 1],
      },
      duration: 20,
    },
    {
      id: 2,
      gradient: "radial-gradient(circle, rgba(207, 176, 150, 0.5) 0%, rgba(207, 176, 150, 0.15) 50%, transparent 100%)",
      initialX: "75%",
      initialY: "65%",
      size: "900px",
      animation: {
        x: ["0%", "-10%", "14%", "-7%", "0%"],
        y: ["0%", "20%", "-15%", "10%", "0%"],
        scale: [1, 0.88, 1.2, 0.95, 1],
      },
      duration: 25,
    },
    {
      id: 3,
      gradient: "radial-gradient(circle, rgba(224, 214, 235, 0.55) 0%, rgba(224, 214, 235, 0.18) 50%, transparent 100%)",
      initialX: "45%",
      initialY: "75%",
      size: "850px",
      animation: {
        x: ["0%", "9%", "-12%", "7%", "0%"],
        y: ["0%", "-22%", "18%", "-9%", "0%"],
        scale: [1, 1.1, 0.85, 1.05, 1],
      },
      duration: 18,
    },
  ];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-background max-w-full">
      {/* Blobs com gradientes radiais e blur extremo */}
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className="absolute rounded-full opacity-30 blur-[120px]"
          style={{
            width: blob.size,
            height: blob.size,
            background: blob.gradient,
            left: blob.initialX,
            top: blob.initialY,
            transform: "translate(-50%, -50%)",
          }}
          animate={blob.animation}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Camada de grain/textura sutil */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />
    </div>
  );
};

export default AuroraBackground;

