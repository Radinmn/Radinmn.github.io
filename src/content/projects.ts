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
