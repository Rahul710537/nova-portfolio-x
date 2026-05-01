import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="section-padding relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-mono text-accent mb-3">// 04. RESUME</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get My <span className="text-gradient">Resume</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />

          <motion.div
            animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="relative mx-auto"
          >
            <div className="w-56 h-72 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 p-5 glow-primary backdrop-blur-xl">
              <FileText className="w-8 h-8 text-primary mb-3" />
              <div className="space-y-2">
                {[80, 60, 90, 70, 55, 85, 65].map((w, i) => (
                  <div key={i} className="h-1.5 bg-foreground/30 rounded-full" style={{ width: `${w}%` }} />
                ))}
              </div>
              <div className="mt-4 grid grid-cols-3 gap-1.5">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="h-3 bg-foreground/15 rounded" />
                ))}
              </div>
            </div>
          </motion.div>

          <div className="space-y-5 relative z-10 text-center">
            <h3 className="text-3xl font-bold">Resume</h3>
            <p className="text-muted-foreground leading-relaxed">
            </p>
            <div className="flex gap-3 text-xs font-mono text-muted-foreground justify-center">
              <span>PDF. 1page</span>
              <span></span>
            </div>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-background font-semibold glow-primary"
            >
              <Download className="w-4 h-4" /> Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
