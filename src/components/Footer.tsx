import { LinkedinIcon, XIcon, GithubIcon, Mail } from "lucide-react";

const Footer = () => {
  const links = {
    company: [
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Capabilities", href: "#capabilities" },
      { name: "Philosophy", href: "#philosophy" },
    ],
    resources: [
      { name: "Blog", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Careers", href: "#" },
    ],
    legal: [
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
      { name: "Security", href: "#" },
    ],
  };

  const socials = [
    { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
    { icon: XIcon, href: "#", label: "X" },
    { icon: GithubIcon, href: "#", label: "GitHub" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="relative py-16 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <img src="/logo.svg" alt="KodeLine" className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-foreground font-mono">l&lt;ode/ine&gt;</span>
            </div>
            <p className="text-text-muted text-sm max-w-xs mb-6">
              Where Technology Has a Presence. Building AI-driven systems with human-centered outcomes.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-muted hover:text-foreground hover:bg-white/10 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-subtle text-sm">
            © {new Date().getFullYear()} Tech Aura. All rights reserved.
          </p>
          <p className="text-text-subtle text-sm">
            Designed with precision. Built for the future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
