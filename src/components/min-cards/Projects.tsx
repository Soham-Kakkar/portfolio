'use client';

import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { Button } from '../ui/button'
import { Card, CardContent } from '@/components/ui/card';

const projects = [
  {
    name: 'DotSlash',
    shortDesc: 'A developer-friendly chat app with markdown, code editing, and scalable message storage.',
  },
  {
    name: 'IITJ Wellbeing Platform',
    shortDesc: 'A mental health portal for IIT Jammu with chatbot and resources, optimized for all devices.',
  },
  {
    name: 'CodeOrb',
    shortDesc: 'An early-stage collaborative coding tool with real-time editing and team dashboards.',
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
            View All Projects →
          </Button>
        </div>
      </CardContent>
    </Card>

  )
}
