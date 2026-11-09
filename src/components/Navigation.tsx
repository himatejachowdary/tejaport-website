import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#blog', label: 'Reading' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-150 ${
        isScrolled
          ? 'bg-[#f7f4ee]/95 backdrop-blur-sm border-b border-[#1f1b16]/[0.08]'
          : 'bg-[#f7f4ee] border-b border-[#1f1b16]/[0.04]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <a
            href="#"
            className="text-base font-medium tracking-tight text-[#1f1b16] hover:opacity-80 transition-opacity duration-150"
          >
            Hima Teja Cherukumalli
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-[#5e554a] hover:text-[#1f1b16] transition-colors duration-150 focus-visible:outline-none focus-visible:underline"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#1f1b16] hover:bg-[#efe9df] rounded-md transition-colors duration-150"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#fdfbf7] border border-[#1f1b16]/[0.08] rounded-xl p-2 mb-3 shadow-[0_4px_16px_rgba(31,27,22,0.06)]">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="w-full text-left px-3 py-2 text-sm text-[#5e554a] hover:text-[#1f1b16] hover:bg-[#efe9df] rounded-lg transition-colors duration-150"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
