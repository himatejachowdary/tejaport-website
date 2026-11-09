import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const courses = [
    "Machine Learning Algorithms",
    "Statistical Computing",
    "Predictive Analytics",
    "Advanced Data Mining",
    "Big Data Analytics",
    "Cloud Data Engineering",
    "Business Intelligence",
    "Blockchain Architecture",
  ];

  const achievements = [
    { role: "Winner", context: "University Data Science Hackathon 2024" },
    { role: "Published", context: "Research project on predictive analytics with 95% accuracy rate" },
    { role: "Leadership", context: "Vice President, Data Science and Analytics Club" },
    { role: "Recognition", context: "Excellence Award for blockchain voting system" },
    { role: "Mentorship", context: "Guided 15+ junior students in data analytics projects" },
  ];

  return (
    <section id="education" className="py-20 px-6 lg:px-8 border-t border-[#1f1b16]/[0.08] bg-[#f7f4ee]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="font-mono text-xs text-[#7b7266] uppercase tracking-wider mb-2">
            Academic background
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#1f1b16] mb-3">
            Education
          </h2>
        </div>

        <div className="bg-[#fdfbf7] border border-[#1f1b16]/[0.08] rounded-xl p-6 sm:p-8 shadow-[0_1px_3px_rgba(31,27,22,0.03)]">
          {/* Main Degree Heading & Date */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-6 border-b border-[#1f1b16]/[0.06]">
            <div>
              <h3 className="text-xl sm:text-2xl font-medium text-[#1f1b16] leading-snug mb-1">
                Bachelor of Technology in Computer Science and Engineering
              </h3>
              <div className="text-base text-[#15803d] font-normal mb-2">
                Specialization in Data Science & Analytics
              </div>
              <div className="flex items-center text-sm text-[#5e554a] space-x-1.5">
                <MapPin size={15} strokeWidth={1.5} className="text-[#7b7266]" />
                <span>Malla Reddy University, Hyderabad</span>
              </div>
            </div>

            <div className="flex items-center font-mono text-xs text-[#7b7266] bg-[#efe9df] px-3 py-1.5 rounded self-start tabular-nums">
              <Calendar size={13} strokeWidth={1.5} className="mr-1.5 text-[#5e554a]" />
              <span>2023 – 2027</span>
            </div>
          </div>

          {/* Grid: Coursework & Achievements */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            {/* Core Coursework */}
            <div className="lg:col-span-5">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#7b7266] mb-3">
                Core coursework
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {courses.map((course) => (
                  <span
                    key={course}
                    className="font-mono text-[11px] text-[#5e554a] bg-[#efe9df] px-2.5 py-1 rounded"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="lg:col-span-7">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#7b7266] mb-3">
                Achievements & leadership
              </h4>
              <ul className="space-y-2.5">
                {achievements.map((item) => (
                  <li
                    key={item.context}
                    className="text-sm text-[#5e554a] flex items-start space-x-2"
                  >
                    <span className="font-mono text-xs text-[#1f1b16] font-medium min-w-[80px] flex-shrink-0 pt-0.5">
                      {item.role}
                    </span>
                    <span className="text-[#1f1b16]/30 flex-shrink-0 pt-0.5">—</span>
                    <span className="leading-relaxed">{item.context}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
