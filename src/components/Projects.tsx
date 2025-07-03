import React from 'react';
import { Github, ArrowUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Sales Forecasting using Time Series Analysis",
      description: "Built a comprehensive sales forecasting model using Python and ARIMA methodology. Analyzed historical sales data to predict future trends with high accuracy, incorporating seasonal patterns and market fluctuations.",
      technologies: ["Python", "ARIMA", "Pandas", "Matplotlib", "Scikit-learn"],
      githubUrl: "https://himateja-sales-forecast.vercel.app/",
      featured: true
    },
    {
      title: "Customer Segmentation Dashboard",
      description: "Developed an interactive Power BI dashboard for customer segmentation analysis. Used clustering algorithms to identify distinct customer groups and created visualizations for business decision-making.",
      technologies: ["Power BI", "Python", "K-Means", "Pandas", "DAX"],
      githubUrl: "https://github.com/himatejachowdary/customer-segmentation",
      featured: true
    },
    {
      title: "Blockchain Voting System",
      description: "Academic project exploring decentralized voting using Ethereum blockchain. Implemented smart contracts with Solidity to ensure transparent and tamper-proof voting mechanisms.",
      technologies: ["Solidity", "Ethereum", "MetaMask", "Ganache", "Web3.js"],
      githubUrl: "https://blockchain-voting-systems.netlify.app/",
      featured: true
    },
    {
      title: "COVID-19 Data Analysis",
      description: "Comprehensive analysis of COVID-19 data trends using Python. Created interactive visualizations to track infection rates, recovery patterns, and vaccination progress across different regions.",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
      githubUrl: "https://github.com/himatejachowdary/covid19-analysis",
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
            Showcasing my expertise in data analytics and blockchain through academic projects and real-world applications
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
            href="https://github.com/himatejachowdary?tab=repositories"
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
