import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function EnhancedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Mouse-following Gradient */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-10 blur-[120px]"
        animate={{
          x: `${mousePosition.x}%`,
          y: `${mousePosition.y}%`,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 50,
        }}
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Multiple Glowing Orbs with Different Animations */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-[#3b82f6]/10 blur-[150px]"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "10%", left: "15%" }}
      />

      <motion.div
        className="absolute w-[32rem] h-[32rem] rounded-full bg-[#06b6d4]/10 blur-[150px]"
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 80, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{ bottom: "15%", right: "20%" }}
      />

      <motion.div
        className="absolute w-80 h-80 rounded-full bg-[#0ea5e9]/10 blur-[150px]"
        animate={{
          x: [0, 60, -80, 0],
          y: [0, -60, 80, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        style={{ top: "50%", right: "10%" }}
      />

      {/* Hexagon Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 10 L75 10 L100 50 L75 90 L25 90 L0 50 Z' fill='none' stroke='%233b82f6' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Animated Grid Pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ["0px 0px", "80px 80px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating Geometric Shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute border border-[#3b82f6]/20 rounded-lg"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            rotate: [0, 360],
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Pulsing Circles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full border-2 border-[#06b6d4]/20"
          style={{
            width: 200 + i * 100,
            height: 200 + i * 100,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.3,
          }}
        />
      ))}

      {/* Glitch Effect Overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0, 0, 0, 0.05, 0, 0, 0],
          x: [0, 0, -5, 5, 0, 0, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          times: [0, 0.4, 0.45, 0.5, 0.55, 0.6, 1],
        }}
        style={{
          background: "linear-gradient(90deg, #3b82f6 0%, #06b6d4 50%, #0ea5e9 100%)",
          mixBlendMode: "overlay",
        }}
      />

      {/* Corner Accent Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-[#3b82f6]/30 opacity-50" />
      <div className="absolute top-0 right-0 w-64 h-64 border-r-2 border-t-2 border-[#06b6d4]/30 opacity-50" />
      <div className="absolute bottom-0 left-0 w-64 h-64 border-l-2 border-b-2 border-[#0ea5e9]/30 opacity-50" />
      <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-[#3b82f6]/30 opacity-50" />
    </div>
  );
}