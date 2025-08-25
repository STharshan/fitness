import React from 'react';
import { FiPhone, FiMail, FiMapPin, FiCheck } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[#0d121e] text-white pt-16 pb-6 px-4">
      <div className="max-w-6xl mx-auto text-center">

        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Get Started Today</h2>
        <p className="text-gray-300 mb-10 max-w-xl mx-auto">
          Take the first step towards transforming your life with our supportive community.
        </p>

        {/* Contact and What You Get */}
        <div className="grid md:grid-cols-2 gap-8 text-left justify-center">
          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact Information</h4>
            <ul className="space-y-4">
              <a 
                href="tel:+441234567890" 
                className="flex items-center text-gray-300 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"  
              >
                <FiPhone className="text-[#ef7141] mr-3" size={18} />
                Call us for your free consultation
              </a>

              <a 
                href="mailto:anthonyspalding@committedfitness.co.uk" 
                className="flex items-center text-gray-300 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"  
              >
                <FiMail className="text-[#ef7141] mr-3" size={18} />
                anthonyspalding@committedfitness.co.uk
              </a>

              <a
                href="https://www.google.com/maps?q=Committed+Fitness+UK"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white"
              >
                <FiMapPin className="text-[#ef7141] mr-3" size={18} />
                Visit our training facility
              </a>

            </ul>
          </div>

          {/* What You Get */}
          <div className="bg-[#1c2433] rounded-lg px-6 py-6">
            <h4 className="text-white font-bold text-lg mb-4">What You Get</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <FiCheck className="text-[#ef7141] mr-3" size={18} />
                Free initial consultation
              </li>
              <li className="flex items-center">
                <FiCheck className="text-[#ef7141] mr-3" size={18} />
                Ice breaker session
              </li>
              <li className="flex items-center">
                <FiCheck className="text-[#ef7141] mr-3" size={18} />
                Personalized fitness assessment
              </li>
              <li className="flex items-center">
                <FiCheck className="text-[#ef7141] mr-3" size={18} />
                Meet your training community
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo + Brand Name */}
          <div className="flex items-center">
            <img
              src="/logo.png" // 👈 Update path if your logo is elsewhere
              alt="Committed Fitness Logo"
              className="h-10 w-auto mr-3"
            />
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400 text-center md:text-right">
            © 2024 Committed Fitness. All rights reserved. Transform your life with community-driven fitness.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
