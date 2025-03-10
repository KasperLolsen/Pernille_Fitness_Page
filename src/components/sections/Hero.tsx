import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      {/* Background diagonal shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary opacity-10 rounded-full"></div>
        <div className="absolute top-64 -left-32 w-96 h-96 bg-secondary opacity-10 rounded-full"></div>
      </div>
      
      <div className="container relative pt-20 pb-24 md:pt-32 md:pb-48">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-dark mb-6">
              Transform Your <span className="text-primary">Body</span> & <span className="text-primary">Life</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Personalized fitness coaching and nutrition plans tailored to your unique goals and lifestyle. Start your journey today!
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="btn btn-primary text-center">
                Start Your Journey
              </a>
              <a href="#services" className="btn border-2 border-dark text-dark hover:bg-dark hover:text-white text-center">
                Learn More
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-primary rounded-2xl"></div>
              <img 
                src="/placeholder-fitness-coach.jpg" 
                alt="Fitness Coach" 
                className="relative z-10 w-full h-auto rounded-2xl shadow-xl object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
                }}
              />
            </div>
          </motion.div>
        </div>
        
        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
        >
          <div>
            <h3 className="text-3xl font-bold text-primary mb-2">500+</h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary mb-2">10+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary mb-2">100%</h3>
            <p className="text-gray-600">Satisfaction</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary mb-2">24/7</h3>
            <p className="text-gray-600">Support</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 