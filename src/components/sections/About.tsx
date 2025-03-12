import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-primary">Me</span></h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Din vei til mestring og treningsglede
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-secondary rounded-2xl"></div>
            <img 
              src="/placeholder-coach-about.jpg" 
              alt="About Me" 
              className="relative z-10 w-full h-auto rounded-2xl shadow-xl object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
              }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Pernille Strand</h3>
            <h4 className="text-lg text-primary font-medium mb-4">Personlig Trener & Kostholdsveileder</h4>
            
            <p className="text-gray-600 mb-6">
              Hei, jeg heter Pernille Strand og min største lidenskap er styrketrening.
            </p>
            
            <p className="text-gray-600 mb-6">
              Jeg har drevet med idrett hele livet, men det var først i 2021, da jeg la fotballskoene på hylla, at jeg virkelig forelsket meg i styrketrening. Det var noe helt spesielt med følelsen av å trene for å bli sterkere – både fysisk og mentalt.
            </p>
            
            <p className="text-gray-600 mb-6">
              Etter hvert som jeg ble sterkere og mer muskuløs, vokste også interessen for selve faget og jeg bestemte meg for at jeg ville lære mer. Derfor tok jeg utdanning og ble sertifisert personlig trener og kostholdsveileder i 2024.
            </p>
            
            <p className="text-gray-600 mb-6">
              Nå har jeg jobbet som online coach i over ett år og coachet over 100 fantastiske kvinner! Mitt mål er å hjelpe deg med å nå målene dine samtidig som du får kjenne på mestring og treningsglede!
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Personlig Trening</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Kostholdsrådgivning</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Sertifisert Trener</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Helhetlig Tilnærming</span>
              </div>
            </div>
            
            <a href="#contact" className="btn btn-primary">Ta Kontakt</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 