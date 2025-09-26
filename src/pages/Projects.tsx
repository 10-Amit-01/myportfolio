import React from "react";
import ProjectCard from "../components/ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Website",
      description:
        "A full-featured e-commerce platform with user authentication, product management, and payment integration.",
      technologies: [
        "React",
        "TailwindCSS",
        "Redex Toolkit",
        "Node.js",
        "Stripe",
      ],
      imageUrl:
        "https://www.poptin.com/blog/wp-content/uploads/2019/03/ecommerce.jpg ",
      // demoUrl: "#",
      // repoUrl: "#",
    },
    {
      id: 2,
      title: "Admin Panel",
      description:
        "A full-stack Admin Panel application with authentication and product management.",
      technologies: ["React", "Redux Toolkit Query", "Tailwind CSS", "Express"],
      imageUrl:
        "https://thumbs.dreamstime.com/b/administrator-dashboard-vector-illustration-admin-panel-line-icon-eps-194136055.jpg?w=768",
      // demoUrl: "#",
      repoUrl: "https://github.com/10-Amit-01/adminPanelECom.git",
    },
    {
      id: 3,
      title: "News App",
      description:
        "A news application built in Kotlin with real-time API integration, category-wise browsing, and a clean, user-friendly interface.",
      technologies: ["Kotlin", "Java", "Sqlite"],
      // demoUrl:'#',
      repoUrl:'https://github.com/10-Amit-01/NewsApp.git',
      imageUrl:
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/a2b40f72258961.5be18bb9515f7.jpg",
    },
    {
      id: 4,
      title: "Simple Chat App",
      description:
        "A simple chat app built with real-time messaging and a clean, minimal interface.",
      technologies: ["Kotlin", "Firebase", "Sqlite"],
      imageUrl:
        "https://uizard.io/static/70070448b6fc133a7194ec7f4c7490c8/0cfa7/f5cee822600e5cde92be8c51bb20744dbdd18015-1440x835.webp",
      // demoUrl: "#",
      repoUrl: "https://github.com/AashishDhawan12/Nexus.git",
    },
  ];

  return (
    <main className="flex-1" id="projects">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Projects Showcase
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              A selection of projects that demonstrate my passion for creating
              meaningful web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
                demoUrl={project.demoUrl}
                repoUrl={project.repoUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
