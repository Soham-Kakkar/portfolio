'use client';

import { useContext, useEffect, useState } from 'react';
import { motion, type MotionValue, useTransform } from 'framer-motion';
import MinAbout from './min-cards/MinAbout';
import MinProjects from './min-cards/MinProjects';
import { SectionContext } from './AnimatedLayout';
import MinContact from './min-cards/MinContact';

export default function MinCards({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const { setActiveSection } = useContext(SectionContext);

  const [aboutVisible, setAboutVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1100;

  useEffect(() => {
    if (contactVisible) setActiveSection("Contact");
    else if (projectsVisible) setActiveSection("Projects");
    else if (aboutVisible) setActiveSection("About");
    else setActiveSection("None");
  }, [aboutVisible, projectsVisible, contactVisible, setActiveSection]);

  // const aboutOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const aboutY = useTransform(scrollYProgress, [0.1, 0.2], ['450vh', '-10%']);
  // const projectsOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const projectsY = useTransform(scrollYProgress, [0.4, 0.5], ['450vh', '-7%']);
  // const contactOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const contactY = useTransform(scrollYProgress, [0.6, 0.7], ['450vh', '20%']);

  if (!isMounted) return null;

  return (
    <>
      {/* About Section */}
      <motion.div
        style={{ y: aboutY }}
        className={`absolute px-4 ${isDesktop && 'w-1/2 right-8'} max-w-lg z-[10]`}
      >
        <MinAbout onInViewChange={setAboutVisible} />
      </motion.div>

      {/* Projects Section */}
      <motion.div
        style={{ y: projectsY }}
        className={`absolute px-4 ${isDesktop && 'w-1/2 right-8'} max-w-lg z-[20]`}
      >
        <MinProjects onInViewChange={setProjectsVisible} />
      </motion.div>

      {/* Contact Section */}
      <motion.div
        style={{ y: contactY }}
        className={`absolute px-4 ${isDesktop && 'w-1/2 right-8'} w-full max-w-lg z-[30]`}
      >
        <MinContact onInViewChange={setContactVisible} />
      </motion.div>
    </>
  );
}
