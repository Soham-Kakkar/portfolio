'use client';

import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { Button } from '../ui/button'
import { Card, CardContent } from '@/components/ui/card';

export default function MinAbout({ onInViewChange }: { onInViewChange: (visible: boolean) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const inView = useInView(ref, { amount: 'all', initial: false });

  useEffect(() => {
    onInViewChange(inView);
  }, [inView, onInViewChange]);

  return (
    <Card className='bg-[#123456]/50 backdrop-blur-md border border-white/20' ref={ref}>
      <CardContent>
        <h2 className="text-4xl font-semibold mb-2">About Me</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          I&apos;m a <strong>Full-Stack Developer</strong> focused on performance, clean architecture, and developer experience.
          <br /><br />
          🧠 B.Tech student at <strong>IIT Jammu</strong> with strong fundamentals and full-stack experience.
          <br /><br />
          🚀 I build fast, scalable apps that are both elegant and practical — and love diving into system design and DevEx.
        </p>

        <div className="mt-4">
          <Button size="sm" variant="outline" className="text-xs">
            Read More →
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
