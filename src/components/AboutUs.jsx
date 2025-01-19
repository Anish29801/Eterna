import React, { useState } from "react";
import {
  FaUserTie,
  FaQuoteLeft,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";
import { MdTimeline } from "react-icons/md";
import { IoPeopleCircleSharp } from "react-icons/io5";
import logo from "../assets/logo.png";

const directors = [
  {
    id: 1,
    name: "Jane Doe",
    role: "Executive Director",
    image: "https://randomuser.me/api/portraits/women/40.jpg",
  },
  {
    id: 2,
    name: "John Smith",
    role: "Operations Director",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    id: 3,
    name: "Alice Green",
    role: "Creative Director",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
];

const members = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Curator",
    image: "https://randomuser.me/api/portraits/women/61.jpg",
  },
  {
    id: 2,
    name: "Michael Brown",
    role: "Archivist",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Sophia Wilson",
    role: "Art Historian",
    image: "https://randomuser.me/api/portraits/women/76.jpg",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Alice White",
    rating: 5,
    feedback: (
      <>
        An <span className="font-bold text-yellow-500">exceptional experience</span>! The{" "}
        <span className="font-bold text-yellow-500">dedication</span> of the team is evident in every exhibit.
      </>
    ),
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    id: 2,
    name: "Robert Green",
    rating: 4.5,
    feedback: (
      <>
        A <span className="font-bold text-yellow-500">masterpiece</span> of creativity and{" "}
        <span className="font-bold text-yellow-500">innovation</span>. Truly inspiring!
      </>
    ),
    image: "https://randomuser.me/api/portraits/men/61.jpg",
  },
  {
    id: 3,
    name: "Jessica Rivers",
    rating: 4,
    feedback: (
      <>
        The exhibits are so <span className="font-bold text-yellow-500">well-curated</span>, and the team is{" "}
        <span className="font-bold text-yellow-500">incredibly knowledgeable</span>.
      </>
    ),
    image: "https://randomuser.me/api/portraits/women/64.jpg",
  },
];

const timeline = [
  { year: "1998", event: "Eterna was founded." },
  { year: "2000", event: "Expanded to include modern exhibits." },
  { year: "2015", event: "Digitized the collection for global access." },
  { year: "2022", event: "Achieved record-breaking visitor numbers." },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} className="text-yellow-500 inline" />
      ))}
      {halfStar && <FaStarHalfAlt className="text-yellow-500 inline" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} className="text-gray-300 inline" />
      ))}
    </>
  );
};

const AboutUs = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    alert("Thank you for becoming a member!");
  };

  return (
    <div className="bg-gray-100 py-10">
      {/* Timeline */}
      <section className="mb-12 px-4 lg:px-16">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-6">
          <MdTimeline className="inline text-orange-500" /> Timeline
        </h2>
        <div className="space-y-4">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 border-l-4 border-orange-500 pl-4"
            >
              <span className="font-bold text-lg">{item.year}</span>
              <p>{item.event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Logo */}
      <div className="flex justify-center mb-8">
        <img src={logo} alt="Logo" className="h-20 object-contain" />
      </div>

      {/* Directors */}
      <section className="mb-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">
          <FaUserTie className="inline text-red-500" /> Our Directors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {directors.map((director) => (
            <div key={director.id} className="text-center">
              <img
                src={director.image}
                alt={director.name}
                className="w-24 h-24 lg:w-32 lg:h-32 rounded-full mx-auto border-4 border-red-500 object-cover mb-4"
              />
              <h3 className="font-semibold">{director.name}</h3>
              <p className="text-gray-600">{director.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Members */}
      <section className="mb-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">
          <IoPeopleCircleSharp className="inline text-green-500" /> Our Members
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => (
            <div key={member.id} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 lg:w-32 lg:h-32 rounded-full mx-auto border-4 border-green-500 object-cover mb-4"
              />
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-3 rounded-lg font-semibold transition hover:from-green-500 hover:to-green-600"
          >
            Become a Member
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
           <FaQuoteLeft className="inline text-yellow-500" /> Testimonials 
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center"
            >
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s picture`}
                className="w-17 h-17 rounded-full border-4 border-yellow-500 object-cover mb-4"
              />
              <p className="italic text-gray-700 mb-2">"{testimonial.feedback}"</p>
              <div className="flex justify-center mb-2">
                {renderStars(testimonial.rating)}
              </div>
              <span className="font-bold text-gray-800">- {testimonial.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-lg w-full sm:w-96">
            <h3 className="text-xl font-semibold text-center mb-4">
              Become a Member
            </h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm">Mobile</label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
