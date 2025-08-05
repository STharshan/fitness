import React from 'react';
import { FiTarget, FiUsers, FiCheckCircle } from 'react-icons/fi';

const WhyTrainWithAnthony = () => {
  return (
    <section className="bg-[#f9fafb] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">
          Why Train with Anthony?
        </h2>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          
          {/* Proven Track Record */}
          <div className="flex flex-col items-center px-4">
            <div className="bg-orange-100 text-[#d94a00] rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <FiTarget size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Track Record</h3>
            <p className="text-gray-600 text-sm">
              From British records to world championships, Anthony brings elite-level experience to your training
            </p>
          </div>

          {/* Holistic Approach */}
          <div className="flex flex-col items-center px-4">
            <div className="bg-orange-100 text-[#d94a00] rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <FiUsers size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Holistic Approach</h3>
            <p className="text-gray-600 text-sm">
              Challenges every aspect of your capabilities as both a human and athlete
            </p>
          </div>

          {/* Personal Mission */}
          <div className="flex flex-col items-center px-4">
            <div className="bg-orange-100 text-[#d94a00] rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <FiCheckCircle size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Mission</h3>
            <p className="text-gray-600 text-sm">
              Dedicated to empowering you to expect more of yourself in every way possible
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyTrainWithAnthony;
