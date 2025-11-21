import React, { useRef, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const contactInfo = [
    {
      label: "Email",
      value: "himatejacherukumalli0@gmail.com",
      href: "mailto:himatejacherukumalli0@gmail.com"
    },
    {
      label: "Location",
      value: "Hyderabad, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/himatejacherukumalli/",
      icon: Linkedin,
      color: "hover:text-blue-400"
    },
    {
      name: "GitHub", 
      url: "https://github.com/himatejachowdary",
      icon: Github,
      color: "hover:text-gray-300"
    },
    {
      name: "Email",
      url: "mailto:himatejacherukumalli0@gmail.com",
      icon: Mail,
      color: "hover:text-green-400"
    }
  ];

  const ContactForm: React.FC = () => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [sending, setSending] = useState(false);
    const { toast } = useToast();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;
    const replyTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_REPLY as string | undefined;

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!formRef.current) return;

      if (!serviceId || !templateId || !publicKey) {
        toast({ title: 'Email not configured', description: 'Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY in your .env', duration: 6000 });
        return;
      }

      setSending(true);
      const data = new FormData(formRef.current);
      const templateParams: Record<string, any> = Object.fromEntries(data as any);

      // Ensure common dynamic fields for templates that expect them
      // EmailJS templates often use `to_email`, `reply_to`, or different variable names
      const senderEmail = templateParams.user_email || templateParams.email || '';
      const senderName = templateParams.user_name || templateParams.name || '';

      // Common aliases so templates using different variable names get values
      templateParams.to_email = templateParams.to_email || senderEmail;
      templateParams.reply_to = templateParams.reply_to || senderEmail;
      templateParams.from_name = templateParams.from_name || senderName;
      templateParams.from_email = templateParams.from_email || senderEmail;
      templateParams.name = templateParams.name || senderName;
      templateParams.email = templateParams.email || senderEmail;
      templateParams.subject = templateParams.subject || `Website message from ${senderName || senderEmail}`;
      templateParams.sent_at = templateParams.sent_at || new Date().toISOString();

      // Log params to help debugging in browser console (remove in production)
      // eslint-disable-next-line no-console
      console.log('Email template params:', templateParams);

      try {
        // Send notification to site owner / configured recipient (main template)
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        toast({ title: 'Message sent', description: "Thanks — I'll get back to you soon." });
        formRef.current.reset();

        // Attempt auto-reply to the user using the reply template if configured
        if (replyTemplateId) {
          const replyParams = {
            user_name: templateParams.user_name,
            user_email: templateParams.user_email,
            message: templateParams.message,
            to_email: templateParams.user_email,
            reply_to: templateParams.user_email,
          };

          try {
            await emailjs.send(serviceId, replyTemplateId, replyParams, publicKey);
            // optional: show a subtle toast for auto-reply success
            toast({ title: 'Auto-reply sent', description: 'Confirmation email sent to the user.' });
          } catch (replyErr) {
            // auto-reply failed; log but don't surface as main error
            // eslint-disable-next-line no-console
            console.error('EmailJS auto-reply error:', replyErr);
          }
        }
      } catch (err) {
        console.error('EmailJS error:', err);
        toast({ title: 'Send failed', description: 'Could not send message. Try again later.' });
      } finally {
        setSending(false);
      }
    };

    return (
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            required
            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors duration-300"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            required
            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors duration-300"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors duration-300"
            placeholder="Your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={sending}
          className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-60"
        >
          {sending ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    );
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            I'm always excited to discuss data analytics, collaborate on projects, or explore new opportunities. 
            Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    <div>
                      <span className="text-gray-400 text-sm">{info.label}</span>
                      <a
                        href={info.href}
                        className="block text-white hover:text-blue-400 transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Follow Me</h3>
              <div className="flex space-x-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
                    aria-label={social.name}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <ContactForm />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-slate-700">
          <p className="text-gray-400">
            © 2025 Hima Teja Cherukumalli. Built with passion for data analytics and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
