import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, input, textarea"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-primary pointer-events-none z-[100] mix-blend-screen hidden md:block"
        animate={{ x: pos.x - 6, y: pos.y - 6, scale: hovering ? 0 : 1 }}
        transition={{ type: "spring", damping: 30, stiffness: 500 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-primary/50 pointer-events-none z-[100] hidden md:block"
        animate={{ x: pos.x - 20, y: pos.y - 20, scale: hovering ? 1.8 : 1 }}
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
      />
    </>
  );
};

export default Cursor;
