import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ParallaxSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  const features = [
    {
      title: "Intelligent Automation",
      description: "AI systems that learn, adapt, and evolve with your business needs",
      gradient: "from-primary to-secondary"
    },
    {
      title: "Human-AI Synergy",
      description: "Technology designed to enhance, not replace, human capabilities",
      gradient: "from-secondary to-accent"
    },
    {
      title: "Enterprise Scale",
      description: "Built for the demands of modern enterprise with zero compromise",
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <section ref={containerRef} className="relative py-40 overflow-hidden">
      {/* Parallax background elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-0 left-10 w-72 h-72 rounded-full bg-gradient-primary opacity-10 blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-gradient-accent opacity-10 blur-3xl"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/10"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          style={{ opacity, scale }}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-7xl font-black text-center mb-16 leading-tight"
          >
            <span className="text-foreground">We build </span>
            <span className="text-gradient-primary">what matters.</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* Card */}
                <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 h-full transition-all duration-500 group-hover:bg-white/10 group-hover:border-primary/30">
                  {/* Gradient indicator */}
                  <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${feature.gradient} mb-6`} />
                  
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ParallaxSection;
