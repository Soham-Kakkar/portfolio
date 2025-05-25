'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import AnimatedTitles from './AnimatedTitles';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState, useContext } from 'react';
import { SectionContext } from './AnimatedLayout';
import MinAbout from './min-cards/About';
import MinProjects from './min-cards/Projects';
import MinContact from './min-cards/Contact';

export default function Hero() {
    const { setActiveSection } = useContext(SectionContext);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    const [slideX, setSlideX] = useState('-400px');

    useEffect(() => {
        const updateSlideX = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1400) setSlideX('-400px');
            else if (screenWidth >= 1024) setSlideX('-250px');
            else setSlideX('-80px');
        };

        updateSlideX();
        window.addEventListener('resize', updateSlideX);
        return () => window.removeEventListener('resize', updateSlideX);
    }, []);

    const [aboutVisible, setAboutVisible] = useState(false);
    const [projectsVisible, setProjectsVisible] = useState(false);
    const [contactVisible, setContactVisible] = useState(false);

    useEffect(() => {
        if (contactVisible) setActiveSection("Contact");
        else if (projectsVisible) setActiveSection("Projects");
        else if (aboutVisible) setActiveSection("About");
        else setActiveSection("None");
    }, [aboutVisible, projectsVisible, contactVisible]);


    // Transform values for different sections
    const x = useTransform(scrollYProgress, [0, 0.2], ['0px', slideX]);
    // const aboutOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
    const aboutY = useTransform(scrollYProgress, [0.1, 0.2], ['450vh', '-10%']);
    // const projectsOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
    const projectsY = useTransform(scrollYProgress, [0.4, 0.5], ['450vh', '-7%']);
    // const contactOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
    const contactY = useTransform(scrollYProgress, [0.6, 0.7], ['450vh', '15%']);

    return (
        <section ref={ref} className="relative h-[400vh]">
            <motion.div className="sticky top-[64px] h-screen flex items-center justify-center max-w-[1400px] mx-auto overflow-hidden">
                {/* Hero Section */}
                <motion.div
                    style={{ x }}
                    className="absolute left-1/2 -translate-x-1/2 w-full text-center bg-transparent px-4 flex items-center justify-center flex-col"
                >
                    <Image
                        className="rounded-full mb-4 border-8 border-blue-300 shadow-lg mx-auto"
                        src="/images/Me_2.png"
                        width={250}
                        height={250}
                        alt="logo"
                    />
                    <h1 className="text-6xl md:text-7xl font-extrabold text-blue-300">
                        Hi, I'm Soham
                    </h1>
                    <AnimatedTitles />
                    <div className="mt-6">
                        <Button size="lg">View My Work</Button>
                    </div>
                </motion.div>

                {/* About Section */}
                <motion.div
                    style={{ y: aboutY }}
                    className="absolute right-8 w-1/2 max-w-lg z-[10]"
                >
                    <MinAbout onInViewChange={setAboutVisible} />
                </motion.div>

                {/* Projects Section */}
                <motion.div
                    style={{ y: projectsY }}
                    className="absolute right-8 w-1/2 max-w-lg z-[20]"
                >
                    <MinProjects onInViewChange={setProjectsVisible} />
                </motion.div>

                {/* Contact Section */}
                <motion.div
                    style={{ y: contactY }}
                    className="absolute right-8 w-1/2 max-w-lg z-[30]"
                >
                    <MinContact onInViewChange={setContactVisible} />
                </motion.div>
            </motion.div>
        </section>
    );
}