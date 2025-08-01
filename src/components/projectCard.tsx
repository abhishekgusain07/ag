import type { FC } from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import { GlowingEffect } from "./ui/glowing-effect";

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  tag?: string;
}

interface ProjectCardProps {
  project: Project;
  id?: number;
  isBlurred?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const ProjectCard: FC<ProjectCardProps> = ({
  project,
  isBlurred = false,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className="flex flex-col items-start pt-2"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className={`group relative -mx-3 w-full transform rounded-lg px-3 py-2 transition-all duration-300 ease-in-out md:hover:scale-105 md:hover:bg-orangeBg`}
      >
        <div className="flex items-center justify-between text-sm font-medium tracking-tight text-title md:group-hover:text-primary rounded-xl">
          <div className="flex items-center">
            <h3 className="font-extrabold mb-1">{project.title}</h3>
            {project.tag && (
              <div className="ml-2 rounded-full border border-emerald-700 bg-emerald-100 px-1.5 py-0.5 text-xs font-medium text-emerald-700">
                <span>{project.tag}</span>
              </div>
            )}
          </div>
          <RiArrowRightUpLine className="ml-0.5 text-primary opacity-0 transition-opacity duration-150 md:group-hover:opacity-100" />
        </div>
        <p className="text-sm text-body">{project.description}</p>
      </a>
    </div>
  );
};

export default ProjectCard;
