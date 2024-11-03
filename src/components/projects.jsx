import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

const ProjectCard = ({ title, description, image, githubLink, demoLink }) => (
  <div className="group relative bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-[#4F75FF] transition-all duration-300 overflow-hidden">
    <div className="relative h-48 rounded-lg overflow-hidden mb-6">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
    <div className="space-y-4">
      <h3 className="font-michroma text-xl bg-gradient-to-r from-[#6439FF] via-[#4F75FF] to-[#00CCDD] inline-block text-transparent bg-clip-text font-bold">
        {title}
      </h3>
      <p className="font-spacemono text-sm text-gray-400">
        {description}
      </p>
      <div className="flex space-x-4 pt-4">
        <a 
          href={githubLink}
          className="flex items-center space-x-2 font-michroma text-sm text-gray-400 hover:text-[#00CCDD] transition-colors"
        >
          <Github size={18} />
          <span>View Code</span>
        </a>
        <a 
          href={demoLink}
          className="flex items-center space-x-2 font-michroma text-sm text-gray-400 hover:text-[#00CCDD] transition-colors"
        >
          <ArrowUpRight size={18} />
          <span>Live Demo</span>
        </a>
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Assistant",
      description: "A next-generation AI assistant powered by machine learning, offering personalized support and intelligent automation for enhanced productivity.",
      image: "ai.jpeg",
      githubLink: "#",
      demoLink: "#"
    },
    {
      title: "Quantum Computing",
      description: "Exploring quantum algorithms and their applications in solving complex computational problems with unprecedented efficiency.",
      image: "quantum.jpeg",
      githubLink: "#",
      demoLink: "#"
    },
    {
      title: "Blockchain Platform",
      description: "A decentralized platform leveraging blockchain technology for secure, transparent, and efficient digital transactions.",
      image: "blockchain.jpeg",
      githubLink: "#",
      demoLink: "#"
    },
    {
      title: "IoT Ecosystem",
      description: "An interconnected system of smart devices providing real-time monitoring and automated control for enhanced living spaces.",
      image: "iot.jpeg",
      githubLink: "#",
      demoLink: "#"
    },
    {
      title: "Neural Interface",
      description: "Advanced brain-computer interface technology enabling direct neural communication for revolutionary medical applications.",
      image: "neural.jpeg",
      githubLink: "#",
      demoLink: "#"
    },
    {
      title: "Green Energy",
      description: "Innovative renewable energy solutions combining solar, wind, and advanced storage technologies for sustainable power generation.",
      image: "green.jpeg",
      githubLink: "#",
      demoLink: "#"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 mb-60">
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;