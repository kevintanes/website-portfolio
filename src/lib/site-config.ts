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
  navLinks: [
    { label: "01 / About", href: "#about" },
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
