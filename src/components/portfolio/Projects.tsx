import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Book Summarization",
    desc: "Web app that accepts any book as input and generates a comprehensive AI-powered summary, exporting a downloadable multi-page PDF. Selected by MSME to be developed into a product-level application.",
    stack: ["HTML", "CSS", "JavaScript", "Django", "MySQL"],
    gradient: "from-sky-500 via-blue-500 to-indigo-600",
  },
  {
    title: "Library Management System",
    desc: "Digital library system designed for the college to monitor real-time book stock, manage inventory and reduce manual effort. Full-stack MERN implementation with admin dashboard.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="blob w-[600px] h-[600px] bg-secondary/20 left-1/2 top-1/2 -translate-x-1/2" />

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-accent mb-3">// 03. PROJECTS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my approach to building impactful software.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 flex-wrap">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -10 }}
              className="group glass rounded-2xl overflow-hidden hover:border-primary/40 transition relative"
            >
              <div className={`relative h-44 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{
                  backgroundImage: "radial-gradient(circle at 30% 50%, white 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }} />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center font-mono text-white/80 text-2xl font-bold tracking-widest"
                  whileHover={{ scale: 1.1 }}
                >
                  {p.title.split(" ").map(w => w[0]).join("")}
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              <div className="p-6 space-y-4 max-w-md">
                <h3 className="text-xl font-bold group-hover:text-gradient transition">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {p.stack.map((s) => (
                    <span key={s} className="px-2.5 py-1 text-xs rounded-full glass border-primary/20 font-mono">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
