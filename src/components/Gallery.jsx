import React from "react";

// Images data (replace with your image URLs)
const images = [
    "/g1.png",
    "/g2.png",
    "/g3.png",
    "/g4.jpg",
    "/g5.jpg",
    "/g6.jpg",
    "/g7.jpg",
    "/g8.jpg",
    "/g9.jpg",
    "/g10.jpg",
    "/g11.jpg",
    "/g12.jpg",
    "/g13.jpg",
    "/g14.jpg",
    "/g15.jpg",
    "/g16.jpg",


];

const Gallery = () => {
    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">Our Image Gallery</h2>
                <p className="text-gray-600 text-lg mb-12">Check out some of our amazing visuals!</p>

                {/* Scrollable Images Section */}
                <div className="overflow-hidden">
                    <div
                        className="flex space-x-6 animate-scroll"
                        style={{
                            animationDuration: `${images.length * 4}s`,
                            animationTimingFunction: "linear",
                        }}
                    >
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className="min-w-[300px] border-2 border-white rounded-lg transition"
                            >
                                <img src={img} alt={`Image ${index + 1}`} className="w-full h-70 rounded-lg" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
