import React from 'react';
import { FiTool, FiShield, FiCheckCircle } from 'react-icons/fi';
import { useState } from 'react';

const PrivateFacility = () => {
  const slides = [
    {
      images: ['/t1.jpg', '/t2.jpg', ], // Each slide has 3 images
    },
    {
      images: ['/t4.jpg', '/t5.jpg', ],
    },
    {
      images: ['/t7.jpg', '/t8.jpg',],
    },
    {
      images : ['t3.jpg','/t6.jpg']
    },

  ];

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <section className="bg-[#f9fafb] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Our Private Training Facility
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Train in a professional, private environment with state-of-the-art equipment designed for serious results.
        </p>

        {/* Image Slider */}
        <div className="relative w-full max-w-7xl mx-auto mb-10">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${index === current ? 'block' : 'hidden'
                } transition-opacity duration-500 ease-in-out`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-6xl mx-auto h-180">
                {slide.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={`Slide ${index + 1} - Image ${imgIndex + 1}`}
                    className="object-cover rounded-md shadow-md"
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            &#8249;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            &#8250;
          </button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="text-center px-4">
            <div className="bg-orange-100 text-[#d94a00] w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-3">
              <FiTool size={24} />
            </div>
            <h4 className="font-semibold text-gray-900">Professional Equipment</h4>
            <p className="text-sm text-gray-600 mt-2">
              State-of-the-art strength training equipment including sleds, squat racks, and functional training tools.
            </p>
          </div>
          <div className="text-center px-4">
            <div className="bg-orange-100 text-[#d94a00] w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-3">
              <FiShield size={24} />
            </div>
            <h4 className="font-semibold text-gray-900">Private Environment</h4>
            <p className="text-sm text-gray-600 mt-2">
              Train in confidence, pushing without watchers or distractions and outside commercial gym crowds.
            </p>
          </div>
          <div className="text-center px-4">
            <div className="bg-orange-100 text-[#d94a00] w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-3">
              <FiCheckCircle size={24} />
            </div>
            <h4 className="font-semibold text-gray-900">Dedicated Spaces</h4>
            <p className="text-sm text-gray-600 mt-2">
              Specialized areas for strength training, movement, and conditioning work.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white shadow-md rounded-xl py-8 px-6 max-w-xl mx-auto">
          <h4 className="text-md font-semibold text-gray-800 mb-2">
            Experience Our Facility
          </h4>
          <p className="text-sm text-gray-600 mb-4">
            Book your free consultation to tour our private training facility and see where your transformation will happen.
          </p>
          <button className="mt-2 bg-[#d94a00] text-white py-2 px-6 rounded-full hover:bg-[#ef7141] transition">
            Schedule Facility Tour
          </button>
        </div>
      </div>
    </section>
  );
};

export default PrivateFacility;
