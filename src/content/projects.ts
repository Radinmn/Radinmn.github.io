import { FaGamepad, FaGithub } from "react-icons/fa"
import { PiLinkSimpleBold } from "react-icons/pi"

export const PROJECTS = [
  {
    title: "Tweed Grow To Win 1 & 2 - Promotional Games",
    description:
      "Web collaboration with Tweed and Bottlecap Media. Designed gameplay akin to 'Among Us,' where users navigate a plant growing facility, complete tasks, and ensure the plants thrive. Engineered a robust score tracking system, securely storing users’ achievements on AWS servers, and facilitating weekly performance accolades.",
    image: "/neovim.jpg",
    imageWidth: "700px",
    tags: ["Game Development", "Collaboration"],
    links: [
      {
        name: "Play In Browser",
        url: "https://roozbehmd.github.io/Tweed2/",
        icon: FaGamepad,
      },
    ],
  },

  {
    title: "Parallel Worlds: Human vs. Alien",
    description:
      "A creative comparison of an ordinary day in the lives of a human and an alien. This project was developed using Java and HTML, blending animation and storytelling to explore cultural and environmental contrasts.",
    video: "/video.mp4", // Video file path
    imageWidth: "700px",
    tags: ["Java", "HTML", "Storytelling"],
    links: [
      {
        name: "Code",
        url: "https://github.com/Radinmn/Parallel-Worlds", // Replace with your GitHub link
        icon: FaGithub,
      },
    ],
  },

  {
    title: "Trajic Traffic",
    description:
      "A dynamic p5.js game where players navigate a car through a bustling city filled with traffic and construction zones. Players dodge obstacles, avoid collisions, and aim for high scores while adapting to increasing difficulty levels.",
    image: "/markwriter.jpg",
    imageWidth: "400px",
    tags: ["p5.js", "Interactive"],
    links: [
      {
        name: "Code",
        url: "https://editor.p5js.org/Radinm/sketches/WfRTLCExX",
        icon: PiLinkSimpleBold,
      },
    ],
  },

]
