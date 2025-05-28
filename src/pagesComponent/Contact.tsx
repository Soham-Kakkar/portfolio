'use client';

import ContactedToast from '@/components/contactedToast';
import { useState } from 'react';
import { FaLinkedin, FaXTwitter, FaGithub, FaEnvelope, FaCalendar } from 'react-icons/fa6';

const socialLinks = [
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/soham-kakkar' },
  { name: 'X', icon: FaXTwitter, url: 'https://twitter.com/sohamcodes' },
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/Soham-Kakkar' },
  { name: 'Email', icon: FaEnvelope, url: 'mailto:soham@example.com' },
  { name: 'Calendly', icon: FaCalendar, url: 'https://calendly.com/soham-codes' }
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="h-screen text-white px-6 md:px-12 py-16 flex flex-col mt-10 md:flex-row gap-10 font-mono">

      {/* Form Section */}
      <section className="w-full md:w-2/3 bg-[#161b22] border border-[#30363d] rounded-lg p-6 shadow-md h-fit">
        <h2 className="text-2xl font-semibold mb-6">Open a Contact Ticket</h2>

        <form
          action="https://formsubmit.co/5466c9b738c8f4b7be30a8caf0d12fb0"
          method="POST"
          className="space-y-6"
        >

          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://sohamkakkar.vercel.app/contact?contacted=true" />

          <div>
            <label htmlFor="name" className="block text-sm mb-1 text-gray-300">Your Name</label>
            <input
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-md bg-[#0d1117] border border-[#30363d] text-white focus:ring-2 focus:ring-blue-600 outline-none"
              placeholder="e.g. Soham Kakkar"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm mb-1 text-gray-300">Email</label>
            <input
              name="email"
              id="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-md bg-[#0d1117] border border-[#30363d] text-white focus:ring-2 focus:ring-blue-600 outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm mb-1 text-gray-300">Message</label>
            <textarea
              name="message"
              id="message"
              value={form.message}
              onChange={handleChange}
              rows={8}
              required
              className="w-full px-3 py-2 rounded-md bg-[#0d1117] border border-[#30363d] text-white focus:ring-2 focus:ring-blue-600 outline-none resize-y"
              placeholder="What's on your mind? (You can also write in Markdown)"
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-md transition-all cursor-pointer"
          >
            Submit Ticket
          </button>
          <ContactedToast />
        </form>
      </section>

      {/* Sidebar Section */}
      <aside className="w-full md:w-1/3 space-y-4 pb-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 shadow-md">
          <h3 className="text-lg font-semibold mb-3 text-gray-100">Find me online</h3>
          <ul className="space-y-2">
            {socialLinks.map(({ name, icon: Icon, url }) => (
              <li key={name}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-blue-400 hover:underline hover:text-blue-300 transition-all"
                >
                  <Icon className="w-4 h-4" />
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 shadow-md italic">
          <p className="text-sm text-gray-500">
    &sol;&sol; “All messages are stored in a Schrödinger&apos;s inbox — both read and unread until proven otherwise.” 🐱📨
          </p>
        </div>

      </aside>
    </main>
  );
}
