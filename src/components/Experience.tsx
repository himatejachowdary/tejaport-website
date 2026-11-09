import React from 'react';
import { Building2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Software Developer Intern",
      company: "Multiplier AI",
      period: "2024",
      highlight: "3,500+ business entities across 70+ countries",
      description:
        "Built automated data pipelines covering 3,500+ business entities across 70+ countries. Engineered data extraction and validation workflows to streamline global intelligence gathering.",
      tags: ["Python", "Data Pipelines", "Automation", "ETL", "Data Validation"],
    },
    {
      role: "Backend Developer Intern",
      company: "OSOS",
      period: "2024",
      highlight: "3,000+ active users",
      description:
        "Designed and tested REST APIs for an application with 3,000+ active users. Developed scalable endpoints, validated request payloads, and ensured system stability under user load.",
      tags: ["REST APIs", "Backend Development", "API Testing", "System Design"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 lg:px-8 border-t border-[#1f1b16]/[0.08] bg-[#f7f4ee]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="font-mono text-xs text-[#7b7266] uppercase tracking-wider mb-2">
            Professional background
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#1f1b16]">
            Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="bg-[#fdfbf7] border border-[#1f1b16]/[0.08] rounded-xl p-6 sm:p-7 shadow-[0_1px_3px_rgba(31,27,22,0.03)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-lg font-medium text-[#1f1b16]">
                      {exp.role}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-[#5e554a] mt-0.5">
                      <span className="font-medium text-[#1f1b16]">{exp.company}</span>
                      <span>•</span>
                      <span>Internship</span>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-[#7b7266] bg-[#efe9df] px-2.5 py-1 rounded">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-[#5e554a] leading-relaxed mb-6">
                  {exp.description}
                </p>
              </div>

              <div>
                {/* Metric callout */}
                <div className="pt-4 border-t border-[#1f1b16]/[0.06] mb-4">
                  <div className="font-mono text-xs text-[#7b7266] mb-1">
                    Key footprint
                  </div>
                  <div className="font-mono text-sm text-[#15803d] font-medium tabular-nums">
                    {exp.highlight}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] text-[#5e554a] bg-[#efe9df] px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

