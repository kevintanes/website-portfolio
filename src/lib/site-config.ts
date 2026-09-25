export const siteConfig = {
  name: "Kevin Tanes",
  initials: "KT",
  email: "kevin.tanes@gmail.com",
  photo: {
    src: "/hero-photo.jpg",
  },
  resumeUrl: "/cv.pdf",
  stack: {
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "Prisma",
      "TanStack Query",
      "shadcn/ui",
    ],
  },
  projects: {
    items: [
      {
        id: "bookease",
        image: "/projects/bookease.png",
        tags: [
          "React",
          "TypeScript",
          "Vite",
          "Tailwind CSS",
          "shadcn/ui",
          "Express.js",
          "Prisma",
          "MySQL",
        ],
        liveUrl: "https://bookease-kevintanes.vercel.app/",
        githubUrl: "https://github.com/kevintanes/booking-ease-frontend",
      },
      {
        id: "sales-management",
        image: "/projects/sales-management.png",
        tags: ["Next.js 16", "TypeScript", "shadcn/ui", "Supabase", "Prisma"],
        liveUrl: null,
        githubUrl: "https://github.com/kevintanes/sales-management-system",
      },
    ],
  },
  experience: {
    items: [
      {
        id: "pegatron",
        company: "Pegatron",
        start: "2025-08",
        end: "2026-09",
      },
      {
        id: "cheil",
        company: "PT Cheil Worldwide Indonesia",
        start: "2025-03",
        end: "2025-06",
      },
      {
        id: "purwadhika",
        company: "PT. Purwadhika Kirana Nusantara",
        start: "2023-08",
        end: "2024-08",
      },
    ],
  },
  navLinks: [
    { id: "bio", href: "#bio" },
    { id: "stack", href: "#stack" },
    { id: "projects", href: "#projects" },
    { id: "work", href: "#work" },
    { id: "contact", href: "#contact" },
  ],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/kevintanes" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kevintanes/" },
  ],
} as const;
