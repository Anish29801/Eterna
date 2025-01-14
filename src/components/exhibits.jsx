import React from "react";

// Import images from the assets folder
import e1 from "../assets/e1.webp";
import e2 from "../assets/e2.webp";
import e3 from "../assets/e3.jpg";
import e4 from "../assets/e4.webp";
import e5 from "../assets/e5.jpg";
import e6 from "../assets/e6.jpg";
import e7 from "../assets/e7.webp";
import e8 from "../assets/e8.jpg";
import e9 from "../assets/e9.jpg";
import e10 from "../assets/e10.jpg";
import e11 from "../assets/e11.jpeg";
import e12 from "../assets/e12.jpg";

const exhibitsJSON = [
    { id: 1, image: e1 },
    { id: 2, image: e2 },
    { id: 3, image: e3 },
    { id: 4, image: e4 },
    { id: 5, image: e5 },
    { id: 6, image: e6 },
    { id: 7, image: e7 },
    { id: 8, image: e8 },
    { id: 9, image: e9 },
    { id: 10, image: e10 },
    { id: 11, image: e11 },
    { id: 12, image: e12 },
];

const Exhibits = () => {
    return (
        <div className="bg-gray-100 py-12">
            {/* Vision Statement Section */}
            <section className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    We strive to create a space where art meets innovation, inviting visitors to immerse themselves
                    in the cultural and creative journey that defines us. Join us and experience the magic of our exhibits.
                </p>
            </section>

            {/* Image Gallery Section */}
            <section className="text-center mb-12">
                <h2 className="text-2xl font-bold text-gray-800">Explore Our Exhibits</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 px-4">
                    {exhibitsJSON.map((exhibit) => (
                        <div key={exhibit.id} className="relative group">
                            <img
                                src={exhibit.image}
                                alt={`Exhibit ${exhibit.id}`}
                                className="w-full h-64 object-cover rounded-lg shadow-lg transform transition-all group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Invitation to see more */}
            <section className="text-center mt-8">
                <p className="text-lg text-gray-600">Want to explore more exhibits? Visit us today and experience the past come alive.</p>
                <button className="mt-3 text-white px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition">
                  Book Tickets
                </button>
            </section>
        </div>
    );
};

export default Exhibits;
