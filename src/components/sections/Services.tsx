import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group border-b-4 border-primary/70 hover:border-primary"
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="section bg-gray-50 py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight">Mine <span className="text-primary">Tjenester</span></h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg font-light">
              Jeg tilbyr en rekke treningstjenester tilpasset dine behov, enten du ønsker kostholdsrådgivning, online coaching eller transformasjonsprogrammer.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          <ServiceCard
            title="Kostholdsveiledning"
            description="Få skreddersydd kostholdsplan og veiledning som passer dine mål, preferanser og livsstil. Ernæring som støtter dine treringsresultater."
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 002 2h.5a.5.5 0 01.5.5v.5h2v-.5a.5.5 0 01.5-.5H10a2 2 0 002-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1H6V6zm5 7a1 1 0 10-2 0v.01a1 1 0 102 0V16z" clipRule="evenodd" />
              </svg>
            }
            delay={0.1}
          />
          
          <ServiceCard
            title="Online Coaching"
            description="Fleksibel treningsveiledning og oppfølging uansett hvor du er. Få treningsprogram, kostholdsråd og støtte digitalt."
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 00-1-1H7a1 1 0 00-1 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
              </svg>
            }
            delay={0.2}
          />
          
          <ServiceCard
            title="Transformasjonsprogrammer"
            description="Intensive trenings- og kostholdsplaner designet for å gi betydelige resultater innen en definert tidsramme. For deg som er klar for en forandring."
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1.323l-3.954 1.582a1 1 0 00-.646.934v4.286a1 1 0 00.648.937l3.952 1.566V18a1 1 0 002 0v-5.372l3.952-1.566a1 1 0 00.648-.937V5.838a1 1 0 00-.646-.934L11 4.323V3a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            }
            delay={0.3}
          />
        </div>
        
        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a href="#contact" className="btn btn-primary text-lg px-8 py-4 hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300">Bestill Konsultasjon</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services; 