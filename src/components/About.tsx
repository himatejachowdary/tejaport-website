
import React from 'react';
import { BarChart3, Code, Database } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: BarChart3,
      title: "Data Analytics & Visualization",
      description: "Expert in generating insights from complex datasets using Python, Power BI, and Tableau"
    },
    {
      icon: Code,
      title: "Programming & Development",
      description: "Strong foundation in Python, Java, SQL with focus on data-driven solutions"
    },
    {
      icon: Database,
      title: "Blockchain Technology",
      description: "Exploring decentralized technologies with Ethereum basics and Solidity development"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm Hima Teja Cherukumalli, a passionate B.Tech Computer Science student specializing in Data Science. 
              My journey revolves around transforming raw data into meaningful insights that drive real-world solutions.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              As a detail-oriented and analytical thinker, I combine my strong foundation in statistics and Python 
              with modern data visualization tools like Power BI and Tableau to uncover hidden patterns and trends in data.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Beyond data analytics, I'm exploring the fascinating world of blockchain technology, understanding 
              how decentralized systems can revolutionize data integrity and transparency across industries.
            </p>
          </div>

          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div 
                key={highlight.title}
                className="flex items-start space-x-4 p-4 rounded-lg bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex-shrink-0">
                  <highlight.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{highlight.title}</h3>
                  <p className="text-gray-400">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
