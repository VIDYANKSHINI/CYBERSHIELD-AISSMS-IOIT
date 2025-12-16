import { motion } from "motion/react";

export function FloatingParticles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 25 + 15,
    delay: Math.random() * 8,
  }));

  const codeSnippets = [
    "0x1A2B", "#!/bin", "sudo", "ssh", "firewall", "encrypt", 
    "hash", "0101", "cypher", "auth", "token", "secure"
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Enhanced Particles with glow */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full shadow-lg"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
            background: particle.id % 3 === 0 
              ? "radial-gradient(circle, rgba(59, 130, 246, 0.6), rgba(59, 130, 246, 0.1))"
              : particle.id % 3 === 1
              ? "radial-gradient(circle, rgba(6, 182, 212, 0.6), rgba(6, 182, 212, 0.1))"
              : "radial-gradient(circle, rgba(14, 165, 233, 0.6), rgba(14, 165, 233, 0.1))",
            boxShadow: particle.id % 3 === 0
              ? "0 0 20px rgba(59, 130, 246, 0.4)"
              : particle.id % 3 === 1
              ? "0 0 20px rgba(6, 182, 212, 0.4)"
              : "0 0 20px rgba(14, 165, 233, 0.4)",
          }}
          animate={{
            x: [0, Math.random() * 200 - 100, Math.random() * 150 - 75, 0],
            y: [0, Math.random() * 200 - 100, Math.random() * 150 - 75, 0],
            opacity: [0.3, 0.8, 0.4, 0.3],
            scale: [1, 1.5, 0.8, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Floating Code Snippets */}
      {codeSnippets.map((snippet, i) => (
        <motion.div
          key={`code-${i}`}
          className="absolute font-mono text-xs font-semibold"
          style={{
            left: `${(Math.random() * 80 + 10)}%`,
            top: `${(Math.random() * 80 + 10)}%`,
            color: i % 3 === 0 ? "rgba(59, 130, 246, 0.15)" : i % 3 === 1 ? "rgba(6, 182, 212, 0.15)" : "rgba(14, 165, 233, 0.15)",
            textShadow: i % 3 === 0 
              ? "0 0 10px rgba(59, 130, 246, 0.3)" 
              : i % 3 === 1 
              ? "0 0 10px rgba(6, 182, 212, 0.3)" 
              : "0 0 10px rgba(14, 165, 233, 0.3)",
          }}
          animate={{
            y: [0, -150, 0],
            opacity: [0.1, 0.4, 0.1],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        >
          {snippet}
        </motion.div>
      ))}
    </div>
  );
}