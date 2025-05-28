import Contact from '@/pagesComponent/Contact'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Want to collaborate, connect, or just talk about code and stars? Reach out through this contact page.",
  openGraph: {
    description:
      "Reach out to Soham Kakkar for collaboration, questions, or conversations about development and beyond.",
    url: "https://sohamkakkar.vercel.app/contact",
  },
};
export default function ContactPage() {
  return (
    <Contact />
  )
}
