import React from 'react';
import { FiTarget, FiCalendar, FiSmartphone, FiUsers } from 'react-icons/fi';

const GroupTraining = () => {
  return (
    <section className="bg-white px-4 py-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What is Group Training?
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
          Small group training combines all the benefits of personalized training with the power of community support.
        </p>

        {/* Features + Difference Box */}
        <div className="flex flex-col lg:flex-row items-start justify-center max-w-3xl mx-auto">
          {/* Left Side: Features */}
          <div className="flex flex-col gap-8 w-full lg:w-2/3">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 text-[#f15a07] p-3 rounded-full">
                <FiTarget size={24} />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900">Personalized Approach</h3>
                <p className="text-gray-600 max-w-80">Weekly habits and accountability check-ins tailored to your goals</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-100 text-[#f15a07] p-3 rounded-full">
                <FiCalendar size={24} />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900">Custom Plans</h3>
                <p className="text-gray-600 max-w-80">Individualized exercise and nutritional plans designed for you</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-100 text-[#f15a07] p-3 rounded-full">
                <FiSmartphone size={24} />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900">Full App Access</h3>
                <p className="text-gray-600 max-w-80">Complete access to our training app for tracking and support</p>
              </div>
            </div>
          </div>

          {/* Right Side: Key Difference */}
          <div className="bg-[#f15a07] text-white mt-4 rounded-lg px-7 py-6 w-full lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-left">The Key Difference</h3>
            <p className="mb-6 text-left">
              When on-site, you won't be embarking on your journey to a better you all by yourself.
              You'll be part of a community, training alongside up to 6 other people just like yourself.
            </p>
            <div className="flex items-center gap-2 font-semibold">
              <FiUsers className="text-white" />
              Maximum 6 people per session
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupTraining;
