import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPlane,
  FaHotel,
  FaTrain,
  FaUmbrellaBeach,
  FaStar,
  FaCheck,
} from "react-icons/fa";
import Search from "../components/Search";

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
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Beach"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12">
              
              {/* Left Text Section */}
              <div className="text-white lg:w-1/2 lg:pr-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 lg:mb-4 leading-tight">
                  AWAY FROM MONOTONOUS LIFE
                </h1>
                
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 lg:mb-4 text-orange-400">
                  Discover Your Next Adventure
                </h2>
                
                <p className="text-base sm:text-lg lg:text-xl mb-4 lg:mb-6 opacity-90 max-w-2xl">
                  Easy booking, great destinations, and unforgettable travel experience -- all in one place.
                </p>
                
                <Link
                  to="/packages"
                  className="inline-block bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300"
                >
                  GET STARTED
                </Link>
              </div>

              {/* Right Search Section */}
              <div className="w-full lg:w-2/5 max-w-sm lg:max-w-md mt-6 lg:mt-0">
                <div className="bg-transparent backdrop-blur-sm p-4 sm:p-5  rounded-xl sm:rounded-2xl shadow-2xl">
                  <div className="mb-3 sm:mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 text-center">
                      SEARCH FLIGHTS
                    </h3>
                  </div>
                  <Search />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 sm:mb-10">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 bg-white shadow-lg rounded-xl sm:rounded-2xl hover:shadow-xl transition-all duration-300">
              <FaPlane className="text-3xl sm:text-4xl text-blue-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Flight Booking</h3>
              <p className="text-gray-600 text-sm sm:text-base">Book domestic & international flights at the best prices.</p>
            </div>

            <div className="p-6 sm:p-8 bg-white shadow-lg rounded-xl sm:rounded-2xl hover:shadow-xl transition-all duration-300">
              <FaHotel className="text-3xl sm:text-4xl text-red-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Hotel Booking</h3>
              <p className="text-gray-600 text-sm sm:text-base">Comfortable hotels and resorts for your stay.</p>
            </div>

            <div className="p-6 sm:p-8 bg-white shadow-lg rounded-xl sm:rounded-2xl hover:shadow-xl transition-all duration-300">
              <FaTrain className="text-3xl sm:text-4xl text-green-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Train Booking</h3>
              <p className="text-gray-600 text-sm sm:text-base">International train journeys at best prices with 24/7 support.</p>
            </div>

            <div className="p-6 sm:p-8 bg-white shadow-lg rounded-xl sm:rounded-2xl hover:shadow-xl transition-all duration-300">
              <FaUmbrellaBeach className="text-3xl sm:text-4xl text-yellow-500 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Holiday Packages</h3>
              <p className="text-gray-600 text-sm sm:text-base">Custom and fixed travel packages for all destinations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Package */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-10">
            Popular Packages
          </h2>

          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Pokhara Getaway – 3 Nights 4 Days</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  Enjoy a peaceful escape to Pokhara with scenic views, adventure activities, and guided tours.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="flex items-center text-green-600 text-sm sm:text-base">
                    <FaCheck className="mr-2 sm:mr-3" />
                    <span>Hotel Stay Included</span>
                  </div>

                  <div className="flex items-center text-green-600 text-sm sm:text-base">
                    <FaCheck className="mr-2 sm:mr-3" />
                    <span>Breakfast & Dinner</span>
                  </div>

                  <div className="flex items-center text-green-600 text-sm sm:text-base">
                    <FaCheck className="mr-2 sm:mr-3" />
                    <span>Sightseeing Tour</span>
                  </div>

                  <div className="flex items-center text-green-600 text-sm sm:text-base">
                    <FaCheck className="mr-2 sm:mr-3" />
                    <span>Adventure Activities Included</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 sm:py-4 rounded-lg text-base sm:text-lg transition-all duration-300">
                  Book Package
                </button>
              </div>

              <div className="md:w-1/3">
                <img
                  src="https://lp-cms-production.imgix.net/2019-06/53693064.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4"
                  alt="Pokhara Travel"
                  className="w-full h-48 sm:h-64 md:h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destination Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl sm:rounded-2xl text-white shadow-xl p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Popular Destination
          </h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto">
            We all live in an age that belongs to the young at heart. Life that is becoming extremely fast, day.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="group cursor-pointer">
              <img 
                src="https://th.bing.com/th/id/R.0dc2b625444013a68ba94cb2c2cb6455?rik=dQi%2fX%2bTf01DmvA&riu=http%3a%2f%2fwww.yenigezi.com%2fwp-content%2fuploads%2f2018%2f08%2fParis-Paris.jpg&ehk=RsSy4Nm1ghI0ISEdndHXAwNnKhKZEpc1gni9pqOg9K4%3d&risl=&pid=ImgRaw&r=0" 
                alt="Dream City" 
                className="w-full h-48 sm:h-56 object-cover rounded-lg sm:rounded-xl group-hover:scale-105 transition-all duration-300"
              />
              <div className="mt-3 sm:mt-4">
                <p className="font-semibold text-lg">Dream City</p>
                <p className="text-gray-300">Paris</p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <img 
                src="https://th.bing.com/th?id=OIF.iiK74Ds5k7JUUmYoeCDO%2BA&cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" 
                alt="Cloud Mountain"  
                className="w-full h-48 sm:h-56 object-cover rounded-lg sm:rounded-xl group-hover:scale-105 transition-all duration-300"
              />
              <div className="mt-3 sm:mt-4">
                <p className="font-semibold text-lg">Cloud Mountain</p>
                <p className="text-gray-300">Sri-Lanka</p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <img 
                src="https://images.ctfassets.net/bth3mlrehms2/2cCxpmVnFuv9cwMkr2NsqO/0f41647ab438ea7efa23b0d260123a50/Japan_Tokio_Skyline_und_Mt._Fuji.jpg?w=2400&h=1350&q=50" 
                alt="Sky City"  
                className="w-full h-48 sm:h-56 object-cover rounded-lg sm:rounded-xl group-hover:scale-105 transition-all duration-300"
              />
              <div className="mt-3 sm:mt-4">
                <p className="font-semibold text-lg">Sky City</p>
                <p className="text-gray-300">Tokyo</p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <img 
                src="https://1.bp.blogspot.com/-4gvExOkk5xA/Vs3YyTXeQkI/AAAAAAAAA6g/eyYiHvkaqus/s1600/brazilia.jpg" 
                alt="Jungle Portal"  
                className="w-full h-48 sm:h-56 object-cover rounded-lg sm:rounded-xl group-hover:scale-105 transition-all duration-300"
              />
              <div className="mt-3 sm:mt-4">
                <p className="font-semibold text-lg">Jungle Portal</p>
                <p className="text-gray-300">Brazil</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Best Deals */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img
                  src="https://i.pinimg.com/736x/cd/63/73/cd6373bb0de649c540dfc2817f709189.jpg"
                  alt="Get Best Deals"
                  className="w-full h-64 sm:h-72 md:h-full object-cover"
                />
              </div>

              <div className="md:w-2/3 p-6 sm:p-8 flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Get Best Deals</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  Didn't find your Package? <br />
                  Feel free to ask us. We'll make it for you.
                </p>
                
                <button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300">
                  Request Custom Price
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-10">
            What Our Travelers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((test, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 mr-1" />
                  ))}
                </div>

                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{test.comment}</p>
                <div>
                  <h4 className="font-bold text-gray-800">{test.name}</h4>
                  <span className="text-sm text-gray-500">{test.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;