import React from "react";

// Static data for directors
const directors = [
  {
    id: 1,
    name: "Dr. Jane Doe",
    email: "jane.doe@example.com",
    description:
      "Jane is a visionary leader with a passion for museum innovation and historical preservation.",
    image: "https://randomuser.me/api/portraits/women/40.jpg",
  },
  {
    id: 2,
    name: "Dr. John Smith",
    email: "john.smith@example.com",
    description:
      "John brings over 10 years of expertise in managing cultural institutions worldwide.",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    id: 3,
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    description:
      "Emily is dedicated to making art and history accessible to everyone through creative curation.",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
];

const Directors = () => {
  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-2xl font-playfair font-bold text-center mb-8">Meet Our Directors</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {directors.map((director) => (
          <div
            key={director.id}
            className="bg-white shadow-2xl rounded-2xl p-6 text-center w-64 transform hover:scale-105 transition-transform"
          >
            {/* Circular Image with Red Border */}
            <img
              src={director.image}
              alt={director.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-red-500 object-cover"
            />
            {/* Name */}
            <h3 className="text-lg font-semibold mb-2 font-playfair">{director.name}</h3>
            {/* Email */}
            <p className="text-gray-500 text-sm mb-2">{director.email}</p>
            {/* Description */}
            <p className="text-sm text-gray-700">{director.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Directors;
