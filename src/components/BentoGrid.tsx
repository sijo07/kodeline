import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import saasDashboard from "@/assets/saas-dashboard.png";
import modernWeb from "@/assets/modern-web-dev.png";
import automationWorkflow from "@/assets/automation-workflow.png";

gsap.registerPlugin(ScrollTrigger);

const BentoGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".bento-card");

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 100,
          opacity: 0,
          scale: 0.95
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="showcase" className="relative py-32 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Selected Projects
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Engineering in <span className="text-gradient-primary">action</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto"
        >
          {/* Card 1 - Large with silhouette */}
          <div className="bento-card md:col-span-1 lg:row-span-2 group">
            <div className="relative h-full min-h-[400px] lg:min-h-0 rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent z-10" />
              <motion.img
                src={saasDashboard}
                alt="SaaS Dashboard Interface"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <span className="text-xs uppercase tracking-widest text-primary mb-2 block">Case Study</span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  ENTERPRISE SAAS
                </h3>
                <p className="text-sm text-text-subtle">Global Scalability & Security</p>
              </div>
              {/* Animated gradient orb */}
              <motion.div
                className="absolute top-4 right-4 w-16 h-16 rounded-full bg-gradient-primary opacity-80 blur-sm"
                animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.8, 0.6] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </div>

          {/* Card 2 - Purple gradient with text */}
          <div className="bento-card group">
            <div className="h-full min-h-[300px] rounded-3xl overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent p-8 flex flex-col justify-between border border-white/10">
              <div>
                <span className="text-xs uppercase tracking-widest text-white/70 mb-4 block">Project: Nexus</span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  AUTOMATION SUITE
                </h3>
                <h4 className="text-xl font-semibold text-white/90 mt-2">
                  WORKFLOW ENGINE
                </h4>
              </div>
              <p className="text-sm text-white/70 mt-6 leading-relaxed">
                A high-throughput automation core designed to orchestrate complex business logic with millisecond latency.
              </p>
              {/* Logo */}
              <motion.div
                className="mt-6 text-lg font-bold text-foreground"
                whileHover={{ scale: 1.05 }}
              >
                KodeLine
              </motion.div>
            </div>
          </div>

          {/* Card 3 - VR Woman */}
          <div className="bento-card group">
            <div className="relative h-full min-h-[300px] rounded-3xl overflow-hidden bg-background-secondary border border-white/10">
              <motion.img
                src={modernWeb}
                alt="Modern Web Interface"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/80 z-10" />
              {/* Gradient shape overlay */}
              <motion.div
                className="absolute top-1/2 right-0 w-32 h-48 bg-gradient-accent rounded-l-full opacity-60 blur-sm"
                animate={{ x: [0, -10, 0], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              {/* Logo */}
              <div className="absolute top-6 right-6 text-xl font-bold text-foreground z-20">
                WEB
              </div>
              <div className="absolute bottom-6 right-6 text-right z-20">
                <h3 className="text-xl font-bold text-foreground">Next-Gen Web</h3>
                <p className="text-xs text-text-subtle">High-Performance Platforms</p>
              </div>
            </div>
          </div>

          {/* Card 4 - White card with philosophy */}
          <div className="bento-card group">
            <div className="h-full min-h-[300px] rounded-3xl overflow-hidden bg-foreground p-8 flex flex-col justify-between border border-white/10 relative">
              {/* Gradient arc */}
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-tl-full" />

              <div className="relative z-10">
                <span className="text-xs uppercase tracking-widest text-background/70 mb-2 block">Strategy</span>
                <h3 className="text-2xl md:text-3xl font-bold text-background leading-tight">
                  SYSTEM ARCHITECTURE
                </h3>
              </div>
              <div className="relative z-10">
                <p className="text-sm text-background/70 leading-relaxed">
                  Designing robust, cloud-native infrastructures that support mission-critical data loads and ensure 99.99% uptime.
                </p>
                <div className="mt-4 text-lg font-bold text-background/50">
                  KodeLine
                </div>
              </div>
            </div>
          </div>

          {/* Card 5 - AI Sculpture (tall) */}
          <div className="bento-card lg:row-span-2 group">
            <div className="relative h-full min-h-[400px] lg:min-h-0 rounded-3xl overflow-hidden border border-white/10">
              <motion.img
                src={automationWorkflow}
                alt="Automation Workflow Nodes"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
              {/* Gradient accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-accent opacity-50 z-5" />
              {/* Logo */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <span className="text-xs uppercase tracking-widest text-primary mb-2 block">Innovation</span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  R&D LABS
                </h3>
                <p className="text-sm text-text-subtle">Pushing Boundaries</p>
              </div>
            </div>
          </div>

          {/* Card 6 - Purple with logo */}
          <div className="bento-card md:col-span-2 lg:col-span-1 group">
            <div className="h-full min-h-[300px] rounded-3xl overflow-hidden bg-gradient-to-br from-background-secondary to-primary/20 p-8 flex flex-col justify-between border border-white/10 relative">
              {/* Large gradient circle */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative z-10 flex justify-end">
                <span className="text-xs uppercase tracking-widest text-text-subtle">Community</span>
              </div>

              <div className="relative z-10 text-center">
                <motion.div
                  className="text-3xl font-black text-gradient-primary"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  KodeLine
                </motion.div>
                <span className="text-sm font-bold text-foreground mt-2 block">OPEN SOURCE</span>
              </div>

              <div className="relative z-10 text-right">
                <span className="text-xs uppercase tracking-widest text-text-subtle block">CONTRIBUTING</span>
                <span className="text-xs text-text-subtle block mt-1">To The Future</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BentoGrid;
