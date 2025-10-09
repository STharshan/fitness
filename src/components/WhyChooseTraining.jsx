import React from 'react';
import { FiUsers, FiTarget, FiCheckCircle } from 'react-icons/fi';

const WhyChooseTraining = () => {
  const features = [
    {
      icon: <FiUsers className="text-[#f15a07]" size={28} />,
      title: "Community Support",
      desc: "Train with like-minded individuals who share your goals and motivate each other to succeed.",
    },
    {
      icon: <FiTarget className="text-[#f15a07]" size={28} />,
      title: "Proven Results",
      desc: "Our group sessions have helped countless people achieve things they never thought possible.",
    },
    {
      icon: <FiCheckCircle className="text-[#f15a07]" size={28} />,
      title: "Life Transformation",
      desc: "Turn around your life with comprehensive support, accountability, and expert guidance.",
    },
  ];

  return (
    <section className="bg-[#f9fbfc] px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why Choose Group Training?
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          It's a fact that people are much more likely to thrive and succeed when surrounded
          by others sharing their interests and goals.
        </p>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center"
            >
              <div className="bg-orange-100 rounded-full p-3 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTraining;
