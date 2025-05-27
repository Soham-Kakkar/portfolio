'use client';

import { useEffect, useState } from 'react';

const allTitles = [
  'Full-Stack Developer',
  'Performance Optimizer',
  'Software Developer',
  'System Thinker',
  'Lifelong Learner',
];

export default function TypewriterTitles() {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [fullText, setFullText] = useState('');
  const [hasStarted, setHasStarted] = useState(false);

  const typingSpeed = 60;
  const deletingSpeed = 30;
  const pauseTime = 1500;
  const initialDelay = 1300;

  // Set full text when title index changes
  useEffect(() => {
    setFullText(allTitles[index]);
  }, [index]);

  // Handle initial delay
  useEffect(() => {
    const delay = setTimeout(() => setHasStarted(true), initialDelay);
    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let timeout: NodeJS.Timeout;
    if (!isDeleting && charIndex < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (!isDeleting && charIndex === fullText.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % allTitles.length);
      }, initialDelay);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, fullText, hasStarted]);

  return (
    <p className="mt-4 text-lg md:text-xl text-muted-foreground font-mono min-h-[2.5rem]">
      {hasStarted && <>
                    I&apos;m a 
                    <span className="text-green-100"> {displayText}</span>
                    <span className="animate-pulse">|</span>
                    </>
      }
    </p>
  );
}
