import { motion } from "framer-motion";
import { Code2, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-8 px-6 overflow-hidden">
      <svg className="absolute top-0 left-0 right-0 w-full" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <motion.path
          d="M0,40 C320,80 720,0 1440,40 L1440,80 L0,80 Z"
          fill="url(#waveGrad)"
          animate={{ d: [
            "M0,40 C320,80 720,0 1440,40 L1440,80 L0,80 Z",
            "M0,40 C320,0 720,80 1440,40 L1440,80 L0,80 Z",
            "M0,40 C320,80 720,0 1440,40 L1440,80 L0,80 Z",
          ]}}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="waveGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container mx-auto max-w-6xl relative z-10 pt-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <a href="#home" className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-secondary glow-primary">
                <Code2 className="w-5 h-5 text-background" />
              </div>
              <span className="font-bold text-gradient">DevPortfolio</span>
            </a>
            <p className="text-sm text-muted-foreground">Building delightful software, one line at a time.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              {["About", "Skills", "Projects", "Resume", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-primary transition">{l}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Stay Connected</h4>
            <p className="text-sm text-muted-foreground mb-3">Open to opportunities and collaborations.</p>
            <a href="#contact" className="text-sm text-primary hover:underline">alex@devportfolio.dev</a>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-muted-foreground">
          <p>© 2026 Rahul. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400" /> using React + Three.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
