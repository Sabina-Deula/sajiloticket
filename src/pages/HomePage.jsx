import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPlane,
  FaHotel,
  FaCar,
  FaUmbrellaBeach,
  FaStar,
  FaCheck,
  FaPhone,
} from "react-icons/fa";

const HomePage = () => {
  const [testimonials] = useState([
    {
      name: "John Doe",
      role: "Traveler",
      rating: 5,
      comment:
        "Amazing experience! Everything was perfectly organized and the team was very supportive.",
    },
    {
      name: "Sarah Smith",
      role: "Blogger",
      rating: 4,
      comment:
        "Loved the hospitality and arrangements. Will book again for sure!",
    },
    {
      name: "Prakash Thapa",
      role: "Solo Traveler",
      rating: 5,
      comment:
        "One of the best trips of my life! Highly recommend this travel service.",
    },
  ]);

  return (
    <div className="font-sans">

      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Beach"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Your Next Adventure
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-2xl">
            Easy booking, great destinations, and unforgettable travel
            experiences — all in one place.
          </p>

          <Link
            to="/packages"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
          >
            Explore Packages
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            <div className="p-8 bg-white shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300">
              <FaPlane className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Flight Booking</h3>
              <p className="text-gray-600">Book domestic & international flights at the best prices.</p>
            </div>

            <div className="p-8 bg-white shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300">
              <FaHotel className="text-4xl text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Hotel Booking</h3>
              <p className="text-gray-600">Comfortable hotels and resorts for your stay.</p>
            </div>

            <div className="p-8 bg-white shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300">
              <FaCar className="text-4xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Vehicle Rental</h3>
              <p className="text-gray-600">Hire cars, jeeps, and tourist buses easily.</p>
            </div>

            <div className="p-8 bg-white shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300">
              <FaUmbrellaBeach className="text-4xl text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Holiday Packages</h3>
              <p className="text-gray-600">Custom and fixed travel packages for all destinations.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Popular Package */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
            Popular Packages
          </h2>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="md:flex">

              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold mb-2">Pokhara Getaway – 3 Nights 4 Days</h3>
                <p className="text-gray-600 mb-6">
                  Enjoy a peaceful escape to Pokhara with scenic views, adventure activities, and guided tours.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-green-600">
                    <FaCheck className="mr-3" />
                    <span>Hotel Stay Included</span>
                  </div>

                  <div className="flex items-center text-green-600">
                    <FaCheck className="mr-3" />
                    <span>Breakfast & Dinner</span>
                  </div>

                  <div className="flex items-center text-green-600">
                    <FaCheck className="mr-3" />
                    <span>Sightseeing Tour</span>
                  </div>

                  <div className="flex items-center text-green-600">
                    <FaCheck className="mr-3" />
                    <span>Adventure Activities Included</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 rounded-lg text-lg transition-all duration-300">
                  Book Package
                </button>
              </div>

              <div className="md:w-1/3">
                <img
                  src="https://images.unsplash.com/photo-1587574293340-e0011c7d1f97"
                  alt="Pokhara Travel"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
            What Our Travelers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 mr-1" />
                  ))}
                </div>

                <p className="text-gray-600 mb-6">{test.comment}</p>
                <h4 className="font-bold text-gray-800">{test.name}</h4>
                <span className="text-sm text-gray-500">{test.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-blue-700 to-indigo-800 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Help With Your Booking?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Our travel experts are available 24/7 to assist you.
          </p>

          <div className="flex justify-center items-center gap-4">
            <FaPhone className="text-3xl" />
            <span className="text-2xl font-semibold">+977-9800000000</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
