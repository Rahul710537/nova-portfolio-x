import { lazy, Suspense } from "react";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Resume from "@/components/portfolio/Resume";
import Blog from "@/components/portfolio/Blog";
import CodingProfiles from "@/components/portfolio/CodingProfiles";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import Cursor from "@/components/portfolio/Cursor";

const ParticlesBackground = lazy(() => import("@/components/portfolio/ParticlesBackground"));

const Index = () => {
  return (
    <main className="relative min-h-screen">
      <Suspense fallback={null}>
        <ParticlesBackground />
      </Suspense>
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Blog />
      <CodingProfiles />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
