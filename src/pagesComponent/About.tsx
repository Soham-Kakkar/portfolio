'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiNodedotjs,
    SiMongodb,
    SiPython,
    SiGit,
    SiFramer,
    SiHtml5,
    SiCss3,
    SiCplusplus,
    SiC,
    SiLinux,
    SiExpress,
    SiThreedotjs,
    SiRedux,
    SiFlask,
    SiDocker,
} from 'react-icons/si';
import { Button } from '../components/ui/button';
import Link from 'next/link';
import ScrollDownHint from '@/components/ScrollDownHint';

const skills = [
    { icon: <SiTypescript className="text-blue-600" />, label: 'TypeScript' },
    { icon: <SiJavascript className="text-yellow-400" />, label: 'JavaScript' },
    { icon: <SiHtml5 className="text-orange-500" />, label: 'HTML5' },
    { icon: <SiCss3 className="text-blue-500" />, label: 'CSS3' },
    { icon: <SiPython className="text-yellow-200" />, label: 'Python' },
    { icon: <SiNextdotjs className="text-white" />, label: 'Next.js' },
    { icon: <SiMongodb className="text-green-600" />, label: 'MongoDB' },
    { icon: <SiExpress className="text-green-900" />, label: 'Express' },
    { icon: <SiReact className="text-cyan-400" />, label: 'React' },
    { icon: <SiNodedotjs className="text-green-500" />, label: 'Node.js' },
    { icon: <SiTailwindcss className="text-cyan-300" />, label: 'Tailwind CSS' },
    { icon: <SiFramer className="text-white" />, label: 'Framer Motion' },
    { icon: <SiRedux className="text-violet-600" />, label: 'Redux' },
    { icon: <SiThreedotjs className="text-white" />, label: 'Three.js' },
    { icon: <SiFlask className="text-white" />, label: 'Flask' },
    { icon: <SiGit className="text-orange-600" />, label: 'Git' },
    { icon: <SiDocker className="text-blue-600" />, label: 'Docker' },
    { icon: <SiLinux className="text-white" />, label: 'Linux' },
    { icon: <SiC className="text-purple-400" />, label: 'C' },
    { icon: <SiCplusplus className="text-purple-400" />, label: 'C++' },
];

const randomFloat = (min: number, max: number) => Math.random() * (max - min) + min;

export default function About() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
    const aboutOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const skillsOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
    const skillsScale = useTransform(scrollYProgress, [0.2, 0.4], [0.8, 1]);

    return (
        <TooltipProvider>
            <section ref={containerRef} className="overflow-x-hidden mt-[92px] px-4 sm:px-6 md:px-8">
                {/* About Section (Pinned and fading out) */}
                <motion.div
                    style={{ opacity: aboutOpacity }}
                    className="min-h-[calc(100vh-92px)] flex flex-col items-center justify-center"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center text-blue-300 drop-shadow-md">
                        About Me
                    </h1>

                    <div className="flex flex-col lg:flex-row items-center mb-8 md:mb-16 gap-8 lg:gap-20 max-w-6xl mx-auto">
                        <Image
                            src="/images/Me_2.png"
                            alt="Soham profile"
                            width={700}
                            height={700}
                            className="rounded-full border-8 border-blue-400 shadow-lg w-48 h-48 sm:w-64 sm:h-64 md:w-[300px] md:h-[300px]"
                            priority
                        />
                        <div className="max-w-2xl text-center lg:text-left">
                            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-5">Hey, I&apos;m Soham 👋</h2>
                            <p className="text-base sm:text-lg leading-relaxed text-white/90 mb-4 sm:mb-6">
                                I&apos;m a developer passionate about fast, scalable systems and elegant UIs. I love bridging the gap between frontend finesse and backend architecture.
                            </p>
                            <p className="text-base sm:text-lg text-zinc-300">
                                Currently pursuing a <strong>B.Tech at IIT Jammu</strong>, I specialize in full-stack development with a strong emphasis on
                                performance, clean architecture, and developer experience.
                                <br /><br />
                                🚀 I&apos;m constantly exploring advanced web technologies and backend design to create apps that are both elegant and practical.
                            </p>
                        </div>
                    </div>
                </motion.div>
                <ScrollDownHint position='top-[calc(100vh-50px)]'/>

                {/* Skills Section (Appears from center) */}
                <motion.div
                    style={{ opacity: skillsOpacity, scale: skillsScale }}
                    className="sticky top-40 w-full flex flex-col justify-center items-center text-white"
                >
                    <h3 className="text-2xl sm:text-3xl font-semibold text-blue-300 mb-8">🚀 Tech Stack</h3>
                    <div className="grid grid-cols-5 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto pr-4 mb-20 md:mb-0">
                        {skills.map((skill, idx) => {
                            const floatX = randomFloat(-16, 16);
                            const floatY = randomFloat(-14, 14);
                            const duration = randomFloat(4, 8);

                            return (
                                <Tooltip key={idx}>
                                    <TooltipTrigger asChild>
                                        <motion.div
                                            style={{
                                                clipPath: `polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)`
                                            }}
                                            className="w-20 h-20 sm:w-24 sm:h-24 bg-purple-800/30 backdrop-blur-md border border-purple-500/30 shadow-xl text-white flex items-center justify-center text-3xl sm:text-4xl hover:scale-110 transition-transform cursor-default"
                                            animate={{
                                                x: [0, floatX, 0, -floatX, 0],
                                                y: [0, floatY, 0, -floatY, 0],
                                            }}
                                            transition={{
                                                repeat: Infinity,
                                                repeatType: 'loop',
                                                ease: 'easeInOut',
                                                duration,
                                            }}
                                        >
                                            {skill.icon}
                                        </motion.div>
                                    </TooltipTrigger>
                                    <TooltipContent sideOffset={8} className="text-sm">
                                        {skill.label}
                                    </TooltipContent>
                                </Tooltip>
                            );
                        })}
                    </div>

                    <div className="text-center mt-16 mb-8">
                        <p className="text-lg sm:text-xl text-white/80 mb-3">Want to build something cool together?</p>
                        <Button
                            variant={"default"}
                            className="bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-md transition"
                        >
                            <Link href="/contact">
                                Let&apos;s Talk
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </section>
        </TooltipProvider>
    );
}
