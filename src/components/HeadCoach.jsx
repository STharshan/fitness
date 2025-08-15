import React from 'react';
import { FiTarget, FiAward, FiUsers, FiZap } from 'react-icons/fi';

const HeadCoach = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Meet Your Head Coach</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Train with a world-class coach who's dedicated to helping you achieve more than you thought possible
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left Card: Quote and Philosophy */}
          <div className="bg-[#d94a00] text-white rounded-xl p-8 shadow-lg relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-[#ef7141] text-white font-bold text-xl rounded-full flex items-center justify-center">
              AS
            </div>
            <div className="mt-12 text-center md:text-left overflow-y-auto max-h-72"> {/* Added overflow and max-height */}
              <p className="italic font-semibold text-lg mb-6">
                "My passion and mission is to empower people to truly expect more of themselves in every way possible. If people leave my facility better than they entered in any way, I am a happy man."
              </p>
              <hr className="border-white mb-4" />
              <h4 className="font-bold text-base">Philosophy</h4>
              <p className="text-sm">"Be better tomorrow than you are today."</p>
            </div>
          </div>

          {/* Right Info */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Anthony Spalding</h3>
            <p className="text-[#d94a00] font-semibold mb-6">Level 4 Personal Trainer & Strength Coach</p>

            <ul className="space-y-6 text-gray-700">
              <li className="flex items-start gap-4">
                <FiTarget size={20} className="text-[#d94a00] mt-1" />
                <div>
                  <h4 className="font-bold">Specialization</h4>
                  <p>Elite strength and conditioning for sport — from smashing powerlifting records to conquering obstacle course races (OCR).</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FiAward size={20} className="text-[#d94a00] mt-1" />
                <div>
                  <h4 className="font-bold">Competition Experience</h4>
                  <p>5 years of competitive powerlifting with multiple British records across federations</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FiUsers size={20} className="text-[#d94a00] mt-1" />
                <div>
                  <h4 className="font-bold">World Championship Athlete</h4>
                  <p>Competed at the WPU World Championships in Ireland (2015)</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FiZap size={20} className="text-[#d94a00] mt-1" />
                <div>
                  <h4 className="font-bold">Current Focus</h4>
                  <p>Competitive OCR athlete specializing in Spartan races and extreme challenges</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mt-12">
          <div className="bg-gray-100 rounded-xl py-6 px-2">
            <p className="text-[#d94a00] font-bold text-lg">Level 4</p>
            <p className="text-sm text-gray-600">Certified Personal Trainer</p>
          </div>
          <div className="bg-gray-100 rounded-xl py-6 px-2">
            <p className="text-[#d94a00] font-bold text-lg">5+ Years</p>
            <p className="text-sm text-gray-600">Competition Experience</p>
          </div>
          <div className="bg-gray-100 rounded-xl py-6 px-2">
            <p className="text-[#d94a00] font-bold text-lg">Multiple</p>
            <p className="text-sm text-gray-600">British Records</p>
          </div>
          <div className="bg-gray-100 rounded-xl py-6 px-2">
            <p className="text-[#d94a00] font-bold text-lg">World</p>
            <p className="text-sm text-gray-600">Championship Athlete</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadCoach;
