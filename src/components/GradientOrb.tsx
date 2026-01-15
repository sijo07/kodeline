import { motion } from "framer-motion";

interface GradientOrbProps {
  className?: string;
  variant?: "primary" | "accent" | "subtle";
  size?: "sm" | "md" | "lg" | "xl";
  animate?: boolean;
}

const GradientOrb = ({ 
  className = "", 
  variant = "primary", 
  size = "md",
  animate = true 
}: GradientOrbProps) => {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
    xl: "w-[500px] h-[500px]",
  };

  const gradients = {
    primary: "bg-gradient-primary",
    accent: "bg-gradient-accent",
    subtle: "bg-gradient-radial",
  };

  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-60 ${sizeClasses[size]} ${gradients[variant]} ${className}`}
      animate={animate ? {
        scale: [1, 1.1, 1],
        opacity: [0.4, 0.6, 0.4],
      } : undefined}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default GradientOrb;
