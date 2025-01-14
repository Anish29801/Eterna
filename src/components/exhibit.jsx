import React from "react";

// Import images from the assets folder
import e1 from "../assets/e1.webp";
import e2 from "../assets/e2.webp";
import e3 from "../assets/e3.jpg";
import e4 from "../assets/e4.webp";
import e5 from "../assets/e5.jpg";
import e6 from "../assets/e6.jpg";

const exhibits = [
  { id: 1, image: e1 },
  { id: 2, image: e2 },
  { id: 3, image: e3 },
  { id: 4, image: e4 },
  { id: 5, image: e5 },
  { id: 6, image: e6 },
];

const Exhibit = () => {
  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-2xl font-bold text-center mb-8"> Few of Our Exhibits</h2>
      <div className="grid grid-cols-2 gap-8 mx-auto">
        {exhibits.map((exhibit) => (
          <div
            key={exhibit.id}
            className="transform hover:scale-105 transition-transform"
          >
            {/* Image */}
            <img
              src={exhibit.image}
              alt={`Exhibit ${exhibit.id}`}
              className="w-80 h-64 mx-auto rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exhibit;
