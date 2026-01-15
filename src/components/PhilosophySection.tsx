import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GradientOrb from "./GradientOrb";

gsap.registerPlugin(ScrollTrigger);

const PhilosophySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!textRef.current) return;

    const words = textRef.current.querySelectorAll(".word");

    words.forEach((word, index) => {
      gsap.fromTo(
        word,
        {
          opacity: 0,
          y: 50,
          rotateX: -90
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: word,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          },
          delay: index * 0.1
        }
      );
    });
  }, []);

  return (
    <section id="philosophy" className="relative py-48 overflow-hidden noise-overlay" ref={ref}>
      {/* Background Elements */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)"
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated rings */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/20"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ rotate: { duration: 40, repeat: Infinity, ease: "linear" }, scale: { duration: 6, repeat: Infinity } }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-secondary/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-center max-w-6xl mx-auto"
        >
          <motion.span
            className="text-primary font-medium text-sm uppercase tracking-wider mb-8 block"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Our Philosophy
          </motion.span>

          <h2
            ref={textRef}
            className="editorial-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none mb-12"
            style={{ perspective: "1000px" }}
          >
            <span className="word inline-block text-gradient-primary">CODE</span>{" "}
            <span className="word inline-block text-gradient-primary">THAT</span>{" "}
            <span className="word inline-block text-gradient-primary">SCALES.</span>
            <br />
            <span className="word inline-block text-foreground">SYSTEMS</span>{" "}
            <span className="word inline-block text-foreground">THAT</span>{" "}
            <span className="word inline-block text-foreground">ENDURE.</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-text-muted text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            We believe in the elegance of clean architecture and the power of optimized logic.
            Our systems are engineered for high-availability, low-latency performance
            that stands the test of time in an evolving digital landscape.
          </motion.p>

          {/* Decorative elements */}
          <motion.div
            className="flex justify-center gap-4 mt-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              className="w-16 h-1 rounded-full bg-gradient-primary"
              animate={{ scaleX: [0, 1, 0], x: [0, 0, 100] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="w-4 h-1 rounded-full bg-secondary"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="w-16 h-1 rounded-full bg-gradient-accent"
              animate={{ scaleX: [0, 1, 0], x: [0, 0, -100] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
