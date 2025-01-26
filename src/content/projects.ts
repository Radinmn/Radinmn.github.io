import { FaGithub } from "react-icons/fa"
import { PiLinkSimpleBold } from "react-icons/pi"

export const PROJECTS = [
  {
    title: "Tweed Grow To Win 1 & 2 - Promotional Games",
    description:
      "Web collaboration with Tweed and Bottlecap Media. Designed gameplay akin to 'Among Us,' where users navigate a plant growing facility, complete tasks, and ensure the plants thrive. Engineered a robust score tracking system, securely storing users’ achievements on AWS servers, and facilitating weekly performance accolades.",
    image: "/neovim.jpg",
    tags: [
      "Game Development",
      "AWS",
      "Collaboration",
      "2022 - 2023",
      "Published",
    ],
    links: [
      {
        name: "Details",
        url: "https://example.com/project-details", // Replace with your project link
        icon: PiLinkSimpleBold,
      },
    ],
  },
  {
    title: "Trajic Traffic",
    description:
      "A dynamic p5.js game where players navigate a car through a bustling city filled with traffic and construction zones. Players dodge obstacles, avoid collisions, and aim for high scores while adapting to increasing difficulty levels. Featuring smooth animations, collision detection, and speed adjustments for engaging gameplay.",
    image: "/markwriter.jpg",
    tags: ["p5.js", "Game Development", "JavaScript", "Interactive"],
    links: [
      {
        name: "Code",
        url: "https://editor.p5js.org/Radinm/sketches/WfRTLCExX", // Replace with your GitHub repo link
        icon: FaGithub,
      },
      {
        name: "Live Demo",
        url: "https://editor.p5js.org/Radinm/sketches/WfRTLCExX", // Replace with your live project link
        icon: PiLinkSimpleBold,
      },
    ],
  },
  {
    title: "Landing Page",
    description: "Landing page for entrepreneurship competition",
    image: "/blueriver.jpg",
    tags: ["JavaScript", "Next.js"],
    links: [
      {
        name: "Preview",
        url: "https://blue-river.vercel.app/",
        icon: PiLinkSimpleBold,
      },
    ],
  },
  {
    title: "My Portfolio templates",
    description: "Free to use templates for the Astro Themes repository.",
    image: "/portfolios.png",
    tags: ["Astro", "TypeScript", "React", "Tailwind CSS"],
    links: [
      {
        name: "minimalist-dragon",
        url: "https://astro.build/themes/details/minimalist-dragon/",
        icon: PiLinkSimpleBold,
      },
      {
        name: "alogocode",
        url: "https://astro.build/themes/details/alogocode/",
        icon: PiLinkSimpleBold,
      },
    ],
  },
]
