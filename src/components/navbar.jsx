import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navigationItems = ['Home', 'About', 'Projects', 'Events'];

  return (
    <nav className="bg-[#18181b] border-b border-zinc-800 bg-opacity-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image 
                src="/nexus.ico" 
                width={50} 
                height={50} 
                alt="Logo" 
              />
            </Link>
          </div>

          <div className="hidden md:flex md:space-x-8">
            {navigationItems.map((item) => (
              <Link key={item} href="/" className="text-gray-300 hover:text-white px-2 py-2 text-sm font-bold font-michroma">
                {item}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-zinc-800"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#18181b]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <Link key={item} href="/" className="block text-gray-300 hover:text-white hover:bg-zinc-800 px-3 py-2 rounded-md text-base font-medium">
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
