import { motion } from "framer-motion";

const categories = [
  {
    title: "Frontend",
    color: "from-cyan-400 to-blue-500",
    skills: [
      { name: "React", level: 95 },
      { name: "JavaScript", level: 92 },
      { name: "Tailwind", level: 90 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    color: "from-purple-400 to-pink-500",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express", level: 85 },
      { name: "Django", level: 78 },
    ],
  },
  {
    title: "Database",
    color: "from-emerald-400 to-cyan-500",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 82 },
    ],
  },
  {
    title: "Programming",
    color: "from-orange-400 to-red-500",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 75 },
      { name: "TypeScript", level: 92 },
    ],
  },
  {
    title: "Tools",
    color: "from-violet-400 to-indigo-500",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "Docker", level: 80 },
      { name: "VS Code", level: 98 },
    ],
  },
  {
    title: "Other",
    color: "from-pink-400 to-rose-500",
    skills: [
      { name: "Three.js", level: 78 },
      { name: "Framer Motion", level: 88 },
      { name: "Figma", level: 82 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="blob w-[500px] h-[500px] bg-primary/20 right-0 top-1/2" />

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-accent mb-3">// 02. SKILLS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Tech Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit honed across years of building production-grade software.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8, rotateX: 5, rotateY: 5 }}
              style={{ transformStyle: "preserve-3d" }}
              className="glass rounded-2xl p-6 group hover:border-primary/40 transition relative overflow-hidden"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${cat.color} transition`} />
              <h3 className={`text-xl font-bold mb-5 bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>
                {cat.title}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((s, j) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium">{s.name}</span>
                      <span className="text-muted-foreground font-mono text-xs">{s.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.05 + j * 0.05, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${cat.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
