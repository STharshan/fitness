import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const testimonials = [
  {
    rating: 5,
    score: '10/10',
    text: `Training with Anthony has been an excellent experience. He is personable, knowledgeable but most important of all understanding. We set out fitness goals and thanks to Anthony's meticulous work outs and plans I am exceeding those, even after only 6 months!`,
    name: 'Matt Badat',
    subtext: 'a year ago',
  },
  {
    rating: 5,
     score: '10/10',
    text: `Anthony has been so supportive throughout the past 6 months! He and the group sessions I attend really help motivate me and hit my fitness and wellness goals!`,
    name: 'Matt Lewis',
    subtext: 'a year ago',
  },
  {
    rating: 5,
     score: '10/10',
    text: `I have been training with Committed Fitness for several years, I started with one on one sessions and then joined the group sessions. Both of which provide excellent coaching, and I have found the group sessions also build a camaraderie that help me achieve even more.`,
    name: 'Peter Hobson',
    subtext: 'Edited a year ago',
  },
];

const TestimonialsWithCTA = () => {

   const navigate = useNavigate();

  return (
    <section className="bg-[#f9fbfc] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Real results from real people who've transformed their lives with Committed Fitness
        </p>

        {/* Testimonials */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 text-left shadow-sm transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center gap-2 text-orange-500 mb-2">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <FaStar key={idx} size={18} />
                ))}
                {t.score && <span className="text-sm text-gray-600 ml-2">{t.score}</span>}
              </div>
              <p className="text-gray-700 text-sm mb-6 italic">"{t.text}"</p>
              <hr className="mb-2" />
              <h4 className="text-md font-semibold text-gray-900">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.subtext}</p>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="bg-white shadow-md rounded-xl px-8 py-10 max-w-2xl mx-auto text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
            Join Our Success Stories
          </h3>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Experience the same results with Anthony's expert guidance and our supportive community
          </p>
          <button className="bg-[#f15a07] text-white font-medium px-6 py-3 rounded-md hover:opacity-90 transition"
            onClick={() => navigate('/contact')}
          >
            Start Your Transformation Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsWithCTA;
