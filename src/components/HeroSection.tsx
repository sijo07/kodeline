import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import GradientOrb from "./GradientOrb";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    if (!textRef.current) return;

    const letters = textRef.current.querySelectorAll(".animate-letter");

    gsap.fromTo(
      letters,
      {
        y: 100,
        opacity: 0,
        rotationX: -90
      },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        stagger: 0.03,
        duration: 1,
        ease: "power4.out",
        delay: 0.5
      }
    );
  }, []);

  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className="animate-letter inline-block"
        style={{ display: char === " " ? "inline" : "inline-block" }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 noise-overlay">
        <GradientOrb
          variant="primary"
          size="xl"
          className="top-1/4 -right-48"
        />
        <GradientOrb
          variant="accent"
          size="lg"
          className="bottom-1/4 -left-32"
        />
        <GradientOrb
          variant="primary"
          size="md"
          className="top-1/3 left-1/4 opacity-30"
        />
      </div>

      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 30% 20%, hsl(263 82% 58% / 0.3) 0%, transparent 50%)",
          }}
          animate={{
            background: [
              "radial-gradient(ellipse at 30% 20%, hsl(263 82% 58% / 0.3) 0%, transparent 50%)",
              "radial-gradient(ellipse at 70% 80%, hsl(263 82% 58% / 0.3) 0%, transparent 50%)",
              "radial-gradient(ellipse at 30% 20%, hsl(263 82% 58% / 0.3) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid pattern overlay */}
      {/* Tactical Grid & Circuit Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.2) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.2) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.1) 2px, transparent 2px)
          `,
          backgroundSize: "50px 50px, 50px 50px, 25px 25px"
        }}
      />

      {/* HUD Elements / Decorative Tech Markers */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Top Left Marker */}
        <div className="absolute top-24 left-6 md:left-12 flex flex-col gap-1 opacity-40">
          <div className="w-24 h-[1px] bg-primary"></div>
          <span className="text-[10px] font-mono text-primary tracking-widest">SYS.OVR.RDY</span>
        </div>

        {/* Bottom Right Marker */}
        <div className="absolute bottom-24 right-6 md:right-12 flex flex-col items-end gap-1 opacity-40">
          <div className="w-24 h-[1px] bg-primary"></div>
          <span className="text-[10px] font-mono text-primary tracking-widest">SEC.LEVEL: MAX</span>
        </div>

        {/* Crosshairs */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 border-t border-l border-primary opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-4 h-4 border-b border-r border-primary opacity-30"></div>
      </div>

      {/* Cyber Orbital Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] opacity-20 pointer-events-none">
        <motion.div
          className="absolute inset-0 rounded-full border border-dashed border-primary/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-24 md:inset-32 rounded-full border border-primary/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-48 md:inset-64 rounded-full border-2 border-primary/5"
          animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Tagline with sparkle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-mono tracking-wide">
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.span>
              Where Technology Has a Presence
            </span>
          </motion.div>

          {/* Main Headline with letter animation */}
          <div ref={textRef} className="overflow-hidden">
            <h1 className="editorial-heading font-orbitron tracking-wide text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-8">
              <div className="overflow-hidden">
                <span className="text-foreground">{splitText("REDEFINING")}</span>
              </div>
              {/* Marquee Section */}
              <div className="overflow-hidden py-2 w-full max-w-[100vw]">
                <motion.div
                  className="flex whitespace-nowrap"
                  animate={{ x: [0, -1000] }}
                  transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20
                  }}
                >
                  {[...Array(8)].map((_, i) => (
                    <span key={i} className="text-gradient-primary text-3xl sm:text-4xl md:text-5xl lg:text-2xl font-orbitron tracking-wider mx-4">
                      OUR SERVICES • SAAS DEVELOPMENT •
                    </span>
                  ))}
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <span className="text-foreground">{splitText("THE TECHNOLOGY")}</span>
              </div>
            </h1>
          </div>

          {/* Subtitle with fade */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-12"
          >
            AI-driven systems. Human-centered outcomes.
            <br className="hidden sm:block" />
            Building intelligent platforms that amplify what makes us human.
          </motion.p>

          {/* CTA Buttons with hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 rounded-full bg-gradient-primary text-foreground font-semibold flex items-center gap-2 overflow-hidden"
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                animate={{ translateX: ["100%", "-100%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 rounded-full bg-gradient-primary blur-xl opacity-50 group-hover:opacity-70 transition-opacity -z-10" />
            </motion.a>

            <motion.a
              href="#showcase"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 rounded-full glass text-foreground font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors duration-300"
            >
              <Play className="w-4 h-4" />
              <span>View Platform</span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator with bounce */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-text-subtle flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
