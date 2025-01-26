import { PROJECTS } from "@/content/projects"
import ProjectCard from "./ProjectCard"

const ProjectSection = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-14">
      {PROJECTS.map(
        ({ image, video, title, description, tags, links, imageWidth }) => (
          <ProjectCard
            key={title}
            image={image}
            video={video} // Pass the video property
            title={title}
            description={description}
            tags={tags}
            links={links}
            imageWidth={imageWidth}
          />
        )
      )}
    </div>
  )
}

export default ProjectSection
