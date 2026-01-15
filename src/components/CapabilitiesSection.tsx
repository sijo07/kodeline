import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Workflow, BarChart3, Shield, Boxes, Rocket, Scale } from "lucide-react";

const capabilities = [
  {
    icon: Workflow,
    title: "Automated Workflows",
    description: "Streamline complex processes with intelligent, self-optimizing automation systems",
  },
  {
    icon: BarChart3,
    title: "Data Insights",
    description: "Real-time analytics and visualization powered by advanced processing",
  },
  {
    icon: Shield,
    title: "Secure Infrastructure",
    description: "Enterprise-grade security at every layer of your application",
  },
  {
    icon: Boxes,
    title: "Modular Architecture",
    description: "Flexible, composable systems that scale with your business needs",
  },
  {
    icon: Rocket,
    title: "Rapid Deployment",
    description: "From concept to production in weeks, ensuring fast time-to-market",
  },
  {
    icon: Scale,
    title: "Scalable SaaS",
    description: "Cloud-native solutions built to handle exponential growth from day one",
  },
];

const CapabilitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="capabilities" className="relative py-32 bg-background-secondary/50" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Featured Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Engineered for <span className="text-gradient-accent">excellence</span>
          </h2>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:bg-white/5">
                {/* Icon */}
                <div className="mb-4">
                  <capability.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {capability.title}
                </h3>
                <p className="text-text-subtle text-sm leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
