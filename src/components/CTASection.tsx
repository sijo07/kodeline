import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import ContactModal from "./ContactModal";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="cta" className="relative py-32" ref={ref}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Glass Card */}
            <div className="glass-card p-12 md:p-16 relative overflow-hidden">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-primary opacity-10" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-primary rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-accent rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />

              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Architect the future with{" "}
                  <span className="text-gradient-primary">KodeLine</span>
                </h2>

                <p className="text-text-muted text-lg mb-10 max-w-xl mx-auto">
                  Ready to deploy enterprise-grade solutions built for scale and performance?
                  Let's initialize your project and build something extraordinary.
                </p>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-primary text-foreground font-semibold text-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                  <span>Initialize Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default CTASection;
