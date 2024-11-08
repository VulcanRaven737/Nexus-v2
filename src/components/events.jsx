import React from 'react';
import { Calendar, Clock, MapPin, ArrowUpRight } from 'lucide-react';
import Image from 'next/image'; 

const EventCard = ({ title, date, time, venue, description, registrationLink, imageUrl, comingSoon }) => (
  <div className="relative group h-[500px] overflow-hidden rounded-xl">
    <div className="absolute inset-0">
      <Image 
        src={imageUrl} 
        alt={title} 
        layout="fill" 
        objectFit="cover"
        className="transform group-hover:scale-105 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-black/80 to-black/120 group-hover:from-black/110 group-hover:via-black/90 group-hover:to-black/130 transition-all duration-500" />
    </div>
    <div className="relative h-full p-8 flex flex-col justify-between">
      <div>
        <h3 className="font-michroma text-4xl bg-gradient-to-r from-[#6439FF] via-[#4F75FF] to-[#00CCDD] inline-block text-transparent bg-clip-text mb-4 font-bold">
          {title}
        </h3>
        <div className="space-y-3 font-spacemono text-gray-300">
          {!comingSoon && (
            <>
              <div className="flex items-center space-x-2">
                <Calendar size={18} className="text-[#4F75FF]" />
                <span>{date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={18} className="text-[#4F75FF]" />
                <span>{time}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={18} className="text-[#4F75FF]" />
                <span>{venue}</span>
              </div>
            </>
          )}
        </div>
        <p className="mt-6 font-spacemono text-gray-400 max-w-lg">
          {description}
        </p>
      </div>
      <div className="mt-auto">
        {comingSoon ? (
          <div className="inline-block bg-gradient-to-r from-[#6439FF] via-[#4F75FF] to-[#00CCDD] px-6 py-3 rounded font-michroma text-white font-bold">
            Coming Soon
          </div>
        ) : (
          <a 
            href={registrationLink}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#6439FF] via-[#4F75FF] to-[#00CCDD] px-6 py-3 rounded font-michroma text-white hover:opacity-90 transition-opacity font-bold">
            <span>Register Now</span>
            <ArrowUpRight size={18} />
          </a>
        )}
      </div>
    </div>
  </div>
);

const EventsSection = () => {
  const events = [
    {
      title: "NexCode",
      date: "December XX-XX, 2024",
      time: "24 Hours",
      venue: "PESU52",
      description: "Our flagship hackathon where innovators compete to develop cutting-edge solutions using emerging technologies. Join us for 48 hours of coding, creativity, and breakthrough innovations.",
      registrationLink: "#",
      imageUrl: "/images/NexCode.webp", // Ensure path is correct
      comingSoon: false
    },
    {
      title: "NexHunt",
      date: "January XX, 2025",
      time: "12 Hours",
      venue: "MRD Auditorium",
      description: "Questions ranging from Machine Learning, Blockchain, Web Development, Algorithms and much more. On solving every question, you get a clue which would be helpful for solving the special 11th question.",
      registrationLink: "#",
      imageUrl: "/images/NexHunt.webp", // Ensure path is correct
      comingSoon: false
    },
    {
      title: "NeuroNex",
      description: "A revolutionary event focused on the intersection of neuroscience and technology. Explore the frontiers of brain-computer interfaces and neural engineering.",
      imageUrl: "/images/NeuroNex-1.webp", // Ensure path is correct
      comingSoon: true
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="lg:col-span-2">
          <EventCard {...events[0]} />
        </div>
        {events.slice(1).map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default EventsSection;
