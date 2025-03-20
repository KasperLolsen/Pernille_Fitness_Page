import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-white py-24">
      <div className="container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight">Om <span className="text-primary">Meg</span></h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg font-light">
              Din partner for styrke, energi og livsbalanse
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -bottom-8 -right-8 w-full h-full bg-secondary/60 rounded-2xl"></div>
            <img 
              src="/images/Svart outfit.JPG" 
              alt="Pernille Strand" 
              className="relative z-10 w-full h-auto rounded-2xl shadow-2xl object-cover hover:scale-[1.01] transition-transform duration-500"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
              }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pr-8"
          >
            <h3 className="text-3xl font-bold mb-5 tracking-tight">Pernille Strand</h3>
            <h4 className="text-xl text-primary font-medium mb-6">Personlig Trener & Kostholdsveileder</h4>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Hei, jeg heter Pernille Strand og min største lidenskap er styrketrening.
            </p>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Jeg har drevet med idrett hele livet, men det var først i 2021, da jeg la fotballskoene på hylla, at jeg virkelig forelsket meg i styrketrening. Det var noe helt spesielt med følelsen av å trene for å bli sterkere – både fysisk og mentalt.
            </p>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Etter hvert som jeg ble sterkere og mer muskuløs, vokste også interessen for selve faget og jeg bestemte meg for at jeg ville lære mer. Derfor tok jeg utdanning og ble sertifisert personlig trener og kostholdsveileder i 2024.
            </p>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              Nå har jeg jobbet som online coach i over ett år og coachet over 100 fantastiske kvinner! Mitt mål er å hjelpe deg med å nå målene dine samtidig som du får kjenne på mestring og treningsglede!
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center group">
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                    <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="font-medium">Sertifisert Trener</span>
              </div>
              <div className="flex items-center group">
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="font-medium">Helhetlig Tilnærming</span>
              </div>
            </div>
            
            <a href="#contact" className="btn btn-primary hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300">Ta Kontakt</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 