import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  useEffect(() => {
    // Load the SimplyReview widget script
    const script = document.createElement('script');
    script.src = 'https://app.simplyreview.com/widgets/textcarousel/index.js';
    script.defer = true;
    script.async = true;
    
    // Add the script to the document
    document.body.appendChild(script);
    
    // Cleanup function to remove the script when component unmounts
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="testimonials" className="section bg-white relative overflow-hidden py-24">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight">Hva Klientene <span className="text-primary">Sier</span></h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg font-light">
              Se hvordan vi har hjulpet våre klienter oppnå sine treningsmål og endre livene deres gjennom personlig trening og kostholdsveiledning.
            </p>
          </motion.div>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* SimplyReview Widget */}
          <div data-widget-textcarousel="ogravRbD2faB56kaQpX4zYN9jdn1_Fbb6reDJbY4rRur0WS8V"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 