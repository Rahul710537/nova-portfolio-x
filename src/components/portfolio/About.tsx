import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Briefcase, GraduationCap, Rocket, Trophy } from "lucide-react";

const stats = [
  { label: "Projects Built", value: 48, icon: Rocket },
  { label: "Years Experience", value: 5, icon: Briefcase },
  { label: "Happy Clients", value: 32, icon: Trophy },
  { label: "Certifications", value: 12, icon: GraduationCap },
];

const Counter = ({ value }: { value: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const dur = 1500;
    const step = (ts: number, startTs: number) => {
      const p = Math.min((ts - startTs) / dur, 1);
      setN(Math.floor(p * value));
      if (p < 1) requestAnimationFrame((t) => step(t, startTs));
    };
    requestAnimationFrame((t) => step(t, t));
    return () => { start = 0; };
  }, [inView, value]);
  return <span ref={ref}>{n}+</span>;
};

const timeline = [
  { year: "2024", title: "Senior Full Stack Engineer", org: "TechNova Labs", desc: "Leading development of AI-powered analytics platforms." },
  { year: "2022", title: "Full Stack Developer", org: "PixelForge Studio", desc: "Built scalable web apps for Fortune 500 clients." },
  { year: "2020", title: "Frontend Developer", org: "StartupHub", desc: "Crafted delightful UIs for early-stage startups." },
  { year: "2019", title: "B.S. Computer Science", org: "MIT", desc: "Graduated with honors. Focus on AI & systems." },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="blob w-[400px] h-[400px] bg-secondary/20 -left-20 top-1/3" />

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-accent mb-3">// 01. ABOUT</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Crafting <span className="text-gradient">Digital Excellence</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate engineer with a relentless drive to build products that matter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 space-y-4"
          >
            <h3 className="text-2xl font-bold text-gradient-primary">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a software developer with a passion for blending engineering rigor with creative design.
              For over 5 years, I've shipped products spanning web, mobile, and AI — always chasing that
              perfect intersection of beautiful and functional.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me writing about tech, contributing to open source,
              or experimenting with the latest in generative AI.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Problem Solver", "Open Source", "AI Enthusiast", "Mentor"].map((b) => (
                <motion.span
                  key={b}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 text-xs rounded-full glass border-primary/30"
                >
                  {b}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <div className="space-y-4">
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-5 flex gap-4 hover:border-primary/40 transition group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary glow-primary group-hover:scale-150 transition" />
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                </div>
                <div className="flex-1">
                  <div className="text-xs font-mono text-accent">{t.year}</div>
                  <div className="font-semibold">{t.title}</div>
                  <div className="text-sm text-primary">{t.org}</div>
                  <div className="text-sm text-muted-foreground mt-1">{t.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <s.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-gradient">
                <Counter value={s.value} />
              </div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
