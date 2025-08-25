import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { useNavigate, useLocation } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLearnMore = () => {
    if (location.pathname === '/') {
      const section = document.getElementById('training');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById('training');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <section className="bg-[#fef2e4] py-16 px-4 text-center">
      {/* Tag */}
      <div className="inline-block bg-[#f15a07] text-white text-sm font-semibold px-4 py-2 rounded-full mb-4 mt-20">
        Small Group Training
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold max-w-3xl mx-auto text-[#111827] leading-tight mb-4">
        Transform Your Life with{' '}
        <span className="text-[#f15a07]">Community-Driven</span> Fitness
      </h1>

      {/* Subtext */}
      <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8 font-semibold">
        Experience personalized training with the power of community. Join up to 6 like-minded individuals on your journey to a better you with expert guidance, accountability, and support.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        {/* Book Free Consultation -> Contact Page */}
        <button
          onClick={() => navigate('/contact')}
          className="flex items-center justify-center gap-2 bg-[#f15a07] text-white font-semibold px-6 py-3 rounded-md hover:opacity-90 transition"
        >
          <FiPhoneCall className="text-lg" />
          Book Free Consultation
        </button>

        {/* Learn More -> Scroll to #training */}
        <button
          onClick={handleLearnMore}
          className="border border-[#f15a07] text-[#f15a07] font-semibold px-6 py-3 rounded-md hover:bg-[#f15a0715] transition"
        >
          Learn More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
