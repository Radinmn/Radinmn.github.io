import { FaGamepad, FaGithub } from "react-icons/fa"
import { PiLinkSimpleBold } from "react-icons/pi"

export const PROJECTS = [
  {
    title: "Tweed Grow To Win 1 & 2 - Promotional Games",
    description:
      "Web collaboration with Tweed and Bottlecap Media. Designed gameplay akin to 'Among Us,' where users navigate a plant growing facility, complete tasks, and ensure the plants thrive. Engineered a robust score tracking system, securely storing users’ achievements on AWS servers, and facilitating weekly performance accolades.",
    image: "/neovim.jpg",
    imageWidth: "700px",
    tags: ["Unity game engine", "C#", "Collaboration"],
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
    tags: ["Java", "WebGL", "Storytelling"],
    links: [
      {
        name: "Code",
        url: "https://github.com/Radinmn/Parallel-Worlds", // Replace with your GitHub link
        icon: FaGithub,
      },
    ],
  },

  {
    title: "Visual Music",
    description:
      "Immerse yourself in a vibrant symphony of visuals where sound shapes the scene. As the bass drops, colors pulse and shift, while soaring pitches sculpt intricate patterns and dynamic effects. Each clip dances in harmony with the music, creating a mesmerizing audio-visual experience that fuses rhythm and light into pure sensory magic.",
    video: "/visualmusic.mp4", // Video file path
    imageWidth: "700px",
    tags: ["Max", "Audio-Visual"],
    links: [
      {
        name: "Code",
        url: "https://github.com/Radinmn/Visual-Music", // GitHub link for the project
        icon: FaGithub,
      },
    ],
  },

  {
    title: "Starry Night",
    description:
      "Experience a modern twist on Van Gogh's masterpiece, where every pixel tells a new story. This reimagining of 'Starry Night' transforms the iconic painting using generative art techniques in p5.js, altering the pixel structure to create a mesmerizing interplay of shapes and colors. A tribute to classic art, redefined through code.",
    image: "/starry-night.png", // Image file path
    imageWidth: "700px",
    tags: ["p5.js", "Generative Art"],
    links: [
      {
        name: "Code",
        url: "https://editor.p5js.org/Radinm/sketches/Rtjerv2KP", // Link to the p5.js file
        icon: PiLinkSimpleBold,
      },
    ],
  },

  // {
  //   title: "Text Animation with Particles",
  //   description:
  //     "Experience a dynamic text animation where the phrase 'I love coding' comes to life with particles. Each letter is constructed from moving particles that respond to user input. Change fonts by clicking, reset the particles with the spacebar, and watch as vibrant colors—blue, green, and red—bring the text to life. This interactive piece is created using p5.js and explores the intersection of typography and motion.",
  //   iframe: `<iframe src="https://editor.p5js.org/Radinm/full/Sj5D-vuOO" width="700" height="500" style="border: none;"></iframe>`, // Embedded iframe link
  //   imageWidth: "700px",
  //   tags: ["p5.js", "Typography"],
  //   links: [
  //     {
  //       name: "Code",
  //       url: "https://editor.p5js.org/Radinm/sketches/YourSketchIDHere", // Replace with the actual link
  //       icon: PiLinkSimpleBold,
  //     },
  //   ],
  // },

  {
    title: "Tragic Traffic",
    description:
      "A dynamic p5.js game where players navigate a car through a busy city filled with traffic and construction zones. Players dodge obstacles, avoid collisions, and aim for high scores while adapting to increasing difficulty levels.",
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
