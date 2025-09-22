import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  demoUrl,
  repoUrl
}) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl bg-gray-900/50 shadow-md transition-shadow hover:shadow-lg">
      <div className="aspect-video overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm text-gray-400">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="inline-block rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {demoUrl && (
          <a 
            className="rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/80" 
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        )}
        {repoUrl && (
          <a 
            className="rounded-full bg-white/10 px-6 py-2 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20" 
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;