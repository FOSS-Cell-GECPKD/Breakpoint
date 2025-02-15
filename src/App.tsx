import { useState } from 'react';
import { Search, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

import Intro from './components/intro';
import { SiGithub } from '@icons-pack/react-simple-icons';

const projectsData = [
  {
    id: 1,
    studentName: "Alice Johnson",
    projectName: "Weather Dashboard",
    description: "A real-time weather tracking application built with React and OpenWeather API",
    tags: ["React", "API", "Weather"],
    githubLink: "https://github.com/alice/weather-app",
    demoLink: "https://weather-app-demo.com",
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    studentName: "Bob Smith",
    projectName: "Task Manager",
    description: "A collaborative task management system with real-time updates",
    tags: ["React", "Firebase", "Material-UI"],
    githubLink: "https://github.com/bob/task-manager",
    demoLink: "https://task-manager-demo.com",
    image: "/api/placeholder/400/250"
  }
];

const ProjectShowcase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  // Get unique tags from all projects
  const allTags = [...new Set(projectsData.flatMap(project => project.tags))];

  // Filter projects based on search term and selected tag
  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || project.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="relative">
      <Intro />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.8 }}
        className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Breakpoint</h1>
          
          {/* Search and Filter Section */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="relative flex-grow ">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                className="pl-10 pr-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
              {allTags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project => (
              <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={project.image}
                  alt={project.projectName}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.projectName}</h3>
                  <p className="text-sm text-gray-600 mb-2">by {project.studentName}</p>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
                    >
                      <SiGithub size={20} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
                    >
                      <ExternalLink size={20} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectShowcase;