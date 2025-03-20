import React from 'react';
import { motion } from 'framer-motion';

const LiftApp: React.FC = () => {
  return (
    <section id="lift-app" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* App Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-primary">LIFT</span> by Pernille
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Ta treningsreisen din til neste nivå med LIFT by Pernille - din personlige treningspartner designet av Coach Pernille.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Skreddersydde treningsprogrammer for alle nivåer</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Video-instruksjoner for riktig teknikk</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Kostholdsplaner og oppskrifter</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Fremgangssporing og personlige mål</span>
              </li>
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://apps.apple.com/search?term=lift%20by%20pernille"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-black hover:bg-black/90 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"></path>
                </svg>
                App Store
              </a>
              <p className="text-sm text-gray-500 mt-2">
                Merk: Søk etter "LIFT by Pernille" hvis appen ikke vises automatisk.
              </p>
            </div>
          </motion.div>
          
          {/* App Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              {/* Subtle glow effect behind the image */}
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-xl"></div>
              
              <img 
                src="/images/LIFT innhold.png" 
                alt="LIFT by Pernille" 
                className="relative rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LiftApp; 