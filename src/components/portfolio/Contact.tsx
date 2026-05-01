import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Phone, Send, Loader2, Check, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Subject required").max(200),
  message: z.string().trim().min(1, "Message required").max(1000),
});

const socials = [
  { icon: Github, href: "https://github.com/", color: "hover:text-foreground" },
  { icon: Linkedin, href: "https://linkedin.com/in/rahul-b-071199340", color: "hover:text-blue-400" },
  { icon: Twitter, href: "#", color: "hover:text-sky-400" },
  { icon: Instagram, href: "#", color: "hover:text-pink-400" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 2500);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="blob w-[500px] h-[500px] bg-primary/20 right-0 bottom-0" />

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-accent mb-3">// 07. CONTACT</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Build Together</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              { icon: Mail, label: "Email", value: "rahulbalu330@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91 9363571998" },
              { icon: MapPin, label: "Location", value: "Cuddalore, Tamil Nadu" },
            ].map((c, i) => (
              <motion.div
                key={c.label}
                whileHover={{ x: 5 }}
                className="glass rounded-xl p-5 flex items-center gap-4"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">
                  <c.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{c.label}</div>
                  <div className="font-medium">{c.value}</div>
                </div>
              </motion.div>
            ))}

            <div className="glass rounded-xl p-5">
              <div className="text-sm text-muted-foreground mb-3">Find me on</div>
              <div className="flex gap-3">
                {socials.map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    whileHover={{ y: -4, scale: 1.15 }}
                    className={`p-3 rounded-lg glass ${s.color} text-muted-foreground transition`}
                  >
                    <s.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass rounded-2xl p-6 md:p-8 space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="w-full px-4 py-3 rounded-xl bg-input/50 border border-border focus:border-primary outline-none transition"
              />
              <input
                placeholder="Your email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="w-full px-4 py-3 rounded-xl bg-input/50 border border-border focus:border-primary outline-none transition"
              />
            </div>
            <input
              placeholder="Subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              maxLength={200}
              className="w-full px-4 py-3 rounded-xl bg-input/50 border border-border focus:border-primary outline-none transition"
            />
            <textarea
              placeholder="Your message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              rows={6}
              className="w-full px-4 py-3 rounded-xl bg-input/50 border border-border focus:border-primary outline-none transition resize-none"
            />
            <motion.button
              type="submit"
              disabled={status !== "idle"}
              whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
              whileTap={{ scale: 0.98 }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-background font-semibold glow-primary disabled:opacity-70"
            >
              {status === "loading" && <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>}
              {status === "success" && <><Check className="w-4 h-4" /> Sent!</>}
              {status === "idle" && <><Send className="w-4 h-4" /> Send Message</>}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
