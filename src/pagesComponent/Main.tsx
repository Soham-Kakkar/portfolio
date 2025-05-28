'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import AnimatedTitles from '../components/AnimatedTitles';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import MinCards from '../components/minCards';
import ScrollDownHint from '@/components/ScrollDownHint';
import Link from 'next/link';

export default function Main() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    const [slideX, setSlideX] = useState('-400px');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const updateSlideX = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1400) setSlideX('-400px');
            else if (screenWidth >= 1100) setSlideX('-250px');
            else setSlideX('0');
        };

        updateSlideX();
        window.addEventListener('resize', updateSlideX);
        return () => window.removeEventListener('resize', updateSlideX);
    }, []);

    // Transform values for different sections
    const x = useTransform(scrollYProgress, [0, 0.2], ['0px', slideX]);
    const fade = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const isDesktop = window.innerWidth >= 1100;

    if (!isMounted) return null;

    return (
        <section ref={ref} className="relative h-[400vh]">
            <motion.div
                className="sticky top-[64px] h-screen flex items-center justify-center max-w-[1400px] mx-auto overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Hero Section */}
                <motion.div
                    style={isDesktop ? { x } : { x, opacity: fade }}

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
                        Hi, I&apos;m Soham
                    </h1>
                    <AnimatedTitles />
                    <div className="mt-6">
                        <Button size="lg">
                            <Link href="/projects">
                                View My Work
                            </Link>
                        </Button>
                    </div>
                </motion.div>
                <ScrollDownHint position='top-[calc(100vh-120px)]'/>
                <MinCards scrollYProgress={scrollYProgress} />
            </motion.div>
        </section>
    );
}