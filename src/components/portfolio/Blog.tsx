import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  { title: "Building Performant 3D Web Experiences with Three.js", date: "Mar 15, 2026", category: "WebGL", gradient: "from-cyan-500 to-blue-600" },
  { title: "The Anatomy of a Production-Ready React Component", date: "Feb 28, 2026", category: "React", gradient: "from-purple-500 to-pink-600" },
  { title: "Why Your Next Side Project Should Be in Rust", date: "Feb 10, 2026", category: "Systems", gradient: "from-orange-500 to-red-600" },
  { title: "Designing AI-First Interfaces", date: "Jan 22, 2026", category: "AI / UX", gradient: "from-emerald-500 to-cyan-600" },
];

const Blog = () => {
  return (
    <section id="blog" className="section-padding relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-accent mb-3">// 05. WRITING</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="text-gradient">Articles</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials and deep-dives on software, design and the future of the web.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl overflow-hidden group hover:border-primary/40 transition cursor-pointer"
            >
              <div className={`h-32 bg-gradient-to-br ${p.gradient} relative`}>
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: "linear-gradient(45deg, transparent 48%, white 49%, white 51%, transparent 52%)",
                  backgroundSize: "10px 10px",
                }} />
              </div>
              <div className="p-5 space-y-3">
                <span className="text-xs font-mono text-accent">{p.category}</span>
                <h3 className="font-semibold leading-snug group-hover:text-primary transition">{p.title}</h3>
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-2">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" />{p.date}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition text-primary" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
