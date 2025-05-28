'use client';

import { useState, createContext, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import Navbar, { type ActiveSectionType } from './Navbar';

export const SectionContext = createContext<{
  activeSection: ActiveSectionType | null;
  setActiveSection: (id: ActiveSectionType) => void;
}>({ activeSection: null, setActiveSection: () => { } });

export default function AnimatedLayout({ bgImage, children }: { bgImage: string, children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<ActiveSectionType>('None');
  const [isMounted, setIsMounted] = useState(false);

  const layoutRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: layoutRef, offset: ['start start', 'end end'] });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);

  // Cursor-based parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 20, damping: 10 });
  const smoothY = useSpring(mouseY, { stiffness: 20, damping: 10 });

  useEffect(() => {
    setIsMounted(true);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // Range: -1 to 1
      const y = (e.clientY / innerHeight - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const bgTranslateX = useTransform(smoothX, [-1, 1], ['-1.5%', '1.5%']);
  const bgTranslateY = useTransform(smoothY, [-1, 1], ['-1.5%', '1.5%']);

  if (!isMounted) return null;

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      <div ref={layoutRef}>
        {/* Background Image Layer with scroll zoom + parallax */}
        <motion.div
          style={{
            scale: bgScale,
            x: bgTranslateX,
            y: bgTranslateY,
            backgroundImage: `url(${bgImage})`,
          }}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`fixed inset-0 z-[-10] bg-cover bg-no-repeat bg-center bg-fixed`}
        />

        {/* Foreground Content Layer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="relative"
        >
          <Navbar />
          {children}
        </motion.div>
      </div>
    </SectionContext.Provider>
  );
}
