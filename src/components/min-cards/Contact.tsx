'use client';

import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FaLinkedin, FaXTwitter, FaEnvelope } from 'react-icons/fa6';

export default function MinContact({ onInViewChange }: { onInViewChange: (visible: boolean) => void; }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const inView = useInView(ref, { amount: 'all', initial: false });

  useEffect(() => {
    onInViewChange(inView);
  }, [inView, onInViewChange]);

  return (
    <Card
      ref={ref}
      className="bg-[#456789]/50 backdrop-blur-md border border-white/20"
    >
      <CardContent className="space-y-4">
        <h2 className="text-4xl font-semibold mb-2">Contact</h2>
        <div className="space-y-3 text-sm flex items-center justify-between mx-auto">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-300 transition-colors"
          >
            <FaLinkedin className="w-[2rem] h-[2rem]" />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:your.email@example.com"
            className="flex items-center gap-2 hover:text-blue-300 transition-colors"
          >
            <FaEnvelope className="w-[2rem] h-[2rem]" />
            <span>Email</span>
          </a>

          <a
            href="https://meet.google.com/your-meeting-code"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-300 transition-colors"
          >
            <FaXTwitter className="w-[2rem] h-[2rem]" />
            <span>X (Twitter)</span>
          </a>
        </div>
        
        {/* Contact Form */}
        <form
          action="https://formsubmit.co/5466c9b738c8f4b7be30a8caf0d12fb0"
          method="POST"
          className="space-y-3"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/30 placeholder:text-white/50 text-white text-sm"
          />

          <textarea
            name="message"
            required
            placeholder="Your message"
            className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/30 placeholder:text-white/50 text-white text-sm h-28 resize-none"
          ></textarea>

          <Button size="sm"
            variant="outline"
            type="submit"
          >
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
