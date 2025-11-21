import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../ui/Logo';
import { useLanguage } from '../../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { href: "#home", label: t('nav.home') },
    { href: "#about", label: t('nav.about') },
    { href: "#services", label: t('nav.services') },
    { href: "#lift-app", label: t('nav.liftapp') },
    { href: "#testimonials", label: t('nav.testimonials') },
    { href: "#contact", label: t('nav.contact') }
  ];

  // Handle scroll event to change header style
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Logo />
        </motion.div>
        
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex space-x-8 items-center"
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`font-medium hover:text-primary transition-colors relative group ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'no' ? 'en' : 'no')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors ${isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
            aria-label="Toggle language"
          >
            {language === 'no' ? 'EN' : 'NO'}
          </button>
        </motion.nav>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="#contact"
            className="hidden md:flex items-center px-6 py-3 font-medium text-white bg-primary rounded-full hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg hover:translate-y-[-2px]"
          >
            <span>{t('nav.cta')}</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-full text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40"
            onClick={toggleMenu}
          >
            <svg 
              className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </motion.div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <a 
                    key={index}
                    href={item.href} 
                    className="font-medium text-gray-800 hover:text-primary transition-colors py-2 border-b border-gray-100"
                    onClick={(e) => {
                      // Close the menu
                      setIsMenuOpen(false);
                      
                      // Get the target element
                      const targetId = item.href.replace('#', '');
                      const targetElement = document.getElementById(targetId);
                      
                      // If the target exists, smoothly scroll to it
                      if (targetElement) {
                        e.preventDefault();
                        setTimeout(() => {
                          targetElement.scrollIntoView({ behavior: 'smooth' });
                        }, 300); // Small delay to allow menu to close
                      }
                    }}
                  >
                    {item.label}
                  </a>
                ))}
                
                <a
                  href="#contact"
                  className="flex items-center justify-center px-6 py-3 font-medium text-white bg-primary rounded-lg hover:bg-primary-dark transition-all duration-300 mt-4"
                  onClick={(e) => {
                    // Close the menu
                    setIsMenuOpen(false);

                    // Get the contact section element
                    const contactSection = document.getElementById('contact');

                    // If it exists, smoothly scroll to it
                    if (contactSection) {
                      e.preventDefault();
                      setTimeout(() => {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }, 300); // Small delay to allow menu to close
                    }
                  }}
                >
                  <span>{t('nav.cta')}</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>

                {/* Language Toggle for Mobile */}
                <button
                  onClick={() => setLanguage(language === 'no' ? 'en' : 'no')}
                  className="w-full p-3 text-center font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-300 mt-2"
                >
                  {language === 'no' ? 'Switch to English' : 'Bytt til Norsk'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 