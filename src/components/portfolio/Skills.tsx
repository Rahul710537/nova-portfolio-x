import { motion } from "framer-motion";

const categories = [
  {
    title: "Programming Languages",
    color: "from-orange-400 to-red-500",
    skills: [
      { name: "Python", level: 90 },
      { name: "C", level: 80 },
    ],
  },
  {
    title: "Frontend",
    color: "from-cyan-400 to-blue-500",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "React", level: 85 },
    ],
  },
  {
    title: "Backend Frameworks",
    color: "from-purple-400 to-pink-500",
    skills: [
      { name: "Django", level: 88 },
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
    ],
  },
  {
    title: "Database",
    color: "from-emerald-400 to-cyan-500",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    title: "Tools & Platforms",
    color: "from-violet-400 to-indigo-500",
    skills: [
      { name: "VS Code", level: 95 },
      { name: "Git / GitHub", level: 88 },
      { name: "Jupyter Notebook", level: 82 },
      { name: "Docker Desktop", level: 70 },
    ],
  },
  {
    title: "Learning",
    color: "from-pink-400 to-rose-500",
    skills: [
      { name: "DSA (LeetCode)", level: 70 },
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
            My <span className="text-gradient">Skills</span>
          </h2>
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
