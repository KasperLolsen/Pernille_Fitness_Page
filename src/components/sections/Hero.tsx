import React from 'react';
import { motion } from 'framer-motion';

// Custom styles for text shadows
const textShadowStyle = {
  textShadow: '0 0 10px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.5), 0 0 3px rgba(0, 0, 0, 1)'
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen">
      {/* Full-width background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/Eventuelt forsidebilde_.JPG" 
          alt="Pernille Fitness" 
          className="w-full h-full object-cover md:object-cover object-[60%_center] filter brightness-150"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
          }}
        />
        {/* Darker gradient overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/85 via-dark/70 to-transparent"></div>
      </div>
      
      {/* Content overlaid on the left side with neon text effects */}
      <div className="container relative z-10 flex h-screen">
        <div className="w-full md:w-1/2 px-6 py-12 md:py-16 md:px-12 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight drop-shadow-[0_0_12px_rgba(0,0,0,0.7)]">
              <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.9)] relative">
                COACH
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute -bottom-1 left-0 h-1.5 bg-primary rounded-full"
                ></motion.span>
              </span>
              <br className="hidden md:block" /> 
              PERNILLE
            </h1>
            
            <div className="mt-6 mb-12">
              <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-bold tracking-wide leading-relaxed">
                {/* First line with text-shadow for better visibility */}
                <div className="mb-1">
                  <span className="text-primary font-extrabold" style={textShadowStyle}>Transformerer</span>
                  <span className="font-semibold" style={textShadowStyle}> kropp og sinn</span>
                </div>
                
                {/* Second line with text-shadow and different styling */}
                <div className="font-normal italic text-white/95 text-base md:text-xl lg:text-2xl" style={textShadowStyle}>
                  — din reise til en sterkere versjon av deg selv
                </div>
              </h2>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="mt-10"
            >
              <a href="#contact" className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Start din reise
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 