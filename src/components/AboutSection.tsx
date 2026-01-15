import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import GradientOrb from "./GradientOrb";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <GradientOrb variant="accent" size="lg" className="top-0 right-0 opacity-20" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              About KodeLine
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Architecting robust digital infrastructure that{" "}
              <span className="text-gradient-primary">redefines performance</span>
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              KodeLine engineers high-performance software ecosystems.
              We design cloud-native platforms that are scalable, secure, and built for the modern enterprise.
            </p>
            <p className="text-text-subtle text-base leading-relaxed">
              Our approach combines rigorous engineering principles with cutting-edge architecture,
              creating technology that empowers your business to scale limits. From system design
              to deployment, we craft solutions that set new standards.
            </p>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              {/* Middle ring */}
              <motion.div
                className="absolute inset-8 rounded-full border border-secondary/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              {/* Inner orb */}
              <div className="absolute inset-16 rounded-full bg-gradient-primary opacity-80 blur-sm" />
              <div className="absolute inset-16 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-4xl font-black text-foreground font-mono">&lt; / &gt;</span>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-accent"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-gradient-primary"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
