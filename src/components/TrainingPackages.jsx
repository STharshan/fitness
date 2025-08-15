import React from 'react';
import { FiCheck } from 'react-icons/fi';

const PackageCard = ({ title, price, subtitle, features, highlight, buttonText }) => (
  <div className={`border rounded-lg p-6 shadow-sm ${highlight ? 'border-[#ef7141]' : 'border-gray-200'}`}>
    {/* {highlight && (
      <div className="bg-[#ef7141] text-white text-xs font-semibold px-3 py-1 rounded-t-md inline-block mb-2">
        RECOMMENDED
      </div>
    )} */}
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-2xl font-bold text-[#ef7141]">{price}</p>
    <p className="text-sm text-gray-500 mb-4">{subtitle}</p>
    <ul className="text-sm text-gray-700 space-y-2 mb-4">
      {features.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <FiCheck className="text-[#ef7141] mt-1" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
    <button className="bg-[#ef7141] text-white text-sm font-semibold py-2 px-4 rounded hover:bg-[#d94a00] transition w-full">
      {buttonText}
    </button>
  </div>
);

const TrainingPackages = () => {
  return (
    <section className="bg-white text-center py-16 px-4">
      {/* Section 1 – Small Group Training */}
      <h2 className="text-2xl md:text-3xl font-bold mb-2">Choose Your Training Package</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-6">
        From small group sessions to personalized 1-2-1 coaching, we have the perfect package to help you achieve your fitness goals
      </p>
      <span className="bg-[#ef7141] text-white text-xs font-semibold px-4 py-1 rounded-full inline-block mb-4">
        Most Popular
      </span>
      <h3 className="text-xl font-semibold mb-4">Small Group Training</h3>
      <p className="text-sm text-gray-500 max-w-2xl mx-auto mb-10">
        Get coached by a highly experienced level 4 coach in a private facility, surrounded by like-minded individuals for that extra push and motivation. Group sizes are limited to just 6 per slot to ensure top quality coaching.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
        <PackageCard
          title="Group Premium"
          price="£35 per week - £140 per month"
          features={[
            '3x 60 min sessions of coaching per week and access to our app.',
            'Here you will have access to :',
            'Meal plans',
            'Full exercise programmes and workouts',
            'Daily habits and action goals',
            'Weekly progression check ins with your coach to ensure success',
            'Constant access to your coach for support with any issues'
          ]}
          buttonText="Choose Premium"
        />
        <PackageCard
          title="Standard"
          price="£100 per month"
          features={[
            '2x 60 min sessions of coaching per week and access to our app.',
            'Here you will have access to :',
            'Meal plans',
            'Full exercise programmes and workouts',
            'Daily habits and action goals',
            'Weekly progression check ins with your coach to ensure service',
            'Constant access to your coach for support with any issues'
          ]}
          highlight
          buttonText="Choose Standard"
        />
      </div>

      {/* Member Benefit Banner */}
      <div className="bg-[#d94a00] text-white text-sm font-semibold rounded-md py-4 px-6 max-w-3xl mx-auto mb-6">
        Exclusive Member Benefit <br />
        <span className="text-xs font-normal block mt-1">
          All Committed Fitness members get complimentary off-peak access to our private training facility located on GeoDrift Road in Derby. <br />
          Simply book your slots during available slots in the app – it’s that easy!
        </span>
      </div>

      <button className="mt-4 bg-[#ef7141] text-white text-sm font-semibold py-2 px-6 rounded hover:bg-[#d94a00] transition">
        Book Free Consultation
      </button>
    </section>
  );
};

export default TrainingPackages;
