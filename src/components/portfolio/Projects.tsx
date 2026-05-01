import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "NovaAI Dashboard",
    desc: "Real-time AI analytics platform with 3D data visualizations and live model monitoring.",
    tech: ["React", "Three.js", "Python", "FastAPI"],
    gradient: "from-cyan-500 via-blue-500 to-purple-600",
  },
  {
    title: "PixelMint NFT Studio",
    desc: "Web3 marketplace allowing creators to mint, list and trade NFTs with gasless flows.",
    tech: ["Next.js", "Solidity", "IPFS", "GraphQL"],
    gradient: "from-purple-500 via-pink-500 to-rose-500",
  },
  {
    title: "ChatFlow SaaS",
    desc: "Multi-tenant customer support suite with AI-assisted reply suggestions.",
    tech: ["React", "Node.js", "MongoDB", "OpenAI"],
    gradient: "from-emerald-500 via-cyan-500 to-blue-500",
  },
  {
    title: "FitTrack Mobile",
    desc: "Cross-platform fitness app with computer vision-based form correction.",
    tech: ["React Native", "TensorFlow", "Firebase"],
    gradient: "from-orange-500 via-red-500 to-pink-500",
  },
  {
    title: "DevDocs Generator",
    desc: "Auto-generates beautiful API documentation from code comments using LLMs.",
    tech: ["TypeScript", "Express", "OpenAI"],
    gradient: "from-violet-500 via-indigo-500 to-blue-500",
  },
  {
    title: "EcoTrack Platform",
    desc: "Carbon footprint tracker for enterprises with IoT sensor integration.",
    tech: ["React", "Django", "PostgreSQL", "MQTT"],
    gradient: "from-green-500 via-emerald-500 to-teal-500",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-gradient transition">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-xs rounded-md bg-primary/10 text-primary border border-primary/20 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="#"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-xs rounded-lg bg-gradient-to-r from-primary to-secondary text-background font-semibold"
                  >
                    <ExternalLink className="w-3 h-3" /> Live
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="#"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-xs rounded-lg glass hover:border-primary/40"
                  >
                    <Github className="w-3 h-3" /> Code
                  </motion.a>
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
