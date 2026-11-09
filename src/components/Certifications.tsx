import React from 'react';
import { ArrowUpRight, Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Academy Graduate — Cloud Architecting",
      issuer: "Amazon Web Services (AWS)",
      date: "2024",
      description:
        "Practiced designing resilient, secure, and cost-optimized cloud architectures on AWS, covering core services including EC2, S3, RDS, IAM, and VPC networking.",
      skills: ["AWS", "Cloud Architecture", "EC2", "VPC", "IAM", "S3"],
      credentialUrl: "https://www.credly.com/badges/e2265021-5011-4847-86fd-ef20c301a59c/public_url",
    },
    {
      title: "Android Developer Virtual Certificate",
      issuer: "Google for Developers",
      date: "2024",
      description:
        "Completed Android Developer Virtual Certificate program covering mobile application architecture, Kotlin and Java development, and developer tooling.",
      skills: ["Android SDK", "Kotlin", "Java", "Mobile Architecture", "APIs"],
      credentialUrl: "https://www.linkedin.com/posts/himatejacherukumalli_android-internship-google-activity-7259859151583887361-7hBX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE04MlIBuWPvvIYtNfYp--0--ItENplktz8/",
    },
    {
      title: "Infosys Certified Software Programmer",
      issuer: "Infosys Springboard",
      date: "2024",
      description:
        "Accreditation for software engineering principles, algorithm design, data structures, and hands-on coding problem-solving.",
      skills: ["Software Engineering", "Algorithms", "Data Structures", "Python"],
      credentialUrl: "https://www.linkedin.com/posts/himatejacherukumalli_infosys-certificate-activity-7295848267815272450--I4Q?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE04MlIBuWPvvIYtNfYp--0--ItENplktz8",
    },
    {
      title: "Introduction to Blockchain and Cryptocurrency",
      issuer: "NPTEL — IIT Kharagpur",
      date: "2023",
      description:
        "Academic certification covering distributed consensus, cryptography, cryptocurrency economics, and smart contract development with distinction.",
      skills: ["Blockchain", "Ethereum", "Smart Contracts", "Cryptography"],
      credentialUrl: "https://nptel.ac.in/courses/106105220",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-6 lg:px-8 border-t border-[#1f1b16]/[0.08] bg-[#f7f4ee]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="font-mono text-xs text-[#7b7266] uppercase tracking-wider mb-2">
            Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#1f1b16] mb-3">
            Certifications
          </h2>
          <p className="text-base text-[#5e554a] max-w-2xl">
            Accreditations in cloud infrastructure, software engineering, and decentralized protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-[#fdfbf7] border border-[#1f1b16]/[0.08] rounded-xl p-6 sm:p-7 shadow-[0_1px_3px_rgba(31,27,22,0.03)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-[#1f1b16] leading-snug">
                      {cert.title}
                    </h3>
                    <div className="text-sm font-medium text-[#5e554a] mt-1">
                      {cert.issuer}
                    </div>
                  </div>
                  <span className="font-mono text-xs text-[#7b7266] bg-[#efe9df] px-2.5 py-1 rounded tabular-nums flex-shrink-0">
                    {cert.date}
                  </span>
                </div>

                <p className="text-sm text-[#5e554a] leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              <div>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-[11px] text-[#5e554a] bg-[#efe9df] px-2 py-0.5 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Plain action link */}
                <div className="pt-4 border-t border-[#1f1b16]/[0.06] flex items-center justify-between">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-sm font-medium text-[#1f1b16] hover:text-[#15803d] transition-colors duration-150"
                  >
                    <Award size={15} strokeWidth={1.5} className="text-[#5e554a]" />
                    <span>View credential</span>
                  </a>

                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7b7266] hover:text-[#1f1b16] p-1 transition-colors duration-150"
                    aria-label={`Open credential for ${cert.title}`}
                  >
                    <ArrowUpRight size={16} strokeWidth={1.5} />
                  </a>
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
