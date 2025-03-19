import React from "react";
import { ExternalLink, Star } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

export interface Project {
  id: number;
  studentName: string;
  projectName: string;
  description: string;
  tags: string[];
  projectLink: string;
  githubLink?: string;
  image: string;
  stars?: number;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div
      onClick={() => window.open(project.projectLink, "_blank")}
      className="bg-white border border-black rounded-md overflow-hidden hover:rotate-3 transition-transform cursor-pointer"
    >
      <img
        src={project.image}
        alt={project.projectName}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 border-t border-black">
        <span className="flex justify-between">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {project.projectName}
          </h3>
          {(project.stars || 0) > 0 && (
            <span className="flex items-center h-fit w-fit gap-1 bg-yellow-50 border border-yellow-200 px-1 rounded-sm">
              <Star size={14} className="text-yellow-500 fill-yellow-500" />
              {project.stars}
            </span>
          )}
        </span>
        <p className="text-sm text-gray-600 mb-2">by {project.studentName}</p>
        <p className="line-clamp-3 text-gray-700 mb-4 max-h-24 overflow-hidden overflow-ellipsis">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 border border-black bg-yellow-50 text-black rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-1 rounded-md text-gray-700 hover:text-white hover:bg-black"
            >
              <SiGithub size={20} />
              <span>Source Code</span>
            </a>
          )}
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-1 rounded-md text-gray-700 hover:text-white hover:bg-black"
          >
            <ExternalLink size={20} />
            <span>Project Link</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
