import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const TypingNav = ({ name, href, isActive, isMobile = false }: { name: string, href: string, isActive: boolean, isMobile?: boolean }) => {
  const [displayText, setDisplayText] = useState(name);
  const targetText = `<${name} />`;

  useEffect(() => {
    if (isActive && !isMobile) {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        if (currentIndex <= targetText.length) {
          setDisplayText(targetText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, 100);
      return () => clearInterval(intervalId);
    } else {
      setDisplayText(name);
    }
  }, [isActive, name, targetText, isMobile]);

  return (
    <a
      href={href}
      className={`relative px-1 md:px-3 py-2 transition-all duration-300 ${isActive ? 'text-primary font-bold' : 'text-white/70 hover:text-white font-medium'}`}
    >
      <span className="font-sans text-[10px] md:text-sm uppercase tracking-wide">{displayText}</span>
      {isActive && (
        <motion.div
          layoutId={`activeTab-${isMobile ? 'mobile' : 'desktop'}`}
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </a>
  );
};

const Header = () => {
  const [text, setText] = useState("");
  const [activeSection, setActiveSection] = useState("");
  const fullText = "I<odeline";

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 200);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100; // Offset for header height

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId || "");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#showcase" },
    { name: "Philosophy", href: "#philosophy" },
  ];

  return (
    <>
      {/* Top Navbar - Logo, Desktop Nav & CTA */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 bg-background/80 backdrop-blur-md"
      >
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-4 group">
            <div className="flex items-center">
              <span className="text-xl md:text-2xl font-extrabold text-white font-orbitron tracking-wider">
                {text}
              </span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="ml-1 w-2 h-6 bg-primary block"
              />
            </div>
          </a>

          {/* Desktop Navigation - Hidden on Mobile */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <TypingNav
                key={link.name}
                name={link.name}
                href={link.href}
                isActive={activeSection === link.href.substring(1)}
              />
            ))}
          </nav>

          {/* CTA Button */}
          <div>
            <a
              href="#cta"
              className="px-5 py-2 rounded-full bg-gradient-primary text-foreground font-medium text-xs md:text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
            >
              Get Started
            </a>
          </div>
        </div>
      </motion.header>

      {/* Bottom Navbar - Mobile Only */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-white/5 bg-background/90 backdrop-blur-xl md:hidden"
      >
        <div className="container mx-auto px-2 py-3">
          <div className="flex items-center justify-center w-full">
            {navLinks.map((link, index) => (
              <div key={link.name} className="flex items-center">
                <TypingNav
                  name={link.name}
                  href={link.href}
                  isActive={activeSection === link.href.substring(1)}
                  isMobile={true}
                />
                {index < navLinks.length - 1 && (
                  <span className="text-white/20 text-[10px] mx-1">|</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Header;
