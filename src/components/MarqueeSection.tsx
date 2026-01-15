import { motion } from "framer-motion";

const technologies = [
  "SaaS Development",
  "Software Automation",
  "Web Development",
];

const MarqueeSection = () => {
  return (
    <section className="py-16 overflow-hidden border-y border-border/30">
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* First marquee */}
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 whitespace-nowrap"
        >
          {[...technologies, ...technologies, ...technologies, ...technologies, ...technologies, ...technologies].map((tech, index) => (
            <div key={index} className="flex items-center gap-8">
              <span className="text-2xl md:text-4xl font-black text-foreground/20 hover:text-gradient-primary transition-all duration-300 cursor-default">
                {tech}
              </span>
              <span className="text-primary/40 text-xl font-mono">{'///'}</span>
            </div>
          ))}
        </motion.div>

        {/* Second marquee - reverse direction */}
        <motion.div
          animate={{ x: [-1920, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 whitespace-nowrap mt-8"
        >
          {[...technologies, ...technologies, ...technologies, ...technologies, ...technologies, ...technologies].reverse().map((tech, index) => (
            <div key={index} className="flex items-center gap-8">
              <span className="text-xl md:text-3xl font-bold text-foreground/10 hover:text-gradient-accent transition-all duration-300 cursor-default">
                {tech}
              </span>
              <span className="text-secondary/40 text-lg font-mono">{'///'}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarqueeSection;
