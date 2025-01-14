import React from "react";
import { MdEvent, MdLocalOffer, MdLocationOn, MdDateRange } from "react-icons/md";

// Static data for events
const events = [
  {
    id: 1,
    name: "Art & History Exhibition",
    date: "25th January 2025",
    location: "Art Gallery, Downtown",
    price: 20,
    discount: 10,
    description: "Explore the finest collections of art and history from around the world.",
  },
  {
    id: 2,
    name: "Modern Sculpture Showcase",
    date: "5th February 2025",
    location: "Sculpture Park, Midtown",
    price: 15,
    discount: 20,
    description: "A celebration of creativity featuring modern and contemporary sculptures.",
  },
  {
    id: 3,
    name: "Photography Workshop",
    date: "12th March 2025",
    location: "City Museum, Main Hall",
    price: 25,
    discount: 15,
    description: "Join professional photographers for an immersive workshop.",
  },
  {
    id: 4,
    name: "Live Painting Event",
    date: "30th March 2025",
    location: "Open-Air Theater, East End",
    price: 30,
    discount: 5,
    description: "Watch artists bring their visions to life in real time.",
  },
  {
    id: 5,
    name: "Classical Music Evening",
    date: "10th April 2025",
    location: "City Concert Hall",
    price: 50,
    discount: 25,
    description: "Enjoy a mesmerizing evening with world-class musicians.",
  },
  {
    id: 6,
    name: "Digital Art Symposium",
    date: "18th May 2025",
    location: "Tech Convention Center",
    price: 40,
    discount: 20,
    description: "Dive into the future of art and technology at this interactive symposium.",
  },
];

const Events = () => {
  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8 flex items-center justify-center gap-2">
        <MdEvent /> Upcoming Events
      </h2>
      <div className="flex flex-col items-center space-y-8 px-6">
        {events.map((event) => {
          const discountedPrice = (
            event.price -
            (event.price * event.discount) / 100
          ).toFixed(2);

          return (
            <div
              key={event.id}
              className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl transform hover:scale-105 transition-transform"
            >
              <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-4">
                <MdEvent className="text-orange-500" />
                {event.name}
              </h3>
              <p className="text-gray-600 mb-2 flex items-center gap-2">
                <MdDateRange className="text-orange-500" />
                <strong>Date:</strong> {event.date}
              </p>
              <p className="text-gray-600 mb-2 flex items-center gap-2">
                <MdLocationOn className="text-orange-500" />
                <strong>Location:</strong> {event.location}
              </p>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <MdLocalOffer className="text-orange-500 text-xl" />
                  <span className="text-gray-800 text-lg">
                    <strong>Discount:</strong> {event.discount}%
                  </span>
                </div>
                <div>
                  <p className="text-lg text-gray-800">
                    <strong>Original Price:</strong>{" "}
                    <span className="line-through">${event.price.toFixed(2)}</span>
                  </p>
                  <p className="text-lg text-orange-500 font-bold">
                    Discounted Price: ${discountedPrice}
                  </p>
                </div>
              </div>
              <button className="mt-4 bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-2 rounded-lg font-bold hover:from-orange-500 hover:to-orange-700 transition">
                Book Tickets
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
