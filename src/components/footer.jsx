import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-black/20 backdrop-blur-sm mt-32 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-michroma text-2xl bg-gradient-to-r from-[#6439FF] via-[#4F75FF] to-[#00CCDD] inline-block text-transparent bg-clip-text">
              NEXUS
            </h3>
            <p className="font-spacemono text-sm text-gray-400 max-w-sm">Explore innovation with Nexus, vertical of PES University's CSE department</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-michroma text-lg">Quick Links</h4>
            <ul className="space-y-2 font-spacemono text-sm text-gray-400">
              <li>
                <a href="/" className="hover:text-[#00CCDD] transition-colors">Home</a>
              </li>
              <li>
                <a href="/projects" className="hover:text-[#00CCDD] transition-colors">Projects</a>
              </li>
              <li>
                <a href="/events" className="hover:text-[#00CCDD] transition-colors">Events</a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#00CCDD] transition-colors">About Us</a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-michroma text-lg">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#00CCDD] transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="hover:text-[#00CCDD] transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-[#00CCDD] transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-[#00CCDD] transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-spacemono text-sm text-gray-400">
              © {currentYear} NEXUS. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="font-spacemono text-sm text-gray-400 hover:text-[#00CCDD] transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="font-spacemono text-sm text-gray-400 hover:text-[#00CCDD] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;