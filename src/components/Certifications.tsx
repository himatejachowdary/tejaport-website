
import React from 'react';
import { Award, Calendar, ArrowUp } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Deep Learning Specialization",
      issuer: "Coursera - deeplearning.ai",
      date: "2023",
      description: "Comprehensive specialization covering neural networks, deep learning, and their applications in computer vision and NLP.",
      skills: ["Neural Networks", "CNN", "RNN", "TensorFlow", "Keras"],
      credentialUrl: "https://coursera.org/verify/specialization/XXXXXXXX",
      featured: true
    },
    {
      title: "Machine Learning Course",
      issuer: "Coursera - Stanford University",
      date: "2023",
      description: "Andrew Ng's foundational machine learning course covering supervised and unsupervised learning algorithms.",
      skills: ["Supervised Learning", "Unsupervised Learning", "Neural Networks", "Octave/MATLAB"],
      credentialUrl: "https://coursera.org/verify/XXXXXXXX",
      featured: true
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "TensorFlow",
      date: "2024",
      description: "Demonstrates proficiency in using TensorFlow to solve deep learning and ML problems.",
      skills: ["TensorFlow", "Deep Learning", "Computer Vision", "NLP"],
      credentialUrl: "https://www.credential.net/xxxxxxxx",
      featured: false
    },
    {
      title: "Python for Data Science",
      issuer: "IBM - Coursera",
      date: "2022",
      description: "Comprehensive course on using Python for data analysis, visualization, and machine learning.",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
      credentialUrl: "https://coursera.org/verify/XXXXXXXX",
      featured: false
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Continuous learning through industry-recognized certifications and specializations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                cert.featured ? 'ring-2 ring-blue-400/30' : ''
              }`}
            >
              {cert.featured && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              )}

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Award className="text-white" size={24} />
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-purple-400">
                      <span className="font-medium">{cert.issuer}</span>
                      <span className="text-gray-400">•</span>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span className="text-sm">{cert.date}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      View Credential
                    </a>
                    
                    <ArrowUp className="text-purple-400 transform rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
