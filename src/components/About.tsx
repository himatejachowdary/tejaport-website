import React from 'react';
import { BarChart3, Code2, Network } from 'lucide-react';

const About = () => {
  const focusAreas = [
    {
      icon: BarChart3,
      title: "Data analytics & modeling",
      description: "Statistical analysis, time-series forecasting, and interactive dashboards with Python, Power BI, and Tableau."
    },
    {
      icon: Code2,
      title: "Data engineering & APIs",
      description: "Automated ETL pipelines, data extraction, and backend REST APIs with Python, Java, and relational SQL databases."
    },
    {
      icon: Network,
      title: "Distributed systems",
      description: "Decentralized application architectures, smart contracts, and data integrity mechanisms with Ethereum and Solidity."
    }
  ];

  return (
    <section id="about" className="py-20 px-6 lg:px-8 border-t border-[#1f1b16]/[0.08] bg-[#f7f4ee]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="font-mono text-xs text-[#7b7266] uppercase tracking-wider mb-2">
            Overview
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#1f1b16]">
            About
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#5e554a] font-normal leading-relaxed">
            <p>
              I am a Computer Science undergraduate at Malla Reddy University in Hyderabad,
              specializing in Data Science and Analytics. My academic and project work centers on
              transforming raw datasets into reproducible models, clean dashboards, and measurable outcomes.
            </p>

            <p>
              My foundation covers statistical computing, data wrangling, and predictive machine learning.
              I work daily with Python, SQL, Pandas, NumPy, and Scikit-learn, alongside visualization suites
              such as Power BI and Tableau to evaluate patterns, distributions, and variance in operational data.
            </p>

            <p>
              Alongside core analytics, I study distributed ledger architectures. I explore how smart contracts
              and cryptographic consensus can enforce transparent data verification across public and private
              systems.
            </p>
          </div>

          {/* Structured Focus Areas */}
          <div className="lg:col-span-5 space-y-4">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="bg-[#fdfbf7] border border-[#1f1b16]/[0.08] rounded-xl p-5 shadow-[0_1px_3px_rgba(31,27,22,0.03)]"
              >
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-[#efe9df] text-[#1f1b16] flex-shrink-0 mt-0.5">
                    <area.icon size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-[#1f1b16] mb-1">
                      {area.title}
                    </h3>
                    <p className="text-sm text-[#5e554a] leading-relaxed">
                      {area.description}
                    </p>
                  </div>
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
