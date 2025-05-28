'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { SectionContext } from './AnimatedLayout'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
]

export type ActiveSectionType = 'None' | 'Home' | 'About' | 'Projects' | 'Contact';

export default function Navbar() {
    const { activeSection } = useContext(SectionContext);
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isMounted) return null;

    return (
        <header
            className={`w-full sticky top-2 z-50 text-lg text-center transition-all duration-600 h-6 px-2`}
        >
            <div
                className={`flex items-center justify-between max-w-[1400px] mx-auto transition-all duration-400 ${scrolled
                    ? 'rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-md py-1 px-4'
                    : 'bg-transparent py-4 px-4'}`}
            >

                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tight flex items-center gap-2">
                    <Image
                        src="/images/favicon.webp"
                        width={50}
                        height={50}
                        alt="logo" />
                    Soham Kakkar
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6">
                    {navItems.map((item, index) => (
                        <motion.div
                            key={index}
                            animate={activeSection === item.label ? {
                                x: [0, -5, 5, -5, 5, 0]  // quick shake/vibrate on X axis
                            } : {
                                x: 0
                            }}
                            transition={{
                                type: 'tween',
                                stiffness: 300,
                                damping: 20,
                                duration: 0.8,
                                repeat: 0,
                            }}
                            className="cursor-pointer font-semibold capitalize text-muted-foreground"
                        >
                            <Link
                                key={item.href}
                                href={item.href}
                                className="transition-colors hover:text-foreground"
                            >
                                {item.label}
                            </Link>
                        </motion.div>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <div className="md:hidden hover:bg-accent/80 p-2 rounded-md cursor-pointer">
                    <div onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.aside
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="fixed top-16 right-0 w-[50vw] z-50 bg-background border-l border-border rounded-l-xl shadow-lg p-4 space-y-2 md:hidden"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.2, ease: 'easeIn' }}>
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-2 border-b border-border last:border-none"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </motion.div>
                    </motion.aside>
                )}
            </AnimatePresence>


        </header>
    )
}
