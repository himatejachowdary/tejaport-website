import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const Blog = () => {
  const readingList = [
    {
      title: "Understanding Neural Networks: A Beginner's Guide",
      source: "AWS Documentation",
      excerpt:
        "Comprehensive breakdown of multilayer perceptron architectures, forward propagation, loss functions, and backpropagation mechanics.",
      tags: ["Neural Networks", "Deep Learning", "Foundations"],
      url: "https://aws.amazon.com/what-is/neural-network/",
    },
    {
      title: "Generative Adversarial Networks (GANs) Explained",
      source: "GeeksforGeeks",
      excerpt:
        "Analysis of zero-sum game dynamics between generator and discriminator networks for synthetic data distribution modeling.",
      tags: ["Generative AI", "GANs", "Computer Vision"],
      url: "https://www.geeksforgeeks.org/generative-adversarial-network-gan/",
    },
    {
      title: "The Future of AI in Healthcare",
      source: "Healthcare Bulletin",
      excerpt:
        "Review of predictive modeling and diagnostic computer vision applications across clinical decision support and pharmacology.",
      tags: ["Applied AI", "Healthcare", "Predictive Analytics"],
      url: "https://healthcare-bulletin.co.uk/article/the-role-of-artificial-intelligence-in-modern-healthcare-advances-challenges-and-future-prospects-3187/",
    },
  ];

  return (
    <section id="blog" className="py-20 px-6 lg:px-8 border-t border-[#1f1b16]/[0.08] bg-[#f7f4ee]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="font-mono text-xs text-[#7b7266] uppercase tracking-wider mb-2">
            Curated references
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#1f1b16] mb-3">
            Recommended reading
          </h2>
          <p className="text-base text-[#5e554a] max-w-2xl">
            Selected foundational articles and engineering guides on machine learning, deep neural architectures, and applied analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {readingList.map((item) => (
            <article
              key={item.title}
              className="bg-[#fdfbf7] border border-[#1f1b16]/[0.08] rounded-xl p-6 shadow-[0_1px_3px_rgba(31,27,22,0.03)] flex flex-col justify-between"
            >
              <div>
                {/* Source tag */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-[#15803d] font-medium bg-[#efe9df] px-2.5 py-0.5 rounded">
                    {item.source}
                  </span>
                  <ExternalLink size={14} strokeWidth={1.5} className="text-[#7b7266]" />
                </div>

                <h3 className="text-base font-medium text-[#1f1b16] mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-[#5e554a] leading-relaxed mb-5">
                  {item.excerpt}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] text-[#5e554a] bg-[#efe9df] px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#1f1b16]/[0.06] flex items-center justify-between">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-sm font-medium text-[#1f1b16] hover:text-[#15803d] transition-colors duration-150"
                  >
                    <span>Read source</span>
                    <ArrowUpRight size={15} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
