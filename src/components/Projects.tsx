
import React from 'react';
import { Github, ArrowUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Fake News Detection using NLP",
      description: "Built an advanced machine learning model using Python and NLP libraries to detect fake news with 94% accuracy. Implemented BERT transformers and traditional ML algorithms for comparison.",
      technologies: ["Python", "BERT", "Scikit-learn", "NLTK", "Pandas"],
      githubUrl: "https://github.com/yourusername/fake-news-detection",
      featured: true
    },
    {
      title: "Stock Price Prediction with LSTM",
      description: "Developed a deep learning model using LSTM neural networks to predict stock prices. Achieved improved prediction accuracy through feature engineering and time series analysis.",
      technologies: ["TensorFlow", "Keras", "Python", "Matplotlib", "Yahoo Finance API"],
      githubUrl: "https://github.com/yourusername/stock-prediction",
      featured: true
    },
    {
      title: "Image Classification CNN",
      description: "Created a convolutional neural network for multi-class image classification. Implemented data augmentation and transfer learning techniques to improve model performance.",
      technologies: ["TensorFlow", "Keras", "OpenCV", "Python", "NumPy"],
      githubUrl: "https://github.com/yourusername/image-classification",
      featured: false
    },
    {
      title: "Recommendation System",
      description: "Built a collaborative filtering recommendation system using matrix factorization techniques. Integrated content-based filtering for hybrid recommendations.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Surprise", "Flask"],
      githubUrl: "https://github.com/yourusername/recommendation-system",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing my expertise in AI/ML through hands-on projects and real-world applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                project.featured ? 'ring-2 ring-purple-400/30' : ''
              }`}
            >
              {project.featured && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              )}

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                  
                  <ArrowUp className="text-purple-400 transform rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            <Github size={20} />
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
