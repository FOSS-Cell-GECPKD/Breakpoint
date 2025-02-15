import { useState } from "react";
import { Search, ExternalLink, PlusIcon } from "lucide-react";
import { motion } from "framer-motion";

import { SiGithub } from "@icons-pack/react-simple-icons";
import data from "../../data.json";

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const projectsData = data.projects;

  // Get unique tags from all projects
  const allTags = [...new Set(projectsData.flatMap((project) => project.tags))];

  // Filter projects based on search term and selected tag
  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch =
      project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || project.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3, duration: 0.8 }}
      className="min-h-screen m-10"
    >
      <div className="max-w-7xl mx-auto">
        <div>
          <div className="grid justify-center md:flex md:justify-between text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Breakpoint;
            </h1>
            <a
              className="flex justify-self-center h-fit w-fit p-2 bg-black rounded-md text-white"
              href="https://github.com/FOSS-Cell-GECPKD/Breakpoint?tab=readme-ov-file#how-to-add-your-project"
            >
              <PlusIcon />
              Add my project
            </a>
          </div>

          {/* Search and filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 pt-3">
            <div className="relative flex-grow ">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search projects..."
                className="pl-10 pr-4 py-2 w-full border rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <select
              className="border rounded-lg px-4 py-2 bg-white"
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
            >
              <option value="">All Tags</option>
              {allTags.map((tag) => (
                <option
                  key={tag}
                  value={tag}
                  className="text-red bg-white border border-black"
                >
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <a
              href={project.projectLink}
              key={project.id}
              className="bg-white border border-black rounded-md overflow-hidden hover:rotate-3 transition-transform"
            >
              <img
                src={project.image}
                alt={project.projectName}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 border-t border-black">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.projectName}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  by {project.studentName}
                </p>
                <p className="text-gray-700 mb-4">{project.description}</p>

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

                <div className="flex gap-4">
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
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
