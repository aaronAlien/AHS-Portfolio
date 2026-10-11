import BentoCell from "./BentoCell";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  imageUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({ title, description, tags, githubUrl, imageUrl, liveUrl }: ProjectCardProps) => (
  <BentoCell className="flex flex-col gap-3">
    <a href={liveUrl} aria-label="{`Open ${title} live site`}" target="_blank" rel="noopener noreferrer">
      <div className="aspect-video w-full overflow-hidden rounded-lg border border-border bg-secondary">
        {imageUrl ? (
          <img src={imageUrl} alt={`Screenshot of ${title}`} loading="lazy" className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
            screenshot image
          </div>
        )}
      </div>
    </a>
    <div>
      <h3 className="text-base font-bold text-foreground">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
    <div className="mt-auto flex items-end gap-3 justify-between">
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors duration-300 ease-out hover:text-[hsl(var(--violet-border))]"
          aria-label={`${title} on GitHub`}
        >
          <FaGithub className="h-5 w-5" />
        </a>
      )}
    </div>
  </BentoCell>
);

export default ProjectCard;
