import { ExternalLink, Eye, Github, Search, Star, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { filterCategories, projects } from "../../data";

// Define the Project type based on your project object structure
type Project = {
  title: string;
  description: string;
  image: string;
  longDescription: string;
  github?: string;
  live?: string;
  featured?: boolean;
  category: string;
  year: string | number;
  status: string;
  technologies: string[];
  stats: {
    stars: number;
    forks: number;
    views: number;
  };
};

type ProjectProps = {
  isDarkMode: boolean;
};

const Projects = ({ isDarkMode }: ProjectProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projectFilter, setProjectFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const filterProjects = useMemo(() => {
    let filtered = projects;
    if (projectFilter !== "all") {
      filtered = filtered.filter((project) =>
        projectFilter === "featured"
          ? project.featured
          : project.category === projectFilter
      );
    }
    if (searchQuery) {
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }
    return filtered;
  }, [projectFilter, searchQuery]);
  return (
    <section
      id="projects"
      className={`py-20 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto mb-12">
            Explore my latest work, featuring modern web applications built with
            cutting-edge technologies
          </p>
        </div>
        {/* filter options */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="flex flex-wrap gap-3 justify-center">
            {filterCategories.map((category) => (
              <button
                onClick={() => setProjectFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  projectFilter === category
                    ? "bg-blue-500 text-white shadow-lg"
                    : isDarkMode
                    ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
                key={category}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          {/* search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-50" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className={`pl-10 pr-4 py-2 rounded-lg border transition-colors ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-400"
              } focus:outline-none focus:ring-2 focus:ring-blue-400/20`}
            />
          </div>
        </div>
        {/* project grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filterProjects.map((project, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`group rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-2xl ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600 hover:border-blue-400"
                    : "bg-white border-gray-200 hover:border-blue-400 shadow-sm"
                }`}
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    height={300}
                    width={500}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Quick Actions */}
                  <div className="absolute bottom-4 left-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      // @type-ignore
                      onClick={() => setSelectedProject(project)}
                      className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </motion.button>
                  </div>
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === "Completed"
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </div>
                  )}
                </div>
                {/* Project details */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm opacity-60">{project.year}</span>
                  </div>
                  <p className="opacity-80 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        className={`px-2 py-1 text-xs rounded-md font-medium ${
                          isDarkMode
                            ? "bg-gray-600 text-gray-300"
                            : "bg-gray-100 text-gray-600"
                        }`}
                        key={tech}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span
                        className={`px-2 py-1 text-xs rounded-md font-medium ${
                          isDarkMode
                            ? "bg-gray-600 text-gray-300"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  {/* Project Stats */}
                  <div className="flex items-center justify-between text-sm opacity-60">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{project.stats.views}</span>
                      </div>
                    </div>
                    <span className="text-blue-400">{project.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {/* No Result */}
        {filterProjects.length === 0 && (
          <p className="text-center text-lg opacity-70 mt-12">
            No projects found matching your criteria. Please try adjusting your
            filters or search terms.
          </p>
        )}
      </div>
      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              } border`}
            >
              <div className="relative">
                {/* Close button */}
                <button
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-200"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-5 h-5" />
                </button>
                {/* Project Image */}
                <div className="aspect-video">
                  <Image
                    src={selectedProject?.image || ""}
                    alt={selectedProject?.title}
                    height={300}
                    width={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* project content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-bold mb-2">
                        {selectedProject?.title}
                      </h2>
                      <p className="text-lg opacity-80">
                        {selectedProject?.longDescription}
                      </p>
                    </div>
                    <div className="flex space-x-3">
                      {selectedProject?.github && (
                        <motion.a
                          href={selectedProject?.github}
                          whileHover={{ scale: 1.05 }}
                          className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>
                      )}
                      {selectedProject?.live && (
                        <motion.a
                          href={selectedProject?.live}
                          whileHover={{ scale: 1.05 }}
                          className="p-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/30 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div
                      className={`p-4 rounded-lg text-center ${
                        isDarkMode ? "bg-gray-700" : "bg-gray-50"
                      }`}
                    >
                      <Star className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
                      <div className="text-2xl font-bold">
                        {selectedProject.stats.stars}
                      </div>
                      <div className="text-sm opacity-60">Stars</div>
                    </div>
                    <div
                      className={`p-4 rounded-lg text-center ${
                        isDarkMode ? "bg-gray-700" : "bg-gray-50"
                      }`}
                    >
                      <Github className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                      <div className="text-2xl font-bold">
                        {selectedProject.stats.forks}
                      </div>
                      <div className="text-sm opacity-60">Forks</div>
                    </div>
                    <div
                      className={`p-4 rounded-lg text-center ${
                        isDarkMode ? "bg-gray-700" : "bg-gray-50"
                      }`}
                    >
                      <Eye className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                      <div className="text-2xl font-bold">
                        {selectedProject.stats.views}
                      </div>
                      <div className="text-sm opacity-60">Views</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
