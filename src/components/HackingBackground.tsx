import { useEffect, useRef } from "react";

export function HackingBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Matrix rain effect
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);
    
    // Characters - mix of code symbols, numbers, and binary
    const chars = "01アイウエオカキクケコサシスセソタチツテト</>{}[]();=+-*&|!@#$%^0123456789ABCDEF";

    function draw() {
      if (!ctx || !canvas) return;
      
      // Semi-transparent black to create trail effect
      ctx.fillStyle = "rgba(10, 10, 15, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // Random color
        const colorVariant = Math.random();
        let color;
        if (colorVariant > 0.98) {
          color = "#3b82f6"; // Bright blue accent
        } else if (colorVariant > 0.95) {
          color = "#06b6d4"; // Cyan accent
        } else {
          color = `rgba(59, 130, 246, ${Math.random() * 0.3 + 0.1})`; // Faded blue
        }
        
        ctx.fillStyle = color;
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Reset drop to top randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-20 z-0"
      style={{ background: "transparent" }}
    />
  );
}