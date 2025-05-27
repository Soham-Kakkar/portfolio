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
    const aboutOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const skillsOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
    const skillsScale = useTransform(scrollYProgress, [0.2, 0.4], [0.8, 1]);

    return (
        <TooltipProvider>
            <section ref={containerRef} className="relative h-[calc(300vh-92px)]">
                {/* About Section (Pinned and fading out) */}
                <motion.div
                    style={{ opacity: aboutOpacity }}
                    className="sticky top-0 h-screen flex items-center justify-center px-6"
                >
                    <motion.main
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-5xl mx-auto pt-16 text-white"
                    >
                        <h1 className="text-5xl font-bold mb-12 text-center text-blue-300 drop-shadow-md">
                            About Me
                        </h1>

                        <div className="flex flex-col lg:flex-row items-center mb-16 gap-12 lg:gap-20">
                            <Image
                                src="/images/Me_2.png"
                                alt="Soham profile"
                                width={700}
                                height={700}
                                className="rounded-full border-8 border-blue-400 shadow-lg max-w-100 max-h-100"
                                priority
                            />
                            <div className="max-w-xl text-left lg:text-left">
                                <h2 className="text-3xl font-semibold mb-5">Hey, I&apos;m Soham 👋</h2>
                                <p className="text-lg leading-relaxed text-white/90 mb-6">
                                    I&apos;m a passionate developer dedicated to building fast, scalable, and beautiful interfaces and systems.
                                    My interests lie in bridging the gap between frontend elegance and backend architecture, while also
                                    diving into the fascinating world of operating systems and programming language design.
                                </p>
                                <p className="text-lg text-zinc-300 max-w-xl">
                                    Currently pursuing a <strong>B.Tech at IIT Jammu</strong>, I specialize in full-stack development with a strong emphasis on
                                    performance, clean architecture, and developer experience.
                                    <br /><br />
                                    🚀 I&apos;m constantly exploring advanced web technologies and backend design to create apps that are both elegant and practical.
                                </p>
                            </div>
                        </div>
                    </motion.main>
                </motion.div>

                {/* Skills Section (Appears from center) */}
                <motion.div
                    style={{ opacity: skillsOpacity, scale: skillsScale }}
                    className="sticky top-40 w-full flex flex-col justify-center items-center text-white"
                >
                    <h3 className="text-3xl font-semibold text-blue-300 mb-8">🚀 Tech Stack</h3>
                    {[0, 1, 2, 3, 4].map((row, i) => (
                        <div
                            key={i}
                            className={`flex justify-center items-center gap-16 mb-[-16px] ${i % 2 !== 0 ? 'translate-x-[-5%]' : 'translate-x-[5%]'}`}
                        >
                            {skills.slice(i * 5, i * 5 + 5).map((skill, idx) => {
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
                                                className="w-30 h-30 bg-purple-800/30 backdrop-blur-md border border-purple-500/30 shadow-xl text-white flex items-center justify-center text-5xl hover:scale-110 after:hover:border-blue-200 transition-transform cursor-default"
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
                    ))}

                    <div className="text-center mt-28 mb-12">
                        <p className="text-xl text-white/80 mb-3">Want to build something cool together?</p>
                        <Button
                            variant={"default"}
                            className="bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-md transition"
                        >
                        <a
                            href="/contact"
                        >
                            Let&apos;s Talk
                        </a>
                        </Button>
                    </div>
                </motion.div>
            </section>
        </TooltipProvider>
    );
}
