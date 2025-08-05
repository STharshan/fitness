import React from 'react';

const TransformationSection = () => {
  return (
    <section className="bg-[#fff7f0] py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">

        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Anthony's Personal Transformation
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Anthony doesn’t just coach transformation – he’s lived it. His personal journey proves that
          with the right mindset, dedication, and expert guidance, incredible changes are possible.
        </p>

        {/* Before & After */}
        <div className="grid md:grid-cols-2 gap-10 justify-center items-start">

          {/* Before */}
          <div className="text-center">
            <div className="relative inline-block mb-4">
              <span className="absolute -top-3 -left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold uppercase">
                Before
              </span>
              <img
                src="/before.png"
                alt="Before Transformation"
                className="w-64 h-auto rounded-lg shadow-md mx-auto"
              />
            </div>
            <h4 className="font-bold text-lg text-gray-800 mt-4">The Starting Point</h4>
            <p className="text-gray-600 text-sm mt-2 max-w-xs mx-auto">
              Like many of his clients, Anthony faced his own fitness challenges and knew what it felt like to be unhappy with his physical condition.
            </p>
          </div>

          {/* After */}
          <div className="text-center">
            <div className="relative inline-block mb-4">
              <span className="absolute -top-3 -left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold uppercase">
                After
              </span>
              <img
                src="/after.png"
                alt="After Transformation"
                className="w-64 h-auto rounded-lg shadow-md mx-auto"
              />
            </div>
            <h4 className="font-bold text-lg text-gray-800 mt-4">The Transformation</h4>
            <p className="text-gray-600 text-sm mt-2 max-w-xs mx-auto">
              Through dedication, proper training, and the methods he now teaches, Anthony achieved the physique of a competitive athlete and world-class coach.
            </p>
          </div>
        </div>

        {/* Bottom Box */}
        <div className="mt-14 bg-white rounded-xl shadow-md px-6 py-8 max-w-2xl mx-auto">
          <h4 className="text-lg font-bold text-gray-800 mb-4">Why This Matters for You</h4>
          <p className="text-sm text-gray-600 mb-4">
            Anthony’s transformation isn’t just inspiring – it’s proof that the methods he uses actually work.
            He understands every challenge you’ll face because he’s been there himself.
          </p>
          <div className="flex justify-center gap-4 text-sm text-green-700 font-medium flex-wrap">
            <span className="bg-green-100 px-3 py-1 rounded-full">✅ Real Experience</span>
            <span className="bg-green-100 px-3 py-1 rounded-full">✅ Proven Methods</span>
            <span className="bg-green-100 px-3 py-1 rounded-full">✅ Lasting Results</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
