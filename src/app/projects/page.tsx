import Projects from '@/pagesComponent/Projects'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A showcase of selected projects across web, app, and systems development - including IIT Jammu collaborations and personal explorations.",
  openGraph: {
    description:
      "Explore projects by Soham Kakkar in web development, system programming, and more.",
    url: "http://localhost:3000",
  },
};
export default function ProjectsPage() {
  return (
    <Projects />    
)
}
