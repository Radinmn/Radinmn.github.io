import { FaDev, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const socials = [
  {
    name: "Github",
    url: "https://github.com/Radinmn",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/radin-mydn/",
    icon: FaLinkedin,
  },
  {
    name: "Email",
    url: "mailto:radinmoayyedian@gmail.com",
    icon: FaEnvelope,
  },
]

const Navbar = () => {
  return (
    <nav className="z-40 fixed top-5 left-0 right-0 my-0 mx-auto max-w-max px-5 py-2 border border-slate-200 dark:border-slate-700 rounded-full bg-slate-50/30 dark:bg-slate-900/30 backdrop-blur-md">
      <ul className="flex items-center justify-center gap-8 text-slate-700 dark:text-slate-300 text-xl">
        {socials.map((social, index) => (
          <li key={index} className="hover:scale-90 duration-150">
            <a href={social.url} target="_blank" rel="noreferrer">
              <social.icon />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
