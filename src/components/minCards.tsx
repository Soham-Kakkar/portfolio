'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

type Props = {
  title: string;
  content: string;
  link: string;
  highlightSection: string;
};

export default function PreviewCard({ title, content, link, highlightSection }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="bg-muted text-foreground p-6 rounded-xl shadow-lg transition-all"
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-sm leading-relaxed">{content}</p>
      <Link
        href={link}
        className="inline-block mt-4 text-blue-500 font-medium hover:underline"
      >
        Read more →
      </Link>
    </motion.div>
  );
}
