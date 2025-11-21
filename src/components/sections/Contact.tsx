import React from 'react';
import { motion } from 'framer-motion';
import CardQuestionnaire from './CardQuestionnaire';
import { useLanguage } from '../../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-90 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-primary">{t('contact.title')}</span> {t('contact.title.highlight')}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
          
          <div className="relative">
            {/* Subtle shadow and border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-2xl blur-md"></div>
            
            <div className="relative bg-white p-8 md:p-10 rounded-xl shadow-xl">
              <CardQuestionnaire />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 