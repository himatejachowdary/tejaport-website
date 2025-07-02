
import React from 'react';
import { Calendar, ArrowUp } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Understanding Neural Networks: A Beginner's Guide",
      excerpt: "Dive deep into the fundamentals of neural networks, exploring how they mimic the human brain to solve complex problems in machine learning.",
      date: "March 15, 2024",
      readTime: "8 min read",
      tags: ["Neural Networks", "Deep Learning", "Beginner"],
      url: "/blog/understanding-neural-networks"
    },
    {
      title: "Generative Adversarial Networks (GANs) Explained",
      excerpt: "Explore the fascinating world of GANs, how they work, and their applications in creating realistic images, art, and synthetic data.",
      date: "February 28, 2024", 
      readTime: "12 min read",
      tags: ["GANs", "Generative AI", "Computer Vision"],
      url: "https://www.geeksforgeeks.org/generative-adversarial-network-gan/"
    },
    {
      title: "The Future of AI in Healthcare",
      excerpt: "Analyzing how artificial intelligence is revolutionizing healthcare, from diagnostic imaging to drug discovery and personalized medicine.",
      date: "February 10, 2024",
      readTime: "10 min read", 
      tags: ["AI", "Healthcare", "Future Tech"],
      url: "/blog/ai-in-healthcare"
    }
  ];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Blog & Insights
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Sharing knowledge and insights about artificial intelligence, machine learning, and emerging technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4">
                  <a
                    href={post.url}
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-medium"
                  >
                    Read More
                  </a>
                  
                  <ArrowUp className="text-purple-400 transform rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={16} />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/blog"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            <span>View All Posts</span>
            <ArrowUp className="transform rotate-45" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
