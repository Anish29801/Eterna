import React, { useState } from "react";
import { FaTicketAlt } from "react-icons/fa"; // Importing the ticket icon

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

const BuyTicket = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [popupVisible, setPopupVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const calculateTotal = () => {
    if (!selectedEvent) return 0;
    const event = events.find((e) => e.id === parseInt(selectedEvent));
    const discountedPrice = event.price - (event.price * event.discount) / 100;
    return discountedPrice * numberOfPeople;
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Buy Tickets</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md space-y-6"
      >
        {/* Event Selection */}
        <div>
          <label htmlFor="event" className="block text-gray-700 font-semibold mb-2">
            <FaTicketAlt className="mr-2 inline-block" />
            Select Event
          </label>
          <select
            id="event"
            value={selectedEvent || ""}
            onChange={(e) => setSelectedEvent(e.target.value)}
            className="w-full border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          >
            <option value="" disabled>
              Choose an event
            </option>
            {events.map((event) => (
              <option key={event.id} value={event.id}>
                {event.name} - ${event.price} (Discount: {event.discount}%)
              </option>
            ))}
          </select>
        </div>

        {/* Number of People */}
        <div>
          <label htmlFor="people" className="block text-gray-700 font-semibold mb-2">
            Number of People
          </label>
          <input
            type="number"
            id="people"
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(Math.max(1, e.target.value))}
            className="w-full border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            min="1"
            required
          />
        </div>

        {/* Total Display */}
        <div className="text-gray-700 text-lg font-semibold">
          Total: <span className="text-orange-600">${calculateTotal()}</span>
        </div>
        <p className="text-sm text-gray-500 italic">
          All proceeds go to charity.
        </p>

        {/* Submit Button with Icon */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition flex items-center justify-center"
        >
          <FaTicketAlt className="mr-2" />
          Book Tickets
        </button>
      </form>

      {/* Popup */}
      {popupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-4 max-w-sm w-full">
            <h2 className="text-xl font-bold text-orange-600">
              Booking Confirmed!
            </h2>
            <p className="text-gray-700">
              Thank you for booking tickets for the{" "}
              <span className="font-semibold">{events.find((e) => e.id === parseInt(selectedEvent))?.name}</span>{" "}
              event.
            </p>
            <p className="text-gray-700">
              You have booked tickets for <span className="font-semibold">{numberOfPeople}</span>{" "}
              people, totaling <span className="font-semibold text-orange-600">${calculateTotal()}</span>.
            </p>
            <button
              onClick={closePopup}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyTicket;
