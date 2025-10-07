// Navigation items
export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "technologies", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

//Projects data
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with admin dashboard, payment integration, and real-time inventory management.",
    longDescription:
      "A comprehensive e-commerce platform built with Next.js and Node.js, featuring secure payment processing, real-time inventory tracking, admin dashboard, and customer management system. Includes advanced features like product recommendations, abandoned cart recovery, and analytics.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe", "AWS"],
    category: "Full-Stack",
    status: "Completed",
    github: "https://github.com",
    live: "https://demo.com",
    featured: true,
    stats: { stars: 127, forks: 45, views: 2300 },
    year: 2024,
  },
  {
    id: 2,
    title: "AI Task Manager",
    description:
      "Intelligent task management app with AI-powered priority suggestions and productivity analytics.",
    longDescription:
      "An AI-enhanced task management application that uses machine learning to suggest task priorities, predict completion times, and provide productivity insights. Built with React and Python, featuring natural language processing and data visualization.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800",
    technologies: ["React", "Python", "TensorFlow", "PostgreSQL"],
    category: "AI/ML",
    status: "In Progress",
    github: "https://github.com",
    live: "https://demo.com",
    featured: true,
    stats: { stars: 89, forks: 23, views: 1800 },
    year: 2024,
  },
  {
    id: 3,
    title: "Real-time Chat App",
    description:
      "Scalable chat application with video calls, file sharing, and end-to-end encryption.",
    longDescription:
      "A secure, real-time messaging platform supporting text, voice, and video communication. Features include end-to-end encryption, file sharing, group chats, and presence indicators. Built with modern web technologies and WebRTC.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800",
    technologies: ["React", "Node.js", "Socket.io", "WebRTC"],
    category: "Web App",
    status: "Completed",
    github: "https://github.com",
    live: "https://demo.com",
    featured: false,
    stats: { stars: 156, forks: 67, views: 3200 },
    year: 2023,
  },
  {
    id: 4,
    title: "Portfolio Dashboard",
    description:
      "Personal dashboard for tracking investments, expenses, and financial goals.",
    longDescription:
      "A comprehensive financial dashboard that aggregates data from multiple sources to provide insights into investment performance, spending patterns, and goal tracking. Features advanced charts and personalized recommendations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    technologies: ["Next.js", "TypeScript", "Recharts", "Firebase"],
    category: "Dashboard",
    status: "Completed",
    github: "https://github.com",
    featured: false,
    stats: { stars: 78, forks: 12, views: 980 },
    year: 2023,
  },
  {
    id: 5,
    title: "Learning Management System",
    description:
      "Complete LMS with course creation, progress tracking, and interactive assessments.",
    longDescription:
      "A full-featured learning management system allowing instructors to create courses, track student progress, and conduct assessments. Includes video streaming, interactive quizzes, and certification generation.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    category: "Education",
    status: "Completed",
    github: "https://github.com",
    live: "https://demo.com",
    featured: false,
    stats: { stars: 203, forks: 89, views: 4100 },
    year: 2023,
  },
];

// Filter categories
export const filterCategories = [
  "all",
  "featured",
  "Full-Stack",
  "AI/ML",
  "Web App",
  "Dashboard",
  "Education",
  "Mobile",
];
