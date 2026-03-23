import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projectsData = [
  {
    title: "CaterEase - Full Stack Web Application",
    description: "Developed a web platform for online catering and utensil rentals, enabling users to browse packages and place bookings seamlessly.",
    tags: ["React.js", "Nodejs", "Expressjs", "MongoDB", "Tailwind CSS"],
    image: "/projects/caterease.png",
    liveLink: "https://caterease-catering-utensils-booking.onrender.com/",
    githubLink: "https://github.com/sakshiiyad/caterease-catering-utensils-booking-system"
  },
  {
    title: "Reels-Style Zomato (Food Discovery Platform)",
    description: "Built a reels-style food discovery web platform where users browse dishes through vertically scrolling short videos.",
    tags: ["React.js", "Nodejs", "Expressjs", "MongoDB", "Tailwind CSS", "Imagekit"],
    image: "/projects/zomato.png",
    liveLink: "https://reels-style-zomato-food-discovery.onrender.com/",
    githubLink: "https://github.com/sakshiiyad/Reels-Style-Zomato-Food-Discovery-Platform-"
  },
  {
    title: "Notes App - Full stack notes making application",
    description: "A Fullstack Notes application built with HTML, CSS, JavaScript on the frontend and Node.js + Express + MongoDB (Mongoose) on the backend.",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
    image: "/projects/notes.png",
    liveLink: "https://notes-app-fullstack-qer0.onrender.com/",
    githubLink: "https://github.com/sakshiiyad/Notes-App-fullstack"
  },
  {
    title: "RailMed ",
    description: "Developed a health-tech solution for railway passengers integrating telemedicine, AI-based symptom checker, and offline first-aid kit guide. Analyzed doctor on board checking mechanisms via PNR and medicine delivery along with emergency mechanisms",
    tags: ["HTML", "CSS", "Javascript"],
    image: "/projects/railmed.jpg",
    liveLink: "https://railmedplatform.netlify.app/",
    githubLink: "https://github.com/sakshiiyad/Railmed"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20 fade-up bg-gray-50 dark:bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Featured <span className="text-primary">Projects</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-xl leading-relaxed">
            Here are a few things I've built recently. Each project represents a unique challenge and a different tech stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
