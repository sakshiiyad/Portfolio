import React from 'react';

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"]
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "SQL"]
  },
  {
    title: "Tools & Languages",
    skills: ["TypeScript", "Git / GitHub", "VS Code", "Vite", "Postman"]
  }
];

const SkillsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skillCategories.map((category, index) => (
        <div 
          key={index} 
          className="bg-gray-50 dark:bg-[#111] p-8 rounded-3xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl dark:hover:shadow-primary/10 group"
        >
          <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300"></span>
            {category.title}
          </h4>
          <div className="flex flex-wrap gap-3">
            {category.skills.map((skill, idx) => (
              <span 
                key={idx} 
                className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-xl text-base font-medium border border-gray-200 dark:border-gray-800 transition-colors hover:text-primary dark:hover:text-primary cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
