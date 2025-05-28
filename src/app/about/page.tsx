import About from '@/pagesComponent/About'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Me",
  description:
    "I'm Soham, a BTech student with interests spanning systems programming, DevEx, and the universe. Here's a little about my journey and mindset.",
  openGraph: {
    description:
      "Learn more about Soham Kakkar's background and developer philosophy.",
    url: "https://sohamkakkar.vercel.app/about",
  },
};
export default function AboutPage() {
  return (
    <About />
  )
}
