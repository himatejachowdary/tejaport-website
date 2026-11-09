import React from 'react';

const Skills = () => {
  const skillGroups = [
    {
      category: "Programming languages",
      skills: ["Python", "SQL", "Java", "React"],
    },
    {
      category: "Analytics & visualization",
      skills: ["Power BI", "Tableau", "Microsoft Excel", "Jupyter Notebooks"],
    },
    {
      category: "Data science libraries",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
    },
    {
      category: "Distributed systems",
      skills: ["Ethereum basics", "Solidity", "MetaMask", "Ganache", "Web3.js"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 lg:px-8 border-t border-[#1f1b16]/[0.08] bg-[#f7f4ee]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="font-mono text-xs text-[#7b7266] uppercase tracking-wider mb-2">
            Technical toolkit
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#1f1b16] mb-3">
            Skills & technologies
          </h2>
          <p className="text-base text-[#5e554a] max-w-2xl">
            Core tools, statistical packages, and environments used for data processing, predictive modeling, and system development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-[#fdfbf7] border border-[#1f1b16]/[0.08] rounded-xl p-5 shadow-[0_1px_3px_rgba(31,27,22,0.03)] flex flex-col"
            >
              <h3 className="text-base font-medium text-[#1f1b16] pb-3 border-b border-[#1f1b16]/[0.06] mb-3">
                {group.category}
              </h3>

              <ul className="space-y-2.5 flex-1">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-[#5e554a] flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1f1b16]/20 mr-2.5 flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
