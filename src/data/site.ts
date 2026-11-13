import type { ImageMetadata } from "astro";

import hanziU from "../assets/earlier/hanzi-u.jpg";
import catchMe from "../assets/earlier/catch-me-if-you-can.jpg";
import burnReads from "../assets/earlier/burn-reads.png";

/** Who this site is about. Edit here and it changes everywhere. */
export const PROFILE = {
  name: "Nick Richard",
  fullName: "Nicholas Richard",
  role: "Full-stack developer",
  email: "nrich414@gmail.com",
  github: "https://github.com/rickynich",
  linkedin: "https://www.linkedin.com/in/nicholas-richard-77a9a066/",
  description:
    "Nick Richard is a full-stack developer who designs, builds and ships whole products, from the server to the iPhone app. Currently building Hanzi Rivals, a Chinese vocab game you play with friends.",
} as const;

export const HANZI_RIVALS = {
  name: "Hanzi Rivals",
  url: "https://hanzirivals.com",
  domain: "hanzirivals.com",
  tagline: "A Chinese vocab game you play with friends, one turn at a time, over text.",
  year: "2026",
  platforms: ["Web", "iPhone", "iMessage"],
  stack: ["TypeScript", "React 19", "Vite", "Node + Express 5", "SQLite", "Capacitor", "Swift", "Fly.io"],
} as const;

export type EarlierProject = {
  name: string;
  year: string;
  team: string;
  summary: string;
  stack: string[];
  source: string;
  image: ImageMetadata;
  imageAlt: string;
};

/** Projects from 2021. Their demos ran on Heroku's free tier, which ended in 2022, so these link to source. */
export const EARLIER: EarlierProject[] = [
  {
    name: "Hanzi U",
    year: "2021",
    team: "Solo",
    summary:
      "The first try at a Chinese learning app: character decks ordered by how often each character appears, with quizzes to track progress.",
    stack: ["React", "Chakra UI", "Flask", "PostgreSQL"],
    source: "https://github.com/rickynich/Hanzi-U",
    image: hanziU,
    imageAlt: "Hanzi U landing page: a photo of paper lanterns above the heading 'Welcome to Hanzi U!'",
  },
  {
    name: "Catch Me If You Can",
    year: "2021",
    team: "Team of 4",
    summary:
      "Draw a walking, biking or running route on a map, then race your rivals' times on it. Every route has its own leaderboard.",
    stack: ["React", "Redux", "Flask", "PostgreSQL", "Mapbox"],
    source: "https://github.com/Kbart2401/Catch-me-if-you-can",
    image: catchMe,
    imageAlt: "Catch Me If You Can's Create Route screen: a loop drawn on a map of Brooklyn",
  },
  {
    name: "Burn Reads",
    year: "2021",
    team: "Team of 3",
    summary:
      "Goodreads, inverted: search for the books you can't stand, shelve them as kindling and leave fiery reviews.",
    stack: ["React", "Express", "Sequelize", "PostgreSQL", "Google Books API"],
    source: "https://github.com/pgjessee/burn-reads",
    image: burnReads,
    imageAlt: "Burn Reads landing page: 'Welcome to BurnReads' over a candle flame",
  },
];

export const TOOLBOX: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "Swift", "SQL", "HTML & CSS"] },
  { group: "Front end", items: ["React", "Vite", "Astro", "Redux", "Web Audio", "Canvas & SVG"] },
  { group: "Back end", items: ["Node & Express", "Flask", "SQLite", "PostgreSQL", "REST APIs"] },
  { group: "Mobile", items: ["Capacitor", "iMessage apps", "Installable web apps"] },
  { group: "Shipping", items: ["Fly.io", "Docker", "GitHub Actions", "Git"] },
];
