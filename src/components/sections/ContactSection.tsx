import React from "react";
import CardQuestionnaire from "./CardQuestionnaire";

function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Get In Touch</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Ready to transform your fitness journey? Let me know what you're
          looking for, and I'll help you achieve your goals.
        </p>

        <CardQuestionnaire />
      </div>
    </section>
  );
}

export default ContactSection;
