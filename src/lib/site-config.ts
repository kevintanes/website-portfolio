export const siteConfig = {
  name: "Kevin Tanes",
  initials: "KT",
  email: "kevin.tanes@gmail.com",
  title: "Full-Stack Web Developer",
  tagline:
    "I build reliable software and clean, accessible interfaces that people actually enjoy using.",
  role: "Software Engineer",
  photo: {
    src: "/hero-photo.jpg",
    alt: "Portrait of Kevin Tanes",
  },
  resumeUrl: "/cv.pdf",
  bio: {
    label: "01 / BIO",
    heading: "The Philosophy",
    body: [
      "Full-stack web developer with hands-on experience across React, Next.js, Node.js, and TypeScript. I've led frontend architecture for a production marketing site — cutting load time by 35% — and built a multi-platform Learning Management System end-to-end, from data models to deployed UI.",
      "Outside of client work, I keep building side projects like BookEase to stay sharp on the latest tooling: Prisma, TanStack Query, shadcn/ui, and modern App Router patterns.",
    ],
  },
  navLinks: [
    { label: "01 / Bio", href: "#bio" },
    { label: "02 / Stack", href: "#stack" },
    { label: "03 / Work", href: "#work" },
    { label: "04 / Contact", href: "#contact" },
  ],
  socialLinks: [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Read.cv", href: "#" },
  ],
  builtWith: "Built with Next.js & Tailwind",
} as const;
