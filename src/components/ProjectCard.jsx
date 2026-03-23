import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, image, tags, liveLink, githubLink }) => {
  return (
    <div className="glow-border group rounded-2xl bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col h-full transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md dark:shadow-none">
      {/* Thumbnail */}
      <div className="h-48 w-full bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-500 dark:text-gray-600 font-medium">
            <span>Project Preview</span>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-base mb-5 flex-grow leading-relaxed">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, idx) => (
            <span key={idx} className="text-sm font-medium px-2.5 py-1 rounded-md bg-primary/10 text-primary">
              {tag}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex gap-5 mt-auto">
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-base font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors">
              <FaExternalLinkAlt size={15} /> Live Demo
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <FaGithub size={18} /> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
