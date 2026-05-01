import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import Hero3D from "./Hero3D";

const roles = ["Full Stack Developer", "Software Engineer"];

const Hero = () => {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const speed = deleting ? 50 : 100;
    const t = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1500);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % roles.length);
        return;
      }
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, roleIdx]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="blob w-[500px] h-[500px] bg-primary/30 top-20 -left-40" />
      <div className="blob w-[600px] h-[600px] bg-secondary/30 bottom-0 -right-40" />
      <div className="blob w-[400px] h-[400px] bg-accent/20 top-1/2 left-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-muted-foreground">Available for new opportunities</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block text-gradient animate-gradient">Rahul</span>
          </h1>

          <div className="text-2xl md:text-3xl font-mono h-10 flex items-center">
            <span className="text-muted-foreground">&gt;&nbsp;</span>
            <span className="text-primary">{text}</span>
            <span className="ml-1 w-[3px] h-7 bg-primary animate-blink" />
          </div>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            I craft immersive digital experiences blending elegant design with powerful engineering.
            Passionate about building scalable products that delight users and push boundaries.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-background font-semibold glow-primary"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:border-primary/50 transition"
            >
              <Mail className="w-4 h-4" /> Contact Me
            </motion.a>
            <motion.a
              href="#resume"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-accent/40 text-accent hover:bg-accent/10 transition"
            >
              <Download className="w-4 h-4" /> Resume
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative h-[500px] lg:h-[600px]"
        >
          <Hero3D />
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground font-mono"
      >
        scroll ↓
      </motion.div>
    </section>
  );
};

export default Hero;
