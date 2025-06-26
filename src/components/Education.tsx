
import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-400"></div>
          
          <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 ml-12 md:ml-0 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105">
            <div className="absolute -left-8 md:-left-6 top-8 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <GraduationCap className="text-white" size={24} />
            </div>

            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h3 className="text-2xl font-bold text-white">
                  Bachelor of Technology in Computer Science and Engineering
                </h3>
                <div className="flex items-center space-x-2 text-blue-400">
                  <Calendar size={16} />
                  <span className="text-sm font-medium">2023 - 2027</span>
                </div>
              </div>

              <div className="text-xl text-purple-400 font-semibold">
                Specialization in Data Science
              </div>

              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin size={16} />
                <span>Malla Reddy University, Hyderabad</span>
              </div>

              <div className="space-y-3 pt-4">
                <div className="space-y-2">
                  <span className="text-gray-300 font-medium">Relevant Coursework:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {[
                      "Data Mining",
                      "Big Data Analytics", 
                      "Data Structures",
                      "Machine Learning (Intro)",
                      "Blockchain Technology",
                      "Statistics & Probability",
                      "Database Management Systems",
                      "Software Engineering"
                    ].map((course) => (
                      <span key={course} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-gray-300 font-medium">Academic Achievements:</span>
                  <ul className="text-gray-400 space-y-1 ml-4">
                    <li>• Participated in university-level data hackathons</li>
                    <li>• Published mini-project on GitHub</li>
                    <li>• Active member of Data Science Club</li>
                    <li>• Completed blockchain technology certification module</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
