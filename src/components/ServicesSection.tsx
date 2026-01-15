import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Bot, Cloud, ArrowUpRight, Monitor } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Cloud,
    title: "SaaS Development",
    description: "Scalable, resilient cloud architectures built for the modern enterprise, designed to transform how businesses operate.",
    color: "from-primary to-secondary",
  },
  {
    icon: Bot,
    title: "Software Automation",
    description: "Intelligent automation solutions that streamline operations, reduce costs, and unlock new levels of efficiency.",
    color: "from-secondary to-accent",
  },
  {
    icon: Monitor,
    title: "Web Development",
    description: "High-performance, responsive web interfaces crafted with precision to deliver immersive user experiences.",
    color: "from-accent to-primary",
  },
];

const ServicesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    if (!ref.current) return;

    const cards = ref.current.querySelectorAll(".service-card");

    cards.forEach((card, index) => {
      // 3D tilt effect on hover
      card.addEventListener("mousemove", (e: any) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        gsap.to(card, {
          rotateX: rotateX,
          rotateY: rotateY,
          transformPerspective: 1000,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: "power2.out"
        });
      });
    });
  }, []);

  return (
    <section id="services" className="relative py-32 overflow-hidden" ref={containerRef}>
      {/* Parallax background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-30"
      >
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-gradient-primary blur-3xl opacity-20" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-gradient-accent blur-3xl opacity-20" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            What We Build
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Solutions that <span className="text-gradient-primary">define tomorrow</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto" style={{ perspective: "1000px" }}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="service-card group relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="glass-card p-8 h-full transition-all duration-500 hover:bg-white/10 relative overflow-hidden">
                {/* Animated gradient border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)))`,
                    padding: "1px",
                    maskImage: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "xor",
                    WebkitMaskComposite: "xor"
                  }}
                />

                {/* Icon with gradient background */}
                <div className="mb-6 relative">
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className="w-7 h-7 text-foreground" />
                  </motion.div>
                  <div className={`absolute inset-0 w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                </div>

                {/* Content */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gradient-primary transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-text-muted leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </motion.div>
                </div>

                {/* Hover spotlight effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
