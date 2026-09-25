export const profile = {
  name: "Suryaprasath P",
  shortName: "Surya",
  role: "Backend & Full-Stack Software Engineer",
  location: "Namakkal, Tamil Nadu, India",
  email: "suryaprasath41@gmail.com",
  phone: "+91 93619 52459",
  linkedin: "https://linkedin.com/in/suryaprasath-palaniappan",
  github: "https://github.com/Suryaprasath-41",
  summary:
    "Computer Science & Business Systems undergraduate with hands-on backend and full-stack development experience across Python, JavaScript, and Java. Proven track record building production-ready features during internships, including database design, query optimization, and REST API development. Independently built three end-to-end applications spanning secure voting systems, real-time messaging, and full-stack web development. Strong foundation in MySQL/SQLite, React.js, Node.js, and Flask, with a growing focus on secure, scalable backend systems.",
};

export const skills = {
  Languages: ["Java", "Python", "C (Basic)"],
  Backend: ["Node.js", "Flask", "FastAPI", "REST APIs"],
  Frontend: ["HTML5", "CSS3", "React.js", "Bootstrap"],
  Databases: ["MySQL", "SQLite", "JSON"],
  Tools: ["Git", "VS Code", "MS Office"],
  Other: ["Prompt Engineering", "AI-Assisted Dev", "CRUD", "Agile"],
};

export const experience = {
  company: "Dwinsoft Technologies India Pvt. Ltd.",
  role: "Backend Development Intern",
  period: "Dec 2024 – Jan 2025",
  bullets: [
    "Developed backend modules and optimized SQL queries using Python and MySQL, improving application response time and data retrieval efficiency.",
    "Designed and maintained relational database schemas, applying query optimization techniques to strengthen backend performance.",
    "Collaborated with the development team to build and integrate production-ready application features, contributing to overall backend architecture.",
  ],
};

/* ──────────────────────────────────────────────────────────────
   SINGLE SOURCE OF TRUTH — every project referenced anywhere in
   the portfolio flows through this array.
   • github  — left empty (not invented) if no repo is known.
   • live    — left empty if there is no public deployment.
   • image   — path under /uploads/ (served from public/).
   • featured — appears first (the headline trio).
   • accent  — color theme for the card.
   ────────────────────────────────────────────────────────────── */
