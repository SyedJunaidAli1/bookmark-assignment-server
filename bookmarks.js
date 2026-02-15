const bookmarks = [
  {
    id: crypto.randomUUID(),
    url: "https://nextjs.org",
    title: "Next.js",
    description: "Production-grade React framework",
    tags: ["frontend"],
    createdAt: new Date().toISOString(),
  },
  {
    id: crypto.randomUUID(),
    url: "https://nodejs.org",
    title: "Node.js",
    description: "Server-side JavaScript runtime",
    tags: ["backend"],
    createdAt: new Date().toISOString(),
  },
  {
    id: crypto.randomUUID(),
    url: "https://tailwindcss.com",
    title: "Tailwind CSS",
    description: "Utility-first CSS framework",
    tags: ["frontend", "tools"],
    createdAt: new Date().toISOString(),
  },
  {
    id: crypto.randomUUID(),
    url: "https://openai.com",
    title: "OpenAI",
    description: "AI research and deployment company",
    tags: ["ai"],
    createdAt: new Date().toISOString(),
  },
  {
    id: crypto.randomUUID(),
    url: "https://developer.mozilla.org",
    title: "MDN Web Docs",
    description: "Best web development documentation",
    tags: ["learning"],
    createdAt: new Date().toISOString(),
  },
];
export default bookmarks;
