'use client';

import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { Button } from '../ui/button'
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const projects = [
  {
    name: 'AstriaZa',
    shortDesc: 'A polished event portal built with React and Next.js, focused on user experience and responsive design.',
  },
  {
    name: 'Manomitra',
    shortDesc: 'The official mental wellbeing platform for IIT Jammu, featuring a clean, accessible frontend for student support.',
  },
  {
    name: 'MyNotes',
    shortDesc: 'A full-stack MERN note-taking app with user authentication and CRUD functionality.',
  },
];


export default function MInProjects({ onInViewChange }: { onInViewChange: (visible: boolean) => void }) {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, { amount: 'all', initial: false });

  useEffect(() => {
    onInViewChange(inView);
  }, [inView, onInViewChange]);


  return (
    <Card className='bg-[#234567]/50 backdrop-blur-md border border-white/20' ref={ref}>
      <CardContent>
        <h2 className="text-4xl font-semibold mb-2">Projects</h2>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {projects.map((project, index) => (
              <li key={index}>
                <strong>{project.name}</strong>: {project.shortDesc}
                <br />
              </li>
            ))}
          </ul>

        <div className="mt-4">
          <Button size="sm" variant="outline" className="text-xs">
            <Link href="/projects">
                View All Projects →
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>

  )
}
