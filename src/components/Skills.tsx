
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 75 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      title: "Data Analytics Tools",
      skills: [
        { name: "Power BI", level: 85 },
        { name: "Tableau", level: 80 },
        { name: "Excel", level: 90 },
        { name: "Jupyter", level: 95 }
      ]
    },
    {
      title: "Data Analysis Libraries",
      skills: [
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 85 },
        { name: "Matplotlib", level: 80 },
        { name: "Seaborn", level: 75 }
      ]
    },
    {
      title: "Blockchain & Tools",
      skills: [
        { name: "Ethereum Basics", level: 60 },
        { name: "Solidity", level: 45 },
        { name: "MetaMask", level: 70 },
        { name: "Ganache", level: 55 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for data analysis, visualization, and emerging blockchain technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
