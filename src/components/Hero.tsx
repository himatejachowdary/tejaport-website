import React from 'react';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      const aboutSection = document.querySelector('#about');
      aboutSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Convert Google Drive sharing link to direct download link
  const handleResumeDownload = () => {
    const resumeUrl = 'https://drive.google.com/uc?export=download&id=1MlzsmPJRIKkudAwN0V-MQixmk5IYBDJd';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Hima_Teja_Cherukumalli_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-[calc(100vh-3.5rem)] pt-24 pb-16 lg:pt-32 lg:pb-24 flex items-center bg-[#f7f4ee]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text block */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-medium tracking-tight text-[#1f1b16] leading-[1.08] mb-4">
              Hima Teja Cherukumalli
            </h1>

            <p className="text-xl sm:text-2xl text-[#5e554a] font-normal leading-snug mb-5">
              Data science student building analytics and ML projects
            </p>

            <p className="text-base sm:text-lg text-[#5e554a] font-normal leading-relaxed max-w-xl mb-8">
              Undergraduate in Computer Science and Data Science at Malla Reddy University.
              Turning raw operational and time-series data into predictive models, dashboards,
              and verifiable results.
            </p>

            {/* Action Row: One dark primary button + plain text secondary link */}
            <div className="flex flex-wrap items-center gap-6">
              <button
                type="button"
                onClick={scrollToProjects}
                className="h-11 px-6 bg-[#1f1b16] text-[#fdfbf7] text-sm font-medium rounded-lg hover:bg-[#332e26] active:scale-[0.98] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f1b16]"
              >
                Explore projects
              </button>

              <button
                type="button"
                onClick={handleResumeDownload}
                className="text-sm font-medium text-[#5e554a] hover:text-[#1f1b16] underline underline-offset-4 decoration-[#1f1b16]/20 hover:decoration-[#1f1b16] transition-colors duration-150 focus-visible:outline-none"
              >
                Download resume
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual - Fine line drawing of sales forecast */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#fdfbf7] border border-[#1f1b16]/[0.08] rounded-xl p-5 sm:p-6 shadow-[0_1px_3px_rgba(31,27,22,0.03),0_6px_20px_rgba(31,27,22,0.03)]">
              {/* Card Header: Report figure label + model tag */}
              <div className="flex items-center justify-between pb-4 border-b border-[#1f1b16]/[0.06]">
                <div className="font-mono text-xs text-[#1f1b16] font-medium tracking-tight">
                  Fig. 1 — Sales forecast
                </div>
                <div className="inline-flex items-center font-mono text-[11px] text-[#5e554a] bg-[#efe9df] px-2 py-0.5 rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#15803d] mr-1.5" />
                  ARIMA(1, 1, 1)
                </div>
              </div>

              {/* Chart Coordinate Frame */}
              <div className="py-4">
                <svg
                  viewBox="0 0 340 190"
                  className="w-full h-auto overflow-visible select-none"
                  aria-label="Sales forecast time series plot"
                >
                  {/* Grid Lines */}
                  <line x1="24" y1="35" x2="330" y2="35" stroke="rgba(31, 27, 22, 0.05)" strokeWidth="1" />
                  <line x1="24" y1="75" x2="330" y2="75" stroke="rgba(31, 27, 22, 0.05)" strokeWidth="1" />
                  <line x1="24" y1="115" x2="330" y2="115" stroke="rgba(31, 27, 22, 0.05)" strokeWidth="1" />
                  <line x1="24" y1="155" x2="330" y2="155" stroke="rgba(31, 27, 22, 0.08)" strokeWidth="1" />

                  {/* Vertical origin divider */}
                  <line
                    x1="210"
                    y1="25"
                    x2="210"
                    y2="155"
                    stroke="rgba(31, 27, 22, 0.12)"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />

                  {/* Forecast 95% Confidence Interval Band */}
                  <path
                    d="M 210 76 C 230 62, 255 52, 280 48 C 305 44, 320 32, 330 28 L 330 78 C 320 68, 305 92, 280 88 C 255 84, 230 80, 210 76 Z"
                    fill="rgba(21, 128, 61, 0.08)"
                  />

                  {/* Observed Series (Solid Ink Line) */}
                  <path
                    d="M 24 136 C 42 128, 54 132, 68 142 C 82 152, 94 114, 108 110 C 122 106, 134 126, 148 98 C 162 70, 174 96, 186 104 C 196 112, 202 78, 210 76"
                    fill="none"
                    stroke="#1f1b16"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Observed Data Key Vertices */}
                  <circle cx="24" cy="136" r="2" fill="#1f1b16" />
                  <circle cx="68" cy="142" r="2" fill="#1f1b16" />
                  <circle cx="108" cy="110" r="2" fill="#1f1b16" />
                  <circle cx="148" cy="98" r="2" fill="#1f1b16" />
                  <circle cx="186" cy="104" r="2" fill="#1f1b16" />
                  <circle cx="210" cy="76" r="2.5" fill="#1f1b16" />

                  {/* Projected Forecast Series (Dashed Green Line) */}
                  <path
                    d="M 210 76 C 228 68, 246 62, 268 68 C 290 74, 310 44, 330 48"
                    fill="none"
                    stroke="#15803d"
                    strokeWidth="1.75"
                    strokeDasharray="4 3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Projected Endpoint Dot */}
                  <circle cx="330" cy="48" r="3" fill="#15803d" />

                  {/* Axis baseline ticks */}
                  <line x1="24" y1="155" x2="24" y2="159" stroke="#7b7266" strokeWidth="1" />
                  <line x1="86" y1="155" x2="86" y2="159" stroke="#7b7266" strokeWidth="1" />
                  <line x1="148" y1="155" x2="148" y2="159" stroke="#7b7266" strokeWidth="1" />
                  <line x1="210" y1="155" x2="210" y2="161" stroke="#1f1b16" strokeWidth="1" />
                  <line x1="270" y1="155" x2="270" y2="159" stroke="#7b7266" strokeWidth="1" />
                  <line x1="330" y1="155" x2="330" y2="159" stroke="#7b7266" strokeWidth="1" />

                  {/* Subhead axis markers without invented numbers */}
                  <text x="24" y="174" className="font-mono text-[9px] fill-[#7b7266]">
                    Historical sequence
                  </text>
                  <text x="210" y="174" textAnchor="middle" className="font-mono text-[9px] fill-[#1f1b16] font-medium">
                    Horizon
                  </text>
                  <text x="330" y="174" textAnchor="end" className="font-mono text-[9px] fill-[#15803d] font-medium">
                    Forecast
                  </text>
                </svg>
              </div>

              {/* Card Footer: Method & Legend */}
              <div className="pt-3 border-t border-[#1f1b16]/[0.06] flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center space-x-4 font-mono text-[11px] text-[#5e554a]">
                  <span className="inline-flex items-center">
                    <span className="w-3.5 h-[1.75px] bg-[#1f1b16] mr-1.5 inline-block" />
                    Observed
                  </span>
                  <span className="inline-flex items-center">
                    <span className="w-3.5 h-[1.75px] border-b-2 border-dashed border-[#15803d] mr-1.5 inline-block" />
                    Forecast
                  </span>
                  <span className="inline-flex items-center">
                    <span className="w-2.5 h-2.5 bg-[#15803d]/15 border border-[#15803d]/30 rounded-sm mr-1.5 inline-block" />
                    95% CI
                  </span>
                </div>
                <div className="font-mono text-[10px] text-[#7b7266]">
                  Time Series Analysis
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
