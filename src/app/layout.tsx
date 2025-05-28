import "./globals.css";
import AnimatedLayout from "@/components/AnimatedLayout";
import { Toaster } from "sonner";
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://localhost:3000'),
  applicationName: 'Soham Kakkar',
  title: {
    default: 'Soham Kakkar | Portfolio',
    template: '%s | Soham Kakkar'
  },
  description:
    'The portfolio website of Soham Kakkar — full-stack developer with a passion for scalable systems, intuitive UIs, and programming language design. Currently pursuing B.Tech at IIT Jammu.',
  openGraph: {
    title: 'Soham Kakkar — Developer Portfolio',
    description:
      'Explore the work of Soham Kakkar — a developer focused on building elegant interfaces, robust backends, and exploring systems programming.',
    url: 'https://localhost:3000',
    siteName: 'Soham Kakkar',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: '/images/favicon.webp' }]
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="dark">
              <noscript style={{display: 'flex', height: '100vh', width: '100vw', justifyContent: 'center', alignItems: 'center'}}>JavaScript is required</noscript>
        <AnimatedLayout bgImage="/images/bg.png">
          {children}
          <Toaster richColors />
        </AnimatedLayout>
      </body>
    </html>
  );
}
