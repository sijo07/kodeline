import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const FloatingElements = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll(".floating-element");

    elements.forEach((element, index) => {
      gsap.to(element, {
        y: "random(-30, 30)",
        x: "random(-20, 20)",
        rotation: "random(-15, 15)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2
      });
    });

    // Mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth - 0.5) * 30;
      const yPos = (clientY / innerHeight - 0.5) * 30;

      elements.forEach((element, index) => {
        const depth = (index + 1) * 0.5;
        gsap.to(element, {
          x: xPos * depth,
          y: yPos * depth,
          duration: 1,
          ease: "power2.out"
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large gradient orb - top right */}
      <motion.div
        className="floating-element absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-primary opacity-10 blur-3xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Medium orb - bottom left */}
      <motion.div
        className="floating-element absolute bottom-40 left-10 w-64 h-64 rounded-full bg-gradient-accent opacity-10 blur-3xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
      />

      {/* Small orb - center */}
      <motion.div
        className="floating-element absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 blur-2xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
      />

      {/* Geometric shapes */}
      <motion.div
        className="floating-element absolute top-1/4 right-1/4 w-20 h-20 border border-primary/20 rounded-lg rotate-45"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 45 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      />

      <motion.div
        className="floating-element absolute bottom-1/3 right-1/3 w-16 h-16 border border-secondary/20 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      />

      {/* Gradient line */}
      <motion.div
        className="floating-element absolute top-1/3 left-0 w-64 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 1.2 }}
      />
    </div>
  );
};

export default FloatingElements;
