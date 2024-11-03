'use client';
import React from "react";
import Navbar from "@/components/navbar";
import ParticleBackground from "@/components/particles";
import Footer from "@/components/footer";
import ProjectsSection from "@/components/projects";
import EventsSection from "@/components/events";
import { ArrowUpRight } from "lucide-react";
import './globals.css';

// CSS for fade-in animation
const styles = `
  .fade-in {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  .fade-in.visible {
    opacity: 1;
  }
`;

export default function Home() {
  const scrollToSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
      targetSection.classList.add('visible'); 
    }
  };

  const addFadeInOnLoad = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.add('visible');
    }
  };

  React.useEffect(() => {
    addFadeInOnLoad('events');
    addFadeInOnLoad('projects');
  }, []);

  return (
    <>
      <style>{styles}</style> {/* Injecting styles for animations */}
      <Navbar />
      <ParticleBackground />
      <div className="mt-48 flex flex-col items-center justify-center">
        <p className="bg-gradient-to-r from-[#6439FF] via-[#4F75FF] to-[#00CCDD] inline-block text-transparent bg-clip-text font-bold md:text-8xl sm:text-8xl subpixel-antialiased text-center font-michroma overflow-hidden whitespace-nowrap border-r-2 border-foreground animate-typing">NEXUS</p>
        <p className="text-center max-w-screen-md w-full overflow-x text-balance mt-12 font-bold subpixel-antialiased font-michroma md:text-3xl sm:text-3xl">&quot;Tomorrow&apos;s Technology for Today&apos;s World!&quot;</p>
        <p className="break-normal text-center max-w-screen-md w-full overflow-x text-balance mt-12 font-bold md:text-sm sm:text-sm subpixel-antialiased font-spacemono">Charting the Course of Innovation: Spearheading Revolutionary Advancements and Transformations in the Dynamic Landscape of Technology and Engineering.</p>
      </div>
      <div className="flex items-center justify-center mt-16">
        <button className="flex items-center justify-center bg-gradient-to-r from-[#6439FF] via-[#4F75FF] to-[#00CCDD] px-6 py-3 rounded font-michroma text-white hover:opacity-90 text-sm transition-opacity font-bold" onClick={() => scrollToSection('events')}>Events<span className="ml-2"> </span><ArrowUpRight /></button>
        <button className="ml-10 inline-flex items-center space-x-2 bg-gradient-to-r from-[#6439FF] via-[#4F75FF] to-[#00CCDD] px-6 py-3 rounded font-michroma text-white hover:opacity-90 text-sm transition-opacity font-bold" onClick={() => scrollToSection('projects')}>Projects<span> </span> <ArrowUpRight /></button>
      </div>
      <div id="events" className="font-michroma text-6xl font-bold flex items-center justify-center mt-72 mb-10 fade-in">
        <p>Events</p>
      </div>
      <EventsSection />
      <div id="projects" className="font-michroma text-6xl font-bold flex items-center justify-center mt-72 mb-10 fade-in">
        <p><span> </span><span className="bg-gradient-to-r from-[#6439FF] via-[#4F75FF] to-[#00CCDD] text-transparent bg-clip-text mx-auto">Projects</span></p>
      </div>
      <ProjectsSection />
      <Footer />
    </>
  );
}
