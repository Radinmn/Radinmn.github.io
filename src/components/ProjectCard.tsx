import { useEffect, useRef } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface ProjectLink {
  name: string;
  url: string;
  icon?: any; // Optional icon
}

interface ProjectCardProps {
  image?: string;
  video?: string;
  iframe?: string; // Add iframe property
  title: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
  imageWidth?: string;
}

const ProjectCard = ({
  image,
  video,
  iframe, // Include iframe here
  title,
  description,
  tags,
  links,
  imageWidth = "auto",
}: ProjectCardProps) => {
  const projectRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px",
      }
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, []);

  return (
    <article
      className="flex flex-col gap-4 opacity-0 items-center text-center"
      ref={projectRef}
    >
      {/* Render image, video, or iframe */}
      {image && !iframe && !video && (
        <img
          src={image}
          alt={title}
          style={{ width: imageWidth }}
          className="rounded-3xl border border-slate-200 dark:border-slate-700 object-contain"
        />
      )}
      {video && !iframe && (
        <video
          controls
          src={video}
          style={{ width: imageWidth }}
          className="rounded-3xl border border-slate-200 dark:border-slate-700 object-contain"
        />
      )}
      {iframe && (
        <div
          dangerouslySetInnerHTML={{ __html: iframe }}
          className="rounded-3xl border border-slate-200 dark:border-slate-700"
          style={{ width: imageWidth }}
        />
      )}
      <div className="flex flex-col justify-center items-center gap-2">
        <h3 className="font-bold text-2xl">{title}</h3>
        <div className="flex gap-2 flex-wrap justify-center">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              className="bg-slate-800 text-slate-200 dark:text-slate-800 dark:bg-slate-200"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <p className="max-w-[800px] text-lg">{description}</p>
        <div className="flex gap-3 flex-wrap justify-center">
          {links.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noreferrer">
              <Button variant="secondary" className="flex items-center gap-2">
                {link.icon && <link.icon />}
                {link.name}
              </Button>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
