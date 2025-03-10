import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface TestimonialProps {
  name: string;
  role: string;
  quote: string;
  image: string;
  rating: number;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Mette Jensen",
    role: "Lost 15kg",
    quote: "Working with Pernille has completely transformed my life. Not only did I lose weight, but I gained so much confidence and energy. Her personalized approach made all the difference.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    name: "Lars Nielsen",
    role: "Gained Muscle Mass",
    quote: "After years of struggling to build muscle, Pernille helped me design a training program and nutrition plan that finally helped me achieve my goals. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    name: "Sofie Hansen",
    role: "Marathon Runner",
    quote: "Pernille's sports-specific nutrition advice improved my marathon time by 20 minutes. Her knowledge of performance nutrition is incredible.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5
  },
  {
    name: "Thomas Andersen",
    role: "Busy Professional",
    quote: "As a busy CEO, I never thought I'd find time for fitness. Pernille created a program that fits perfectly into my hectic schedule, and I've never felt better.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5
  },
  {
    name: "Emma Pedersen",
    role: "Post-pregnancy Transformation",
    quote: "After having two children, I thought I'd never get back in shape. Pernille's supportive approach helped me regain my strength and confidence in just 6 months.",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section id="testimonials" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client <span className="text-primary">Testimonials</span></h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Read what my clients have to say about their transformation journeys
            </p>
          </motion.div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 left-0 w-full h-64 bg-primary opacity-5">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary rounded-full opacity-10"></div>
              <div className="absolute top-20 -left-10 w-40 h-40 bg-secondary rounded-full opacity-10"></div>
            </div>
            
            <div className="relative p-8 md:p-12">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/150";
                    }}
                  />
                </div>
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-lg md:text-xl italic mb-6 text-gray-700">"{testimonials[activeIndex].quote}"</p>
                
                <h4 className="text-xl font-bold">{testimonials[activeIndex].name}</h4>
                <p className="text-primary">{testimonials[activeIndex].role}</p>
              </motion.div>
              
              <div className="flex justify-between mt-8">
                <button 
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-primary' : 'bg-gray-300'}`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors"
                  aria-label="Next testimonial"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 