import React from 'react';
import { ArrowUpRight, Github, ExternalLink, FileText } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      figure: "Fig. 1",
      method: "ARIMA time-series model",
      title: "Sales Forecasting using Time Series Analysis",
      description:
        "Time-series forecasting model using ARIMA methodology. Analyzed historical sales patterns, seasonal trends, and variance to project future operational sales demand.",
      technologies: ["Python", "ARIMA", "Pandas", "Matplotlib", "Scikit-learn"],
      actionLabel: "View live project",
      url: "https://himateja-sales-forecast.vercel.app/",
      icon: ExternalLink,
    },
    {
      figure: "Fig. 2",
      method: "K-Means clustering & DAX",
      title: "Customer Segmentation Dashboard",
      description:
        "Interactive Power BI dashboard for demographic and transactional segmentation. Applied K-Means clustering algorithms to categorize behavioral groups for business reporting.",
      technologies: ["Power BI", "Python", "K-Means", "Pandas", "DAX"],
      actionLabel: "View on GitHub",
      url: "https://github.com/himatejachowdary/customer-segmentation",
      icon: Github,
    },
    {
      figure: "Fig. 3",
      method: "BERT NLP & Streamlit",
      title: "YouTube Comment Sentiment Analysis using BERT",
      description:
        "Natural language processing pipeline analyzing comment sentiment across YouTube videos using fine-tuned BERT transformers, presented via an interactive Streamlit dashboard. Accompanied by published IEEE research.",
      technologies: ["Python", "BERT", "Streamlit", "Transformers", "NLP"],
      actionLabel: "IEEE Paper & Code",
      url: "https://github.com/himatejachowdary", // Ask user for exact link
      icon: FileText,
      needsUserLink: true,
    },
    {
      figure: "Fig. 4",
      method: "Solidity smart contracts",
      title: "Blockchain Voting System",
      description:
        "Decentralized voting architecture on Ethereum. Implemented immutable smart contracts with Solidity to ensure auditable, tamper-resistant ballot accounting.",
      technologies: ["Solidity", "Ethereum", "MetaMask", "Ganache", "Web3.js"],
      actionLabel: "View live project",
      url: "https://blockchain-voting-systems.netlify.app/",
      icon: ExternalLink,
    },
    {
      figure: "Fig. 5",
      method: "Predictive classification",
      title: "Sympto Scan Advanced",
      description:
        "Diagnostic symptom evaluation tool using classification models to calculate health indicators from structured patient input data.",
      technologies: ["React", "Machine Learning", "API Integration", "TailwindCSS"],
      actionLabel: "View live project",
      url: "https://symptoscan.web.app/",
      icon: ExternalLink,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 lg:px-8 border-t border-[#1f1b16]/[0.08] bg-[#f7f4ee]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="font-mono text-xs text-[#7b7266] uppercase tracking-wider mb-2">
            Selected work
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#1f1b16] mb-3">
            Projects
          </h2>
          <p className="text-base text-[#5e554a] max-w-2xl">
            Selected analytical models, machine learning systems, and software applications built with reproducible code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#fdfbf7] border border-[#1f1b16]/[0.08] rounded-xl p-6 sm:p-7 shadow-[0_1px_3px_rgba(31,27,22,0.03)] flex flex-col justify-between"
            >
              <div>
                {/* Signature detail: Report figure tag & method */}
                <div className="flex items-center justify-between pb-3 border-b border-[#1f1b16]/[0.06] mb-4">
                  <span className="font-mono text-xs font-medium text-[#1f1b16]">
                    {project.figure}
                  </span>
                  <span className="font-mono text-[11px] text-[#7b7266] bg-[#efe9df] px-2 py-0.5 rounded">
                    {project.method}
                  </span>
                </div>

                <h3 className="text-lg font-medium text-[#1f1b16] mb-2 leading-snug">
                  {project.title}
                </h3>

                <p className="text-sm text-[#5e554a] leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] text-[#5e554a] bg-[#efe9df] px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Plain action link */}
                <div className="pt-4 border-t border-[#1f1b16]/[0.06] flex items-center justify-between">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-sm font-medium text-[#1f1b16] hover:text-[#15803d] transition-colors duration-150"
                  >
                    <project.icon size={15} strokeWidth={1.5} className="text-[#5e554a]" />
                    <span>{project.actionLabel}</span>
                  </a>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7b7266] hover:text-[#1f1b16] p-1 transition-colors duration-150"
                    aria-label={`Open ${project.title}`}
                  >
                    <ArrowUpRight size={16} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet GitHub repository link */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/himatejachowdary?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 h-11 px-6 bg-[#1f1b16] text-[#fdfbf7] text-sm font-medium rounded-lg hover:bg-[#332e26] active:scale-[0.98] transition-colors duration-150"
          >
            <Github size={16} strokeWidth={1.5} />
            <span>View all repositories on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
