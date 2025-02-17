import { useState } from "react";
import { Search, PlusIcon, AlertCircle, Filter } from "lucide-react";
import { motion } from "framer-motion";
import ProjectCard, { Project } from "../components/projectCard";
import { useGitHubStars } from "../hooks/useGithubStars";
import { clearStarsCache } from "../utils/githubCache";
import data from "../../data.json";

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [sortBy, setSortBy] = useState("stars"); // Options: none, stars, name
  const [showFilters, setShowFilters] = useState(false);

  const { projects, isLoading, rateLimit, refreshStars } = useGitHubStars(data.projects as Project[]);

  // Get unique tags from all projects
  const allTags = [...new Set(data.projects.flatMap((project: Project) => project.tags))];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || project.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === "stars") {
      return (b.stars || 0) - (a.stars || 0); // Descending by stars, default to 0 if undefined
    } else if (sortBy === "name") {
      return a.projectName.localeCompare(b.projectName);
    }
    return 0; 
  });

  const handleRefreshStars = () => {
    clearStarsCache();
    refreshStars();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3, duration: 0.8 }}
      className="min-h-screen mx-4 md:m-10"
    >
      <div className="max-w-7xl mx-auto">
        <div>
          <div className="grid justify-center md:flex md:justify-between text-center mb-4">
            <h1 className="text-4xl font-bold text-gray-900 mb-2 md:mb-0">
              Breakpoint;
            </h1>
            <a
              className="flex justify-self-center h-fit w-fit p-2 bg-black rounded-md text-white"
              href="https://github.com/FOSS-Cell-GECPKD/Breakpoint?tab=readme-ov-file#how-to-add-your-project"
            >
              <PlusIcon />
              Add My Project
            </a>
          </div>

          <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center md:gap-4 mb-4">
            <div className="relative flex-grow mb-2 md:mb-0">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="pl-10 pr-4 py-2 w-full border rounded-l-lg md:rounded-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button 
                  className="md:hidden px-3 bg-white border border-l-0 rounded-r-lg flex items-center"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter size={18} className={showFilters ? "text-yellow-500" : "text-gray-500"} />
                </button>
              </div>
            </div>
            
            <div className={`${showFilters || window.innerWidth >= 768 ? 'flex' : 'hidden'} flex-wrap md:flex gap-2 items-center`}>
              <select
                className="border rounded-lg px-3 py-2 bg-white flex-grow md:flex-grow-0 mb-2 md:mb-0"
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
              >
                <option value="">All Tags</option>
                {allTags.map((tag) => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>

              <select
                className="border rounded-lg px-3 py-2 bg-white flex-grow md:flex-grow-0 mb-2 md:mb-0"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="stars">Sort by: Stars ⭐</option>
                <option value="none">Sort by: Default</option>
                <option value="name">Sort by: Name</option>
              </select>

              <button
                onClick={handleRefreshStars}
                className="border rounded-lg px-3 py-2 bg-white hover:bg-gray-100 flex-grow md:flex-grow-0"
                title="Refresh GitHub stars (clears cache)"
              >
                Refresh Stars
              </button>
            </div>
          </div>

          {/* Rate limit warning */}
          {rateLimit && rateLimit.remaining < 10 && (
            <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-3 rounded-md mb-4 flex items-start gap-2">
              <AlertCircle className="text-yellow-600 shrink-0 mt-1" size={20} />
              <p className="text-sm">
                <strong>GitHub API rate limit warning:</strong> {rateLimit.remaining} requests remaining.
                Rate limit will reset at {rateLimit.resetTime}.
              </p>
            </div>
          )}
        </div>

        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
          </div>
        )}

        {!isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectsPage;