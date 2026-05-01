import { motion } from "framer-motion";
import { Github, Code, Trophy, Award, Star, Zap } from "lucide-react";

const profiles = [
  { name: "GitHub", icon: Github, stat: "1.2k", label: "Stars", color: "text-foreground", glow: "from-foreground/20 to-foreground/5" },
  { name: "LeetCode", icon: Code, stat: "850+", label: "Problems", color: "text-orange-400", glow: "from-orange-500/30 to-orange-500/5" },
  { name: "HackerRank", icon: Trophy, stat: "5★", label: "Gold Badge", color: "text-emerald-400", glow: "from-emerald-500/30 to-emerald-500/5" },
  { name: "CodeChef", icon: Award, stat: "1900", label: "Rating", color: "text-amber-400", glow: "from-amber-500/30 to-amber-500/5" },
  { name: "Codeforces", icon: Zap, stat: "Expert", label: "Tier", color: "text-blue-400", glow: "from-blue-500/30 to-blue-500/5" },
  { name: "GeeksforGeeks", icon: Star, stat: "Top 5%", label: "Coder", color: "text-green-400", glow: "from-green-500/30 to-green-500/5" },
];

const CodingProfiles = () => {
  return (
    <section className="section-padding relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-accent mb-3">// 06. CODING PROFILES</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Where I <span className="text-gradient">Code</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {profiles.map((p, i) => (
            <motion.a
              key={p.name}
              href="#"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="glass rounded-2xl p-6 flex items-center gap-5 hover:border-primary/40 transition relative overflow-hidden group"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${p.glow} transition`} />
              <div className={`p-4 rounded-xl bg-card ${p.color} relative z-10`}>
                <p.icon className="w-7 h-7" />
              </div>
              <div className="relative z-10">
                <div className="font-bold text-lg">{p.name}</div>
                <div className={`text-2xl font-bold ${p.color} font-mono`}>{p.stat}</div>
                <div className="text-xs text-muted-foreground">{p.label}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
