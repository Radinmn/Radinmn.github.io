import { FaGithub } from "react-icons/fa"
import { PiLinkSimpleBold } from "react-icons/pi"

export const PROJECTS = [
  {
    title: "Tweed Grow To Win 1 & 2",
    description:
      "Promotional games developed in collaboration with Tweed and Bottlecap Media, Toronto. Designed gameplay inspired by 'Among Us,' where users navigate a plant growing facility, complete tasks, and ensure the plants thrive. Engineered a robust score tracking system that securely stores users' achievements on AWS servers and facilitates weekly performance accolades.",
    image: "/tweed-game.jpg", // Replace with the path to your project's image
    tags: ["Game Development", "AWS", "Collaboration", "2022-2023"],
    links: [
      {
        name: "Project Details",
        url: "https://example.com/project-details", // Replace with your project's URL
        icon: PiLinkSimpleBold,
      },
      {
        name: "Github Repository",
        url: "https://github.com/yourusername/tweed-grow-to-win", // Replace with your project's GitHub URL
        icon: FaGithub,
      },
    ],
  },
  {
    title: "Markdown Web Editor",
    description: "A Simple and Straightforward Markdown Web Editor",
    image: "/markwriter.jpg",
    tags: ["React", "Next.js", "Codemirror", "ChakraUI"],
    links: [
      {
        name: "Preview",
        url: "https://markwriter.vercel.app/",
        icon: PiLinkSimpleBold,
      },
      {
        name: "Github",
        url: "https://github.com/slydragonn/markwriter",
        icon: FaGithub,
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