export const projects = [
  {
    id: "01",
    slug: "online-voting-system",
    title: "Online Voting System",
    category: "Full-Stack",
    status: "Live",
    stack: ["Node.js", "Express.js", "MySQL", "HTML", "CSS", "JavaScript"],
    description:
      "Built a secure online voting platform enabling registered voters to cast votes remotely with unique voter authentication and one-vote-per-user integrity.",
    features: [
      "Designed a MySQL-backed database schema for managing voter, candidate, and election data, with an admin panel for election setup and management.",
      "Implemented real-time vote tallying and result display using Express.js REST APIs to ensure transparent, accurate election outcomes.",
      "Enforced one-vote-per-user integrity with server-side checks and unique voter authentication tokens.",
    ],
    problem:
      "Conducting elections digitally without sacrificing voter integrity or transparent tallying.",
    solution:
      "Express.js REST APIs backed by a normalised MySQL schema, an admin panel for election setup, and live result aggregation surfaced through REST endpoints.",
    architecture: [
      "Express.js REST API layer",
      "MySQL relational schema (voters, candidates, elections, votes)",
      "Admin panel for election setup",
      "Server-side vote validation & idempotency",
    ],
    github: "https://github.com/Suryaprasath-41/Online-Voting-System",
    live: "https://online-voting-system-0jeh.onrender.com",
    image: "/uploads/project-voting.svg",
    accent: "amber" as const,
    featured: true,
    repoSource: "verified via GitHub API",
  },
  {
    id: "02",
    slug: "openchat",
    title: "OpenChat — Real-Time Chat",
    category: "Full-Stack",
    status: "Live",
    stack: ["Flask", "Node.js", "MySQL"],
    description:
      "Developed a real-time, multi-user chat application with a responsive interface and backend services for messaging and session management.",
    features: [
      "Integrated a MySQL database layer for efficient storage and retrieval of user and message data.",
      "Multi-user messaging with session-based authentication.",
      "Responsive interface supporting concurrent conversations.",
    ],
    problem:
      "Real-time multi-user messaging with reliable persistence and session management.",
    solution:
      "A Flask + Node.js backend with a MySQL persistence layer and session-based authentication supporting multiple concurrent users.",
    architecture: [
      "Flask backend (session + auth)",
      "Node.js realtime layer",
      "MySQL users / messages schema",
    ],
    github: "https://github.com/Suryaprasath-41/openchat",
    live: "https://openchat1.genrecai.com",
    image: "/uploads/project-openchat.svg",
    accent: "teal" as const,
    featured: true,
    repoSource: "verified via GitHub API",
  },
  {
    id: "03",
    slug: "student-feedback-system",
    title: "Student Feedback System",
    category: "Full-Stack",
    status: "Live",
    stack: ["Flask", "SQLite", "HTML", "CSS", "JavaScript", "Bootstrap"],
    description:
      "Built a full-stack web application for collecting and managing student feedback, with complete CRUD operations and session handling.",
    features: [
      "Designed a responsive UI and structured a SQLite data layer to support reliable feedback storage and retrieval.",
      "Full CRUD operations on feedback records with role-aware session handling.",
      "Deployed to a real institutional domain (VSBEC).",
    ],
    problem:
      "Collecting and managing student feedback reliably for a college with minimal ops overhead.",
    solution:
      "A Flask + SQLite full-stack app with Bootstrap UI, complete CRUD on feedback, and session-based role handling — deployed on the college domain.",
    architecture: [
      "Flask app + Jinja templates",
      "Bootstrap responsive UI",
      "SQLite persistence",
      "Session-based role handling",
    ],
    github: "https://github.com/Suryaprasath-41/Feedback-System",
    live: "https://feedback.vsbec.edu.in",
    image: "/uploads/project-feedback.svg",
    accent: "rust" as const,
    featured: true,
    repoSource: "verified via GitHub API",
  },
  {
    id: "04",
    slug: "api-security-review-agent",
    title: "API Security Review Agent",
    category: "AI / DevSecOps",
    status: "Open Source",
    stack: ["Python", "FastAPI", "Streamlit", "LangGraph", "SQLite", "OpenAPI"],
    description:
      "AI-powered DevSecOps tool that analyzes OpenAPI (Swagger) specifications to detect API security vulnerabilities, maps findings to the OWASP API Security Top 10, calculates risk scores, and uses an LLM to generate explanations and remediation recommendations.",
    features: [
      "Parses OpenAPI specs and statically analyzes endpoints for common API vulnerabilities.",
      "Maps findings to the OWASP API Security Top 10 with risk scoring.",
      "LLM-generated explanations and actionable remediation recommendations.",
    ],
    problem:
      "Reviewing an API surface for security issues is slow, manual, and inconsistent across teams.",
    solution:
      "An agentic pipeline that ingests an OpenAPI spec, runs a static analyzer, maps findings to OWASP API Top 10, and explains each issue with an LLM.",
    architecture: [
      "FastAPI service",
      "Streamlit reviewer UI",
      "LangGraph orchestration",
      "SQLite cache + findings store",
      "OWASP API Top 10 mapping",
    ],
    github: "https://github.com/Suryaprasath-41/API-Security-Review-Agent",
    live: "",
    image: "/uploads/project-api-security.svg",
    accent: "teal" as const,
    featured: false,
    repoSource: "verified via GitHub API",
  },
  {
    id: "05",
    slug: "ai-competitor-analysis-agent",
    title: "AI Competitor Analysis Agent",
    category: "AI / Agents",
    status: "Open Source",
    stack: ["TypeScript", "AI Agents", "LLM"],
    description:
      "An AI agent that automates competitive analysis — gathering, structuring and summarising competitor information so product decisions are backed by signal instead of guesswork.",
    features: [
      "Automated competitor data gathering and structuring.",
      "LLM-driven summarisation tailored to a product brief.",
      "TypeScript codebase — type-safe agent orchestration.",
    ],
    problem:
      "Manual competitor research is slow and rarely repeatable.",
    solution:
      "An AI agent that gathers, structures, and summarises competitor information against a product brief.",
    architecture: [
      "TypeScript agent runtime",
      "LLM summarisation",
      "Structured competitor output",
    ],
    github: "https://github.com/Suryaprasath-41/AI-Competitor-Analysis-Agent",
    live: "",
    image: "/uploads/project-ai-competitor.svg",
    accent: "amber" as const,
    featured: false,
    repoSource: "verified via GitHub API",
  },
  {
    id: "06",
    slug: "smart-road-finder",
    title: "Smart Road Finder",
    category: "Algorithms",
    status: "Open Source",
    stack: ["JavaScript", "Graph Algorithms", "Dijkstra"],
    description:
      "Developed a Smart Route Finder using graph algorithms like Dijkstra to compute shortest paths. Implemented adjacency list representation and priority queues to optimize performance. Designed a system capable of handling dynamic weights and real-time route updates.",
    features: [
      "Dijkstra's shortest-path algorithm over a weighted graph.",
      "Adjacency list representation with priority-queue-driven performance.",
      "Supports dynamic edge weights and real-time route updates.",
    ],
    problem:
      "Computing reliable shortest paths with support for changing edge weights.",
    solution:
      "A graph-based route finder using Dijkstra with an adjacency list + priority queue for performance, designed for dynamic weights.",
    architecture: [
      "Weighted graph + adjacency list",
      "Priority queue (Dijkstra)",
      "Dynamic weight updates",
      "Real-time route recomputation",
    ],
    github: "https://github.com/Suryaprasath-41/Smart-Road-Finder",
    live: "",
    image: "/uploads/project-roadfinder.svg",
    accent: "amber" as const,
    featured: false,
    repoSource: "verified via GitHub API",
  },
  {
    id: "07",
    slug: "campusos",
    title: "CampusOS",
    category: "Full-Stack",
    status: "Open Source",
    stack: ["TypeScript"],
    description:
      "CampusOS — a campus operations platform concept built in TypeScript, exploring how student-facing college workflows (schedules, services, requests) can be unified behind a single system.",
    features: [
      "TypeScript codebase targeting campus workflows.",
      "Modular structure ready for student schedules, services and requests.",
      "Foundation for a unified campus experience layer.",
    ],
    problem:
      "College student workflows live in disconnected tools and paper flows.",
    solution:
      "A TypeScript-based campus operations platform unifying schedules, services and requests.",
    architecture: [
      "TypeScript app shell",
      "Modular feature surfaces",
      "Prepared for student schedules, services, requests",
    ],
    github: "https://github.com/Suryaprasath-41/CampusOS",
    live: "",
    image: "/uploads/project-campusos.svg",
    accent: "teal" as const,
    featured: false,
    repoSource: "verified via GitHub API",
  },
  {
    id: "08",
    slug: "ai-resume-insight-system",
    title: "AI Resume Insight System",
    category: "AI / NLP",
    status: "Open Source",
    stack: ["TypeScript", "LLM", "NLP"],
    description:
      "AI-driven system that surfaces structured, useful insights from resumes — built so recruiters and candidates get actionable signal instead of walls of text.",
    features: [
      "LLM-driven insight extraction from resumes.",
      "Structured output suitable for downstream filtering or matching.",
      "TypeScript end-to-end for type-safe pipelines.",
    ],
    problem:
      "Resumes are unstructured text — extracting useful signal is slow.",
    solution:
      "An AI pipeline that parses resumes and emits structured insights suitable for downstream filtering or matching.",
    architecture: [
      "Resume parsing",
      "LLM insight extraction",
      "Structured output (TypeScript)",
    ],
    github: "https://github.com/Suryaprasath-41/AI-Resume-Insight-System",
    live: "",
    image: "/uploads/project-resume-insight.svg",
    accent: "rust" as const,
    featured: false,
    repoSource: "verified via GitHub API",
  },
  {
    id: "09",
    slug: "luminaiq",
    title: "Luminaiq",
    category: "AI / Python",
    status: "Open Source",
    stack: ["Python", "AI"],
    description:
      "Luminaiq — a Python AI project exploring intelligent querying and insight generation, part of a growing focus on AI-assisted developer tooling.",
    features: [
      "Python-first AI tooling.",
      "Intelligent querying / insight generation surface.",
      "Open-source and ready to extend.",
    ],
    problem:
      "Building AI tooling that turns raw data into usable insight.",
    solution:
      "A Python-based project focused on intelligent querying and insight generation.",
    architecture: ["Python", "AI pipelines"],
    github: "https://github.com/Suryaprasath-41/luminaiq",
    live: "",
    image: "/uploads/project-luminaiq.svg",
    accent: "teal" as const,
    featured: false,
    repoSource: "verified via GitHub API",
  },
];

export const clubs = [
  {
    title: "Cyber Security Club",
    org: "Dept. of Computer Science & Business Systems",
    body: "Active member contributing to department cyber security initiatives; built a Cyber Game project to make security concepts interactive and approachable.",
    repo: "https://github.com/Suryaprasath-41/Cyber-game",
    live: "https://cyber-game-g44y.onrender.com",
  },
];

export const education = [
  {
    school: "V.S.B. Engineering College, Karur",
    degree: "B.Tech — Computer Science & Business Systems",
    score: "CGPA 7.18",
    period: "Aug 2023 – May 2027",
  },
  {
    school: "Malar Matric Higher Secondary School",
    degree: "Higher Secondary (State Board)",
    score: "63%",
    period: "2022 – 2023",
  },
];

export const certs = [
  { name: "Full Stack Development", issuer: "NPTEL" },
  { name: "Java Foundation", issuer: "Infosys Springboard" },
];

export const languages = ["English", "Tamil"];