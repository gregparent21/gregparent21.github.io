/*
  projects.js

  Each project object can optionally include a `media` array for images/videos.
  Media item schema (suggested):
    {
      type: 'image' | 'video',   // 'image' or 'video'
      src: string,               // relative path (see note) or absolute URL
      alt?: string,              // alt text for images
      caption?: string,          // short caption to show in a gallery or detail view
      poster?: string,           // (video) poster image path
      width?: number,            // optional width in px
      height?: number            // optional height in px
    }

  Notes on asset placement:
  - Easiest approach: put static assets in `public/` (e.g. `public/images/...`) and use `/images/your.png` as the `src`.
  - If you prefer to keep assets in `src/` (for example `src/data/`), import them from components (e.g. `import img from '../data/your.png'`) so the bundler includes them.
  - In this file we provide example `src` strings for local files (you can place them in `src/data/`) and also a remote placeholder to avoid build-time errors.
*/

export const projects = [
  {
    title: "Portfolio Optimizer",
    tech: ["Python", "Flask", "PostgreSQL", "TimescaleDB", "yfinance","BeautifulSoup", "Pandas", "NumPy"],
    desc: "A Flask-based portfolio optimization platform that fetches and stores large-scale stock data, computes financial indicators, and recommends portfolio adjustments using historical analytics and sector-level market data.",
    date: "Jan 2025",
    longDesc: "A web application that helps users optimize their investment portfolios using historical stock data. Built with Flask for the backend, TimescaleDB for time-series data storage, and yfinance for fetching financial data. Features include portfolio analysis, risk assessment, and performance visualization. ",
    media: [
      {
        type: 'video',
        src: '/images/portOptVideoDemo%20copy.mov',
        caption: 'Portfolio Optimizer - Early Video Demo'
      }
    ]
  },
  {
    title: "Personal Website",
    tech: ["JavaScript","HTML","CSS","React", "Vite", "Tailwind"],
    desc: "My personal portfolio website to showcase projects and skills.",
    repo: "https://github.com/gregparent21/gregparent21.github.io",
    live: "https://gregparent21.github.io/",
    date: "Oct 2025",
    longDesc: "This is my personal portfolio website built using React, Vite, and Tailwind CSS. It showcases my projects, skills, and experience as a developer. Thanks for visiting!"
  },
  {
    title: "KTP Website",
    tech: ["JavaScript", "React", "HTML", "CSS"],
    desc: "Cornell's Kappa Theta Pi chapter website",
    live: "https://ktpcornell.com/index.html",
    date: "Feb 2025",
    longDesc: "Designed and developed the website for Cornell's chapter of Kappa Theta Pi (KTP). Implemented member profiles, recruitment information, and event contact features."
  },
  {
    title: "OCaml Wordle",
    tech: ["OCaml"],
    desc: "Wordle in OCaml!",
    repo: "https://github.com/gregparent21/wordle_ocaml",
    date: "Sept 2025",
    longDesc: "A recreation of the NYTimes Wordle game in OCaml. A fun project to explore and practice functional programming."
  },
  {
    title: "Tetris Recreation",
    tech: ["Python", "Tkinter"],
    desc: "Reusable component library and documentation site.",
    repo: "https://github.com/gregparent21/tetris",
    longDesc: "My personal recreation of the classic Tetris game using Python and the Tkinter library. Features include easy controls, rotating, piece holding, scoring system, and increasing difficulty levels. A fun project to practice GUI development and game logic.",
    date: "Nov 2024",
    media: [
      {
        type: 'video',
        src: '/images/TetrisDemo.mov',
        caption: 'Gameplay demo - Tetris Recreation'
      }
    ]
  },
  {
    title: "Image Selector",
    tech: ["Java", "Swing"],
    desc: "Custom image cropping tool using automated edge detection.",
    longDesc: "Built an “Intelligent Scissors” image-selection tool in Java that automatically traces object boundaries by running Dijkstra’s shortest paths on a pixel graph. I implemented a heap-based min-priority queue, a generic shortest-paths engine, and a Swing based UI so long computations run smoothly with a live progress bar.",
    date: "Dec 2024",
    media: [
      {
        type: 'video',
        src: '/images/2110demo.mov',
        caption: 'Project Demo - Point to Point and Smart Select'
      }
    ]

  },
  {
    title: "Millenium (WIP)",
    tech: ["LLMs","MCPs"],
    desc: "Collaboration between Cornell FinTech Club and Millenium.",
    date: "Sept 2025 - Ongoing",
    longDesc: "The Cornell FinTech x Millennium Project is a year-long collaboration between the Cornell FinTech Club and the hedge fund Millennium to design and build a multi-agent financial AI system powered by large language models (LLMs). The system integrates Research, Analyst, and Trading agents that autonomously gather financial data, generate insights, and simulate trading strategies. The goal is to demonstrate how LLM-driven agents can automate the research-to-trading pipeline, improving speed, scalability, and decision-making in quantitative finance."
  }
]
