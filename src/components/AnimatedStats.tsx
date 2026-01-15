import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CounterProps {
  from: number;
  to: number;
  suffix?: string;
  duration?: number;
}

const Counter = ({ from, to, suffix = "", duration = 2 }: CounterProps) => {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration,
        onUpdate: (value) => setCount(Math.round(value)),
        ease: "easeOut"
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const stats = [
  { value: 100, suffix: "%", label: "Scalable Architecture" },
  { value: 99, suffix: ".9%", label: "Reliability" },
  { value: 10, suffix: "x", label: "Performance Gain" },
  { value: 24, suffix: "/7", label: "Active Monitoring" },
];

const AnimatedStats = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!containerRef.current) return;

    const statItems = containerRef.current.querySelectorAll(".stat-item");

    statItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top bottom-=50"
          }
        }
      );
    });
  }, []);

  return (
    <section className="relative py-24 overflow-hidden" ref={containerRef}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5" />

      {/* Animated line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        animate={{ scaleX: [0, 1, 0], x: ["-100%", "0%", "100%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-sm uppercase tracking-widest text-primary mb-2">BUILT FOR GROWTH</h3>
          <p className="text-text-muted">Engineering foundations for your digital breakthrough</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="stat-item text-center group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

                <div className="text-4xl md:text-5xl lg:text-6xl font-black text-gradient-primary mb-2">
                  <Counter from={0} to={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-text-muted">{stat.label}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated line bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent"
        animate={{ scaleX: [0, 1, 0], x: ["100%", "0%", "-100%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </section>
  );
};

export default AnimatedStats;
