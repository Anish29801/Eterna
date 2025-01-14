import React, { useState } from "react";
import { FaUserTie, FaQuoteLeft } from "react-icons/fa";
import { MdTimeline } from "react-icons/md";
import { IoPeopleCircleSharp } from "react-icons/io5";
import { AiOutlineComment } from "react-icons/ai";

// Static data for Directors
const directors = [
  { id: 1, name: "Jane Doe", role: "Executive Director", image: "https://randomuser.me/api/portraits/women/40.jpg" },
  { id: 2, name: "John Smith", role: "Creative Director", image: "https://randomuser.me/api/portraits/men/20.jpg" },
  { id: 3, name: "Alice Green", role: "Operations Director", image: "https://randomuser.me/api/portraits/women/50.jpg" },
];

// Static data for Members
const members = [
  { id: 1, name: "Emily Johnson", role: "Curator", image: "https://randomuser.me/api/portraits/women/61.jpg" },
  { id: 2, name: "Michael Brown", role: "Archivist", image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 3, name: "Sophia Wilson", role: "Art Historian", image: "https://randomuser.me/api/portraits/women/76.jpg" },
];

// Static data for Testimonials
const testimonials = [
  { id: 1, name: "Alice White", feedback: "An exceptional experience! The dedication of the team is evident in every exhibit." },
  { id: 2, name: "Robert Green", feedback: "A masterpiece of creativity and innovation. Truly inspiring!" },
  { id: 3, name: "Jessica Lee", feedback: "The exhibits are so well-curated, and the team is incredibly knowledgeable." },
];

// Timeline data
const timeline = [
  { year: "1998", event: <h2 className="font-inter"><span className="text-orange-500 font-bold">Eterna</span> was founded.</h2> },
  { year: "2000", event: "Expanded to include modern exhibits." },
  { year: "2015", event: "Digitized the collection for global access." },
  { year: "2022", event: "Achieved record-breaking visitor numbers." },
];

const AboutUs = () => {
  const [showModal, setShowModal] = useState(false);
  const [showMemberPopup, setShowMemberPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    setShowMemberPopup(true);
  };

  return (
    <div className="bg-gray-100 py-10">
      {/* Timeline Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-center flex items-center justify-center gap-2">
          <MdTimeline className="text-orange-500" /> Timeline
        </h2>
        <div className="mt-6 space-y-4 px-6">
          {timeline.map((item, index) => (
            <div key={index} className="flex items-center space-x-4 border-l-4 border-orange-500 pl-4">
              <span className="font-bold text-lg">{item.year}</span>
              <p>{item.event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Directors Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-center flex items-center justify-center gap-2">
          <FaUserTie className="text-red-500" /> Our Directors
        </h2>
        <div className="flex flex-wrap justify-center gap-8 mt-6">
          {directors.map((director) => (
            <div key={director.id} className="text-center transform hover:scale-105 transition-transform">
              <img
                src={director.image}
                alt={director.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-red-500"
              />
              <h3 className="text-lg font-semibold">{director.name}</h3>
              <p className="text-sm text-gray-600">{director.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Members Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-center flex items-center justify-center gap-2">
          <IoPeopleCircleSharp className="text-green-500" /> Our Members
        </h2>
        <div className="flex flex-wrap justify-center gap-8 mt-6">
          {members.map((member) => (
            <div key={member.id} className="text-center transform hover:scale-105 transition-transform">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-green-500"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>

          {/* Become a Member Button */}
      <div className="text-center pt-3">
        <button
          onClick={() => setShowModal(true)}
          className="bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 transition"
        >
          Become a Member
        </button>
      </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-center flex items-center justify-center gap-2">
          <FaQuoteLeft className="text-yellow-500" /> Testimonials
        </h2>
        <div className="mt-6 space-y-8 px-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white shadow-lg p-6 rounded-lg">
              <AiOutlineComment className="text-2xl text-gray-400 mb-4" />
              <p className="italic text-gray-700 mb-2">"{testimonial.feedback}"</p>
              <span className="block text-right font-bold text-gray-800">- {testimonial.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for Membership Form */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-80">
            <h3 className="text-xl font-semibold text-center mb-4">Become a Member</h3>
            <p className="text-center mb-4 text-gray-600">You will get VIP access to Exhibits</p>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Name</label>
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
                <label className="block text-sm font-semibold">Email</label>
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
                <label className="block text-sm font-semibold">Mobile</label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="text-center">
                <button type="submit" className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Custom Membership Popup */}
      {showMemberPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-80">
            <h3 className="text-xl font-semibold text-center text-green-500 mb-4">You are a Member for your lifetime!</h3>
            <div className="text-center">
              <button onClick={() => setShowMemberPopup(false)} className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
