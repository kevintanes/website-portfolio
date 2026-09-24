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
  stack: {
    label: "02 / STACK",
    heading: "Technologies & Tools",
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
    label: "03 / CASE STUDIES",
    heading: "Featured Projects",
    items: [
      {
        title: "BookEase",
        description:
          "Full-stack service booking platform — end-to-end booking flow with slot selection, booking summary, and Xendit payment integration.",
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
        title: "Sales Management System",
        description:
          "Sales management dashboard with custom JWT auth and Server/Client Component architecture per Next.js App Router.",
        image: "/projects/sales-management.png",
        tags: ["Next.js 16", "TypeScript", "shadcn/ui", "Supabase", "Prisma"],
        liveUrl: null,
        githubUrl: "https://github.com/kevintanes/sales-management-system",
      },
    ],
  },
  experience: {
    label: "04 / TIMELINE",
    heading: "Work Experience",
    items: [
      {
        period: "AUG 2025 — SEP 2026",
        role: "Quality Assurance Engineer",
        company: "Pegatron",
        description:
          "Supported production quality checks and cross-functional coordination with engineering and production teams to ensure on-time, defect-free product shipment.",
      },
      {
        period: "MAR 2025 — JUN 2025",
        role: "Frontend Developer",
        company: "PT Cheil Worldwide Indonesia",
        description:
          "Led development of a new marketing website using Vite, React, TypeScript, and shadcn/ui, reducing initial load time by 35%. Decoupled a monolithic backend/frontend for independent deployment.",
      },
      {
        period: "AUG 2023 — AUG 2024",
        role: "Fullstack Web Developer",
        company: "PT. Purwadhika Kirana Nusantara",
        description:
          "Led development of the Purwadhika Main Website and a multi-platform Learning Management System, building responsive interfaces with React, Next.js, and TanStack Query on an Express/Sequelize/Strapi backend.",
      },
    ],
  },
  contact: {
    label: "05 / CONTACT",
    heading: "Say Hello",
    body: "I'm always open to new opportunities, freelance work, or just a good conversation about building software. Feel free to reach out",
  },
  navLinks: [
    { label: "01 / Bio", href: "#bio" },
    { label: "02 / Stack", href: "#stack" },
    { label: "03 / Projects", href: "#projects" },
    { label: "04 / Work", href: "#work" },
    { label: "05 / Contact", href: "#contact" },
  ],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/kevintanes" },
    { label: "LinkedIn", href: "#" }, // TODO: isi URL LinkedIn asli
  ],
  builtWith: "Built with Next.js & Tailwind",
} as const;
