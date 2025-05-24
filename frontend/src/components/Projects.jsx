import { useState, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    const fetchProjects = async () => {
      // Simulating an API call
      const data = [
        {
          id: 1,
          title: "E-commerce Website",
          description:
            "A fully functional e-commerce website with product listings, cart, and checkout.",
          image: "/placeholder.svg?height=200&width=300",
          technologies: ["React", "Node.js", "MongoDB"],
          githubUrl: "https://github.com/yourusername/ecommerce-project",
          liveUrl: "https://ecommerce-project.example.com",
        },
        {
          id: 2,
          title: "Task Management App",
          description:
            "A task management application with user authentication and real-time updates.",
          image: "/placeholder.svg?height=200&width=300",
          technologies: ["Vue.js", "Firebase", "Vuex"],
          githubUrl: "https://github.com/yourusername/task-management-app",
          liveUrl: "https://task-app.example.com",
        },
        {
          id: 2,
          title: "Task Management App",
          description:
            "A task management application with user authentication and real-time updates.",
          image: "/placeholder.svg?height=200&width=300",
          technologies: ["Vue.js", "Firebase", "Vuex"],
          githubUrl: "https://github.com/yourusername/task-management-app",
          liveUrl: "https://task-app.example.com",
        },
        // Add more projects as needed
      ];
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-500 hover:text-blue-600"
                >
                  <Github className="mr-1" size={16} />
                  GitHub
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-green-500 hover:text-green-600"
                >
                  <ExternalLink className="mr-1" size={16} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
