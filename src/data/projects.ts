const projects = [
    {
        name: 'Astria-Za',
        techStack: ['Next.js', 'TypeScript', 'Google Apps Script', 'Three.js'
        ],
        description: [
            `Official website of IIT Jammu's Astronomy Club, designed to feel like a space-themed experience.`,
            'Built with Next.js and TypeScript for performance and scalability.',
            'Starfield animation using Three.js adds immersive depth without impacting performance.',
            'Custom backend built entirely on Google Apps Script, with seamless Google Sheets integration.',
            'No-code form builder tool lets club admins create and manage event forms in seconds — no deployments needed.',
            'Authentication limited to IIT Jammu users using domain-restricted Google sign-in.',
            'Deployed via Vercel for lightning-fast loading and global CDN support.'
        ],
        liveUrl: 'https://astriaza.vercel.app',
        githubUrl: 'https://github.com/Soham-Kakkar/Astria-Za'
    },
    {
        name: 'MyNotes',
        techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'TypeScript', 'JWT'
        ],
        description: [
            'A secure, full-stack note-taking app with real-time sync and cloud storage.',
            'Built using the MERN stack with TypeScript for type safety and clean code architecture.',
            'Authentication handled via JWT and cookies, secured with bcrypt hashing.',
            'Advanced rate limiting and logging system in place to prevent abuse and track usage.',
            'Supports creating, editing, and deleting notes with autosave functionality.',
            'Optimized API routes with proper error handling, status codes, and scalable folder structure.',
            'Designed with a clean, distraction-free UI for productive writing.'
        ],
        liveUrl: 'https://mynotes-94s8.onrender.com',
        githubUrl: 'https://github.com/Soham-Kakkar/MyNotes'
    },
    {
        name: 'Manomitra',
        techStack: ['HTML', 'CSS', 'JavaScript'
        ],
        description: [
            'Mental wellbeing site developed for IIT Jammu, launched on World Mental Health Day.',
            'Integrated a responsive AI chatbot for real-time student support, available 24/7.',
            'UI design was kept calming and accessible, with smooth mobile-first responsiveness.',
            'Optimized for performance and accessibility, even on lower-end devices.',
            'Built under a strict deadline as part of a campus-wide initiative in collaboration with faculty.',
            'Deployed using Vercel, with focus on fast loading and reliability across networks.'
        ],
        liveUrl: 'https://manomitra-iit-jammu.vercel.app',
        githubUrl: 'https://github.com/Soham-Kakkar/IIT-J-Mental-Health-Project'
    },
    {
        name: 'And More Loading...',
        techStack: ['Coming Soon'
        ],
        description: [
            '🚀 DotSlash — a developer-first chat platform that blends productivity with performance. Markdown-friendly, image+file support, VS Code plugin integration, and blazing-fast syncing between active and archived databases.',
            '🧠 A custom programming language — from syntax rules to interpreter logic, this project explores language design and systems programming from the ground up.',
            'More ideas are always brewing. Stay tuned!'
        ],
        liveUrl: '',
        githubUrl: ''
    }
];

export default projects;
