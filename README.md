# Soham Kakkar — Portfolio

Welcome to the source code of my personal portfolio website: [soham-kakkar.netlify.app](https://soham-kakkar.netlify.app/).  
This site highlights my projects, skills, and experience as a developer with a passion for systems programming, web/app development, and AI/ML.

---

## ✨ Features

- **Smooth scroll animations** using Framer Motion  
- **Responsive design** with mobile-first layout  
- **Animated scroll indicator** for user-friendly mobile experience  
- **Custom Mac-style scrollbar** for visual consistency  
- **SEO-optimized meta data** and Open Graph tags  
- **Project showcase with pseudo-window UI**  
- **Contact page with ticket-style form + links section**  

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)  
- **Styling:** Tailwind CSS  
- **Animations:** Framer Motion  
- **Images:** Next.js Image Optimization  
- **Deployment:** [Netlify](https://www.netlify.com/)  

---

## 📂 Folder Structure

```
.
├── app/                 # Next.js app directory (Home, About, Projects, Contact)
├── components/          # Reusable UI components
├── public/              # Static assets (images, icons, etc.)
├── styles/              # Global styles and custom scrollbars
├── lib/                 # Utility functions (if any)
└── README.md
```

---

## 📄 Meta Configuration

Each page has custom SEO metadata:

```ts
export const metadata = {
  title: "Soham Kakkar — Portfolio",
  description: "Developer • Builder • Dreamer. Exploring systems, web, and AI/ML.",
  openGraph: {
    title: "Soham Kakkar — Portfolio",
    description: "Exploring systems, full-stack development, and the edge of what's possible.",
    url: "https://soham-kakkar.netlify.app/",
  },
};
```

---

## 🚀 Running Locally

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📬 Contact

Feel free to reach out via the contact page or any of the provided links (LinkedIn, GitHub, Calendly, etc.).

---

## 📘 License

This project is open-source under the [MIT License](LICENSE).
