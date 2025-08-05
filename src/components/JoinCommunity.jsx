import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';

const JoinCommunity = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Join Our Thriving Community
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-10">
          Experience the power of training with others who understand your journey. Our small group
          format ensures personal attention while building lasting connections.
        </p>

        {/* Orange CTA Box */}
        <div className="bg-gradient-to-r from-[#db4a00] to-[#c64200] rounded-xl px-6 py-10 text-white">
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Ready to See Results for Yourself?
          </h3>
          <p className="text-base mb-6 max-w-2xl mx-auto">
            Contact us now to arrange your initial consultation and ice breaker session,
            completely free!
          </p>

          {/* Button */}
          <div className="flex justify-center">
            <button className="bg-white text-[#db4a00] font-semibold px-6 py-3 rounded-md flex items-center gap-2 shadow hover:opacity-90 transition">
              <FiPhoneCall />
              Book Your Free Session Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
