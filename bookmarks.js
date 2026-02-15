const bookmarks = [
  {
    id: crypto.randomUUID(),
    url: "https://nextjs.org",
    title: "Next.js",
    description: "React framework",
    tags: ["frontend"],
    createdAt: new Date().toISOString(),
  },
  {
    id: crypto.randomUUID(),
    url: "https://nodejs.org",
    title: "Node.js",
    description: "JavaScript runtime",
    tags: ["backend"],
    createdAt: new Date().toISOString(),
  },
];

export default bookmarks;