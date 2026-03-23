import React from 'react';
import SkillsGrid from '../components/SkillsGrid';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-24 relative bg-white dark:bg-[#0A0A0A] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">About <span className="text-primary">Me</span></h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col gap-20">
          {/* Bio Section */}
          <div className="max-w-4xl mx-auto text-center space-y-8 text-gray-700 dark:text-gray-400 text-xl md:text-2xl leading-relaxed">
            <p>
              Hi there! I'm <span className="text-gray-900 dark:text-white font-semibold">Sakshi</span>, a passionate Full-Stack Developer who loves transforming ideas into functional and visually striking web applications. With a keen eye for modern design and an obsession with clean code, I bridge the gap between aesthetic interfaces and robust backend architecture.
            </p>
            <p>
              When I'm not crafting digital solutions, you can find me exploring new technologies, contributing to open-source projects, or optimizing application performance. I believe in continuous learning and adapting to the ever-evolving tech landscape.
            </p>
          </div>

          {/* Tech Stack Section */}
          <div className="w-full pt-4">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-wide">My Tech Stack</h3>
            </div>
            <SkillsGrid />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
