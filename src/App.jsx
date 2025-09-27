import React, { useState, useEffect , useRef } from 'react';
import emailjs from "emailjs-com";
import logo from './assets/pfp.jpg'; 
import student from './assets/student.jpg';
import event from './assets/event.png';
import { Github, Linkedin, Mail, Twitter, ExternalLink, Code, Palette, Database,  Braces, Cpu, Layers,Smartphone, ArrowRight, Send } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState({});
  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();
  
console.log("SERVICE:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log("TEMPLATE:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
console.log("PUBLIC KEY:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);





emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  form.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
    .then(
      () => {
        alert("✅ Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("❌ Failed to send message: " + error.text);
      }
    );
};

   
  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll navigation
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/swapnil-fuse', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/SWAPNIL-9309', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/Swapnilfuse3', label: 'Twitter' },
    { icon: Mail, href: 'mailto:swapnilfuse85@gmail.com', label: 'Email' }
  ];  

  const projects = [
    {
      title: 'Daily Dose Of Engineering',
      description: 'A web app providing short notes for engineering students, covering DBMS, OOP, DSA, and more. Useful for IT professionals and students.',
      tech: ['React', 'Node.js', 'Tailwind CSS'],
      image: 'https://i.pinimg.com/736x/24/33/9f/24339f8144d48b5b30ba588ca13d4825.jpg',
      github: 'https://github.com/SWAPNIL-9309/dd-engineering',
      live: 'https://swapnil-9309.github.io/dd-engineering/'
    },
    {
      title: 'Location Based Event Finder',
      description: 'A web app that help user find events happening around them based on their Location.',
      tech: ['Reactjs' ,'Nodejs' , 'Tailwind CSS'],
      image:'https://img.freepik.com/free-vector/flat-prom-background_23-2149365647.jpg?semt=ais_hybrid&w=740&q=80',
      github: '#',
      live: 'https://event-findr.vercel.app/'
    },
   
    {
      title: 'Portfolio Website',
      description: 'Responsive portfolio website showcasing modern design principles, smooth animations, and optimal performance.',
      tech: ['React', 'Vite', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop',
      github: '#',
      live: '#'
    }
  ];

  const skills = [
     { name: 'HTML', icon: Code, color: 'from-orange-500 to-red-500' },
  { name: 'CSS', icon: Palette, color: 'from-blue-500 to-cyan-500' },
  { name: 'JavaScript', icon: Braces, color: 'from-yellow-400 to-orange-500' },
  { name: 'React.js', icon: Layers, color: 'from-sky-500 to-blue-600' },
  { name: 'Node.js', icon: Database, color: 'from-green-500 to-emerald-600' },
  { name: 'C++', icon: Cpu, color: 'from-indigo-500 to-purple-600' },
  { name: 'DSA', icon: Code, color: 'from-pink-500 to-rose-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Fixed Social Icons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        {socialLinks.map(({ icon: Icon, href, label }, index) => (
          <a
            key={index}
            href={href}
            aria-label={label}
            className="w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-slate-600 hover:text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-xl shadow-lg border border-white/20"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-40 bg-white/80 backdrop-blur-md rounded-full px-8 py-4 shadow-lg border border-white/20">
        <div className="flex gap-8">
          {[ 'about', 'projects', 'skills', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`capitalize font-medium transition-all duration-300 ${
                activeSection === section 
                  ? 'text-blue-600 scale-110' 
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4">
        <div className={`text-center transform transition-all duration-1000 ${
          isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 animate-pulse">
              Swapnil Fuse
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600 font-light mb-8">
              Full-Stack Developer 
            </p>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Crafting digital experiences with modern technologies and creative design. 
              Passionate about building scalable applications that make a difference.
            </p>
          </div>
          
          <div className="flex gap-6 justify-center flex-wrap">
            <button 
              onClick={() => scrollToSection('projects')}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 hover:shadow-xl flex items-center gap-2"
            >
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full font-semibold hover:border-blue-500 hover:text-blue-600 hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`grid md:grid-cols-2 gap-12 items-center transform transition-all duration-1000 ${
            isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">About Me</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
               I am a passionate Frontend Web Developer with a strong foundation in HTML, CSS, JavaScript, React, and Tailwind CSS.


I am pursuing my education in Information Technology from International Institute of Information Technology , where I am developing a solid understanding of Data Structures, Algorithms, and Software Development. My academic background helps me build efficient, scalable, and user-friendly web applications.

Passion for Coding
I love solving complex problems through code and creating engaging web experiences. Whether it's designing responsive UI or optimizing performance, I strive to build clean, maintainable, and high-quality software solutions.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
               
              </p>
              <div className="flex gap-4">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">React</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">Node.js</span>
              
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-1">
                  <img 
                    src={logo} 
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A collection of projects that showcase my skills in web development, 
              design, and problem-solving.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 transform ${
                  isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <a href={project.github} className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <Github size={16} />
                    </a>
                    <a href={project.live} className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills & Expertise</h2>
            <p className="text-lg text-slate-600">
              Technologies and tools I use to bring ideas to life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center transform ${
                  isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-slate-300">
              Have a project in mind? I'd love to hear from you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className={`transform transition-all duration-1000 ${
              isVisible.contact ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, creative projects, 
                or just having a chat about technology and design.
              </p>
              
              <div className="space-y-4">
                {socialLinks.map(({ icon: Icon, href, label }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Icon size={20} />
                    </div>
                    <span className="font-medium">{label}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div className={`space-y-6 transform transition-all duration-1000 ${
              isVisible.contact ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
             <form ref={form} onSubmit={sendEmail} className={`space-y-6 transform transition-all duration-1000 ${
  isVisible.contact ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
}`}>
  <div>
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-300 focus:border-blue-400 focus:outline-none transition-colors"
    />
  </div>
  <div>
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-300 focus:border-blue-400 focus:outline-none transition-colors"
    />
  </div>
  <div>
    <textarea
      name="message"
      rows="6"
      placeholder="Your Message"
      required
      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-300 focus:border-blue-400 focus:outline-none transition-colors resize-none"
    ></textarea>
  </div>
  <button
    type="submit"
    className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2"
  >
    Send Message
    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
  </button>
</form>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 text-center">
        <div className="max-w-4xl mx-auto">
          {/* <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <a
                key={index}
                href={href}
                aria-label={label}
                className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-110"
              >
                <Icon size={20} />
              </a>
            ))}
          </div> */}
          
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-400">
              © 2025 Swapnil Fuse. All rights reserved. 
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;