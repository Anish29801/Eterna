import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import hero_bg1 from "../assets/hero_bg1.jpg";
import hero_bg2 from "../assets/hero_bg2.jpg";
import hero_bg3 from "../assets/hero_bg3.jpg";

const Slider = () => {
  const slides = [
    {
      text: "Explore the Rich History of Art",
      image: hero_bg1,
    },
    {
      text: "Unveil the Secrets of Ancient Civilizations",
      image: hero_bg2,
    },
    {
      text: "Step into the World of Modern Creativity",
      image: hero_bg3,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000); // Change slide every 7 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <nav className="sticky top-0 z-10 font-bold bg-gray-200 border-b border-blue-800">
        {/* Navigation content here */}
      </nav>
      {/* Slide Content */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Black Opacity Layer */}
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center">
              <h2 className="font-playfair text-white text-3xl md:text-7xl font-bold text-center px-4 mb-6">
                {slide.text}
              </h2>
              {/* Text above the buttons */}
              <p className="text-white text-xl text-center px-4 mb-6">
                Discover our latest exhibitions and events!
              </p>
              {/* Buttons */}
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => navigate("/tickets")}
                  className="text-white px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition"
                >
                  Book Tickets
                </button>
                <button
                  onClick={() => navigate("/events")}
                  className="border-2 border-[var(--primary-red)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--primary-red)] hover:text-white transition"
                >
                  Upcoming Events
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
