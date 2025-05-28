import Hero from "@/pagesComponent/Main";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Soham Kakkar | Portfolio",
  description:
    "Welcome to my portfolio. I'm Soham, a developer with a passion for systems programming, web/app development, and cosmic curiosity.",
  openGraph: {
    description:
      "Developer portfolio of Soham Kakkar - exploring code, systems, and the cosmos.",
    url: "https://sohamkakkar.vercel.app",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
