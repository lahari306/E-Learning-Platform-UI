const courses = [
  {
    id: 1,
    title: "React for Beginners",
    description: "Start building interactive user interfaces with React fundamentals.",
    thumbnail: "https://images.unsplash.com/photo-1523246191919-33f0146cb1d5?q=80&w=1200&auto=format&fit=crop",
    lessons: [
      { title: "Intro to React", duration: "6:32", youtubeId: "w7ejDZ8SWv8", summary: "What React is and why it's popular." },
      { title: "JSX & Components", duration: "9:12", youtubeId: "Ke90Tje7VS0", summary: "Learn JSX syntax and component basics." },
      { title: "Props & State", duration: "8:47", youtubeId: "35lXWvCuM8o", summary: "How data flows and updates in React." }
    ]
  },
  {
    id: 2,
    title: "Modern CSS with Tailwind",
    description: "Utility-first styling to ship beautiful UIs quickly.",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    lessons: [
      { title: "Tailwind Setup", duration: "7:05", youtubeId: "dFgzHOX84xQ", summary: "Install and configure Tailwind." },
      { title: "Layout & Spacing", duration: "10:21", youtubeId: "mr15Xzb1Ook", summary: "Build responsive layouts quickly." },
      { title: "Components & Patterns", duration: "12:03", youtubeId: "UBOj6rqRUME", summary: "Compose beautiful UI components." }
    ]
  },
  {
    id: 3,
    title: "JavaScript Essentials",
    description: "The language of the web from variables to async.",
    thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    lessons: [
      { title: "Variables & Types", duration: "5:44", youtubeId: "z4JUm0Bq9AM", summary: "Understand JS basics and data types." },
      { title: "Functions & Scope", duration: "9:18", youtubeId: "N8ap4k_1QEQ", summary: "How functions work and closures." },
      { title: "Promises & Async", duration: "11:40", youtubeId: "PoRJizFvM7s", summary: "Writing non‑blocking asynchronous code." }
    ]
  }
]

export default courses
