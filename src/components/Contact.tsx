import React, { useRef, useState } from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const contactInfo = [
    {
      label: "Email",
      value: "himatejacherukumalli0@gmail.com",
      href: "mailto:himatejacherukumalli0@gmail.com",
      icon: Mail,
    },
    {
      label: "Location",
      value: "Hyderabad, India",
      href: "#",
      icon: MapPin,
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/himatejacherukumalli/",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/himatejachowdary",
      icon: Github,
    },
    {
      name: "Email",
      url: "mailto:himatejacherukumalli0@gmail.com",
      icon: Mail,
    },
  ];

  const ContactForm: React.FC = () => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [sending, setSending] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!formRef.current) return;

      setSending(true);

      const formData = new FormData(formRef.current);

      try {
        const response = await fetch("https://formspree.io/f/mnnwenzq", {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          toast({
            title: "Message sent",
            description: "Thank you for reaching out. I will respond soon.",
          });
          formRef.current.reset();
        } else {
          toast({
            title: "Send failed",
            description: "Something went wrong. Please try again.",
          });
        }
      } catch (error) {
        toast({
          title: "Send failed",
          description: "Network issue. Please try again later.",
        });
      }

      setSending(false);
    };

    return (
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <input type="hidden" name="form-name" value="contact" />

        <div>
          <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-[#5e554a] mb-1.5">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            required
            className="w-full h-11 px-3.5 bg-[#ffffff] border border-[#1f1b16]/[0.12] rounded-lg text-sm text-[#1f1b16] placeholder-[#7b7266]/70 focus:outline-none focus:border-[#15803d] focus:ring-1 focus:ring-[#15803d] transition-colors duration-150"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[#5e554a] mb-1.5">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            required
            className="w-full h-11 px-3.5 bg-[#ffffff] border border-[#1f1b16]/[0.12] rounded-lg text-sm text-[#1f1b16] placeholder-[#7b7266]/70 focus:outline-none focus:border-[#15803d] focus:ring-1 focus:ring-[#15803d] transition-colors duration-150"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-[#5e554a] mb-1.5">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full p-3.5 bg-[#ffffff] border border-[#1f1b16]/[0.12] rounded-lg text-sm text-[#1f1b16] placeholder-[#7b7266]/70 focus:outline-none focus:border-[#15803d] focus:ring-1 focus:ring-[#15803d] transition-colors duration-150 resize-y"
            placeholder="Your message"
          />
        </div>

        <button
          type="submit"
          disabled={sending}
          className="w-full h-11 px-6 bg-[#1f1b16] text-[#fdfbf7] text-sm font-medium rounded-lg hover:bg-[#332e26] active:scale-[0.98] transition-colors duration-150 disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f1b16]"
        >
          {sending ? "Sending..." : "Send message"}
        </button>
      </form>
    );
  };

  return (
    <section id="contact" className="py-20 px-6 lg:px-8 border-t border-[#1f1b16]/[0.08] bg-[#f7f4ee]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="font-mono text-xs text-[#7b7266] uppercase tracking-wider mb-2">
            Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#1f1b16] mb-3">
            Contact
          </h2>
          <p className="text-base text-[#5e554a] max-w-2xl">
            Available for fresher data analyst, machine learning engineer, and developer roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details & Links */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-base font-medium text-[#1f1b16] mb-4">
                Direct channels
              </h3>
              <div className="space-y-3">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="flex items-center space-x-3.5 bg-[#fdfbf7] border border-[#1f1b16]/[0.08] rounded-xl p-3.5"
                  >
                    <div className="p-2 rounded-lg bg-[#efe9df] text-[#1f1b16]">
                      <info.icon size={16} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-mono text-[11px] text-[#7b7266]">
                        {info.label}
                      </div>
                      {info.href !== "#" ? (
                        <a
                          href={info.href}
                          className="text-sm font-medium text-[#1f1b16] hover:text-[#15803d] transition-colors duration-150"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-sm font-medium text-[#1f1b16]">
                          {info.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base font-medium text-[#1f1b16] mb-4">
                Profiles
              </h3>
              <div className="flex items-center space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-[#fdfbf7] border border-[#1f1b16]/[0.08] rounded-lg text-[#5e554a] hover:text-[#1f1b16] hover:border-[#1f1b16]/[0.2] transition-colors duration-150"
                    aria-label={social.name}
                  >
                    <social.icon size={18} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-[#fdfbf7] border border-[#1f1b16]/[0.08] rounded-xl p-6 sm:p-8 shadow-[0_1px_3px_rgba(31,27,22,0.03)]">
            <h3 className="text-lg font-medium text-[#1f1b16] mb-1">
              Send a note
            </h3>
            <p className="text-sm text-[#5e554a] mb-6">
              Leave a message and I will reply to your email address directly.
            </p>
            <ContactForm />
          </div>
        </div>

        {/* Quiet Footer without AI hype line */}
        <footer className="mt-20 pt-8 border-t border-[#1f1b16]/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#7b7266]">
          <div>
            © 2026 Hima Teja Cherukumalli
          </div>
          <div>
            Data Science & Analytics • Hyderabad, India
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
