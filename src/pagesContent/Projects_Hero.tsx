'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SyntaxLine from '../components/EditorLines';
import projects from '@/data/projects';

export default function Project_Hero() {
    const [activeTab, setActiveTab] = useState(0);
    const [showToast, setShowToast] = useState(true);

    const [typingStates, setTypingStates] = useState<{
        [key: number]: {
            typedLines: string[];
            currentLine: string;
            lineIndex: number;
            wordIndex: number;
            done: boolean;
        };
    }>({});

    // Initialize typing state for tab if needed
    useEffect(() => {
        if (!projects[activeTab]) return;

        if (!typingStates[activeTab]) {
            setTypingStates(prev => ({
                ...prev,
                [activeTab]: {
                    typedLines: [],
                    currentLine: '',
                    lineIndex: 0,
                    wordIndex: 0,
                    done: false
                }
            }));
        }
    }, [activeTab, typingStates]);

    // Typing effect for active tab (word-wise)
    useEffect(() => {
        const state = typingStates[activeTab];
        if (!state || state.done) return;

        const linesToType = [
            `$TECH_STACK = { ${projects[activeTab].techStack.join(', ')} };`,
            '$DESCRIPTION = """',
            ...projects[activeTab].description.map(line => `  -  ${line}`),
            '""";',
        ];

        const { lineIndex, wordIndex = 0, typedLines } = state;

        if (lineIndex >= linesToType.length) {
            setTypingStates(prev => ({
                ...prev,
                [activeTab]: { ...prev[activeTab], done: true }
            }));
            return;
        }

        const currentFullLine = linesToType[lineIndex];
        const words = currentFullLine.split(' ');

        const timeout = setTimeout(() => {
            if (wordIndex < words.length) {
                setTypingStates(prev => ({
                    ...prev,
                    [activeTab]: {
                        ...prev[activeTab],
                        currentLine: words.slice(0, wordIndex + 1).join(' '),
                        wordIndex: wordIndex + 1
                    }
                }));
            } else {
                setTypingStates(prev => ({
                    ...prev,
                    [activeTab]: {
                        ...prev[activeTab],
                        typedLines: [...typedLines, currentFullLine],
                        currentLine: '',
                        lineIndex: lineIndex + 1,
                        wordIndex: 0
                    }
                }));
            }
        }, 10);

        return () => clearTimeout(timeout);
    }, [typingStates, activeTab]);


    return (
        <motion.div
            className="h-screen overflow-y-auto flex flex-col items-center justify-center bg-transparent z-20 p-4"
            style={{ fontFamily: `"ui-monospace", "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace` }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            {showToast && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-25 right-[5vw] bg-gray-900 text-green-400 text-sm px-4 py-2 rounded-lg shadow-lg flex items-center space-x-3 select-none"
                    style={{ transform: 'translateY(-110%)' }}
                    role="alert"
                >
                    <span>Tip: Click tabs to switch projects.</span>
                    <button
                        onClick={() => setShowToast(false)}
                        className="text-green-400 hover:text-green-600 focus:outline-none cursor-pointer"
                        aria-label="Close tip"
                    >
                        ✕
                    </button>
                </motion.div>
            )}

            <div className="rounded-lg shadow-lg h-[calc(100vh-192px)] border border-gray-700 bg-[#1e1e1e] overflow-hidden select-text w-[90vw] max-w-[90vw] min-w-[320px]">
                <div className="flex items-center gap-3 px-4 py-2 bg-[#2a2a2a] border-b border-gray-700">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>

                <div className="flex border-b border-gray-700 bg-[#252526] h-10 overflow-x-auto">
                    {projects.map((proj, i) => (
                        <button
                            key={proj.name}
                            onClick={() => setActiveTab(i)}
                            className={`flex-1 px-4 py-2 min-w-fit text-sm font-semibold select-none whitespace-nowrap overflow-hidden 
                                    ${i === activeTab
                                    ? 'bg-[#1e1e1e] text-white border-b-2 border-blue-500 cursor-default'
                                    : 'text-gray-400 hover:text-white cursor-pointer'
                                }`}
                        >
                            {proj.name}
                        </button>
                    ))}
                </div>

                <div className="flex flex-col py-5 space-y-0.5 text-sm leading-tight overflow-y-auto text-green-400 bg-[#1e1e1e] font-mono h-[calc(100%-10rem)]" style={{ fontFamily: `"ui-monospace", "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace` }}>
                    {typingStates[activeTab]?.typedLines.map((line, i) => (
                        <span key={i}><SyntaxLine line={line} lineNumber={i + 1} /><br /></span>
                    ))}
                    {!typingStates[activeTab]?.done && typingStates[activeTab]?.currentLine && (
                        <SyntaxLine line={typingStates[activeTab].currentLine} lineNumber={typingStates[activeTab].lineIndex + 1} />
                    )}
                    <span className="inline-block w-1 h-4 ml-10 bg-green-400 animate-pulse" />
                </div>

                <div className="px-6 py-4 bg-[#252526] border-t border-gray-700 flex gap-6 items-center select-none min-h-24">
                    {(projects[activeTab].liveUrl || projects[activeTab].githubUrl) &&
                        <span className="text-gray-300 font-semibold">{projects[activeTab].name}:</span>}
                    {projects[activeTab].liveUrl && (
                        <a href={projects[activeTab].liveUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-white text-white text-sm font-medium">
                            Live Demo
                        </a>
                    )}
                    {projects[activeTab].githubUrl && (
                        <a href={projects[activeTab].githubUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-white text-white text-sm font-medium">
                            GitHub Repo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
