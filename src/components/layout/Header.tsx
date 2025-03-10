import React, { useState } from 'react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container flex justify-between items-center py-4">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-primary">Pernille Fitness</a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="font-medium hover:text-primary transition-colors">About Me</a>
          <a href="#services" className="font-medium hover:text-primary transition-colors">Services</a>
          <a href="#testimonials" className="font-medium hover:text-primary transition-colors">Testimonials</a>
          <a href="#contact" className="font-medium hover:text-primary transition-colors">Contact</a>
        </nav>
        
        <a href="#contact" className="hidden md:block btn btn-primary">
          Get Started
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 border-t">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Me
            </a>
            <a 
              href="#services" 
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#testimonials" 
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="#contact" 
              className="btn btn-primary text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 