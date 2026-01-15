import { LinkedinIcon, XIcon, GithubIcon, Mail } from "lucide-react";

const Footer = () => {
  const links = {
    company: [
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Projects", href: "#showcase" },
      { name: "Philosophy", href: "#philosophy" },
    ],
    socials: [
      { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
      { icon: GithubIcon, href: "#", label: "GitHub" },
      { icon: Mail, href: "mailto:hello@kodeline.com", label: "Email" },
    ]
  };

  return (
    <footer className="relative py-12 border-t border-white/5 bg-background/50 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <span className="text-2xl font-extrabold text-foreground font-orbitron tracking-wider">
                I&lt;odeline
              </span>
            </div>
            <p className="text-text-muted text-sm max-w-sm leading-relaxed">
              Architecting the future of digital infrastructure. <br />
              Scalable systems. Intelligent automation.
            </p>
          </div>

          {/* Links & Socials */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
              {links.company.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-text-muted hover:text-primary transition-colors uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex gap-4">
              {links.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:bg-white/5 hover:border-primary/50 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-text-subtle text-xs tracking-wider">
            &copy; {new Date().getFullYear()} KODELINE. ALL RIGHTS RESERVED.
          </p>
          <p className="text-text-subtle text-xs tracking-wider">
            ENGINEERED FOR EXCELLENCE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
