'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function ScrollDownHint({position}: { position: string }) {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      // Hide once user scrolls down a bit (adjust threshold if needed)
      setVisible(latest < 80);
    });

    return () => unsubscribe();
  }, [scrollY]);

  if (!visible) return null;

  return (
    <motion.div
      className={`absolute ${position} left-1/2 -translate-x-1/2 text-blue-300 z-10`}
      initial={{ opacity: 1, y: 0 }}
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      style={{ opacity: visible ? 1 : 0, pointerEvents: 'none' }}
    >
      <ChevronDown className="w-10 h-10" />
    </motion.div>
  );
}
