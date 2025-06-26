
import React from 'react';
import { Brain, Code, Database } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Deep expertise in neural networks, deep learning, and AI model development"
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Strong foundation in Python, C++, and modern development practices"
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Proficient in data analysis, visualization, and statistical modeling"
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
              I'm a passionate final-year B.Tech Computer Science student specializing in Artificial Intelligence. 
              My journey in technology is driven by curiosity and the desire to solve real-world problems using AI.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              With a strong foundation in Python, TensorFlow, and deep learning, I'm constantly exploring 
              new frontiers in machine learning and data science. I believe AI has the power to transform 
              industries and improve lives.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding or training models, you'll find me writing about AI concepts, 
              contributing to open-source projects, or exploring the latest research papers in machine learning.
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
