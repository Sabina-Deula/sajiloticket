import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaSearch, FaFilter, FaSortAmountDown, FaStar,
  FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaBed,
  FaWifi, FaSwimmingPool, FaCar, FaUtensils,
  FaParking, FaHotTub, FaDumbbell, FaShower,
  FaCheck, FaPhone, FaWhatsapp, FaHeart,
  FaShareAlt, FaEye, FaRupeeSign, FaClock,
  FaShieldAlt, FaHeadset, FaTag, FaEnvelope,
  FaHotel, FaBuilding
} from 'react-icons/fa';

const Hotels = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [sortBy, setSortBy] = useState('popular');

  const filters = [
    { id: 'all', label: 'All Hotels', icon: FaHotel },
    { id: 'budget', label: 'Budget', icon: FaTag },
    { id: 'luxury', label: 'Luxury', icon: FaStar },
    { id: 'resort', label: 'Resort', icon: FaSwimmingPool },
    { id: 'boutique', label: 'Boutique', icon: FaHeart },
  ];

  const cities = [
    { name: 'Kathmandu', count: 245 },
    { name: 'Pokhara', count: 189 },
    { name: 'Chitwan', count: 76 },
    { name: 'Lumbini', count: 45 },
    { name: 'Nagarkot', count: 32 },
    { name: 'Dharan', count: 28 },
  ];

  const amenities = [
    { icon: FaWifi, label: 'Free WiFi' },
    { icon: FaSwimmingPool, label: 'Swimming Pool' },
    { icon: FaCar, label: 'Free Parking' },
    { icon: FaUtensils, label: 'Restaurant' },
    { icon: FaDumbbell, label: 'Gym' },
    { icon: FaHotTub, label: 'Spa' },
  ];

  const hotels = [
    {
      id: 1,
      name: 'Hotel Yak & Yeti',
      location: 'Durbar Marg, Kathmandu',
      rating: 4.8,
      reviews: 1245,
      price: 'NPR 12,500',
      oldPrice: 'NPR 15,000',
      discount: '17% OFF',
      stars: 5,
      image: 'bg-gradient-to-r from-blue-600 to-purple-700',
      amenities: ['Free WiFi', 'Swimming Pool', 'Spa', 'Restaurant', 'Gym'],
      description: 'Luxury 5-star hotel in the heart of Kathmandu',
      featured: true,
      roomsLeft: 8
    },
    {
      id: 2,
      name: 'Tiger Palace Resort',
      location: 'Bhairahawa, Lumbini',
      rating: 4.7,
      reviews: 892,
      price: 'NPR 9,800',
      oldPrice: 'NPR 11,500',
      discount: '15% OFF',
      stars: 5,
      image: 'bg-gradient-to-r from-green-600 to-teal-700',
      amenities: ['Casino', 'Pool', 'Spa', 'Multiple Restaurants'],
      description: 'Luxury resort with casino and entertainment',
      featured: true,
      roomsLeft: 12
    },
    {
      id: 3,
      name: 'Pokhara Grande',
      location: 'Lakeside, Pokhara',
      rating: 4.6,
      reviews: 678,
      price: 'NPR 8,200',
      oldPrice: 'NPR 9,500',
      discount: '14% OFF',
      stars: 4,
      image: 'bg-gradient-to-r from-cyan-600 to-blue-700',
      amenities: ['Lake View', 'Restaurant', 'Conference Hall', 'Garden'],
      description: 'Beautiful hotel with panoramic lake views',
      featured: false,
      roomsLeft: 15
    },
    {
      id: 4,
      name: 'Hotel Annapurna',
      location: 'Thamel, Kathmandu',
      rating: 4.5,
      reviews: 1123,
      price: 'NPR 6,500',
      oldPrice: 'NPR 7,800',
      discount: '17% OFF',
      stars: 4,
      image: 'bg-gradient-to-r from-orange-600 to-red-700',
      amenities: ['Central Location', 'Restaurant', 'Bar', 'Business Center'],
      description: 'Centrally located hotel with modern amenities',
      featured: false,
      roomsLeft: 20
    },
    {
      id: 5,
      name: 'Fulbari Resort',
      location: 'Pokhara',
      rating: 4.4,
      reviews: 456,
      price: 'NPR 11,000',
      oldPrice: 'NPR 13,000',
      discount: '15% OFF',
      stars: 5,
      image: 'bg-gradient-to-r from-purple-600 to-pink-700',
      amenities: ['Golf Course', 'Spa', 'Multiple Pools', 'Fine Dining'],
      description: 'Premier resort with golf course and spa',
      featured: true,
      roomsLeft: 6
    },
    {
      id: 6,
      name: 'Hotel Barahi',
      location: 'Lakeside, Pokhara',
      rating: 4.3,
      reviews: 789,
      price: 'NPR 7,800',
      oldPrice: 'NPR 9,200',
      discount: '15% OFF',
      stars: 4,
      image: 'bg-gradient-to-r from-teal-600 to-emerald-700',
      amenities: ['Lake Front', 'Garden', 'Restaurant', 'Boat Service'],
      description: 'Lakefront hotel with beautiful garden',
      featured: false,
      roomsLeft: 18
    },
    {
      id: 7,
      name: 'The Dwarika\'s Hotel',
      location: 'Battisputali, Kathmandu',
      rating: 4.9,
      reviews: 934,
      price: 'NPR 18,500',
      oldPrice: 'NPR 22,000',
      discount: '16% OFF',
      stars: 5,
      image: 'bg-gradient-to-r from-amber-600 to-yellow-700',
      amenities: ['Heritage', 'Spa', 'Fine Dining', 'Cultural Shows'],
      description: 'Award-winning heritage hotel',
      featured: true,
      roomsLeft: 4
    },
    {
      id: 8,
      name: 'Temple Tree Resort',
      location: 'Lakeside, Pokhara',
      rating: 4.2,
      reviews: 567,
      price: 'NPR 5,500',
      oldPrice: 'NPR 6,500',
      discount: '15% OFF',
      stars: 3,
      image: 'bg-gradient-to-r from-gray-600 to-gray-800',
      amenities: ['Garden', 'Restaurant', 'Bar', 'Bicycle Rental'],
      description: 'Boutique resort with beautiful garden',
      featured: false,
      roomsLeft: 25
    },
  ];

  const filteredHotels = hotels.filter(hotel => {
    if (activeFilter !== 'all' && activeFilter === 'budget' && hotel.price > 'NPR 8,000') return false;
    if (activeFilter !== 'all' && activeFilter === 'luxury' && hotel.price < 'NPR 10,000') return false;
    if (searchTerm && !hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !hotel.location.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  const sortHotels = (hotels) => {
    switch (sortBy) {
      case 'price-low':
        return [...hotels].sort((a, b) => parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')));
      case 'price-high':
        return [...hotels].sort((a, b) => parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, '')));
      case 'rating':
        return [...hotels].sort((a, b) => b.rating - a.rating);
      case 'stars':
        return [...hotels].sort((a, b) => b.stars - a.stars);
      default:
        return [...hotels].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || b.rating - a.rating);
    }
  };

  const sortedHotels = sortHotels(filteredHotels);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Find Your Perfect <span className="text-orange-400">Hotel</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
            Book hotels across Nepal at best prices
          </p>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            From luxury resorts to budget stays, find accommodation that suits your needs
          </p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 px-4 md:px-8 bg-white shadow-lg -mt-8 rounded-t-3xl relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Search Form */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-6 md:p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Location */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  <FaMapMarkerAlt className="inline mr-2" />
                  Destination
                </label>
                <select className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option value="">Select City</option>
                  <option value="ktm">Kathmandu</option>
                  <option value="pkr">Pokhara</option>
                  <option value="chw">Chitwan</option>
                  <option value="lbn">Lumbini</option>
                  <option value="ngk">Nagarkot</option>
                </select>
              </div>

              {/* Check-in */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  <FaCalendarAlt className="inline mr-2" />
                  Check-in
                </label>
                <input 
                  type="date" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                />
              </div>

              {/* Check-out */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  <FaCalendarAlt className="inline mr-2" />
                  Check-out
                </label>
                <input 
                  type="date" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                />
              </div>

              {/* Guests & Rooms */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  <FaUsers className="inline mr-2" />
                  Guests & Rooms
                </label>
                <div className="flex gap-2">
                  <select 
                    className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5+ Guests</option>
                  </select>
                  <select className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option>1 Room</option>
                    <option>2 Rooms</option>
                    <option>3 Rooms</option>
                    <option>4 Rooms</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="mt-6 text-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-xl flex items-center justify-center gap-3 mx-auto">
                <FaSearch className="text-xl" />
                Search Hotels
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-3">
                {filters.map((filter) => {
                  const Icon = filter.icon;
                  return (
                    <button
                      key={filter.id}
                      onClick={() => setActiveFilter(filter.id)}
                      className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                        activeFilter === filter.id
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Icon />
                      <span>{filter.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Sort & Search */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search hotels..."
                    className="pl-12 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <FaSortAmountDown className="text-gray-600" />
                  <select 
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="popular">Most Popular</option>
                    <option value="rating">Highest Rated</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="stars">Star Rating</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-gray-600">
              Showing {sortedHotels.length} of {hotels.length} hotels
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Popular Cities & Amenities */}
            <div className="lg:col-span-1">
              {/* Popular Cities */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Popular Cities</h3>
                <div className="space-y-4">
                  {cities.map((city, index) => (
                    <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition">
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="text-blue-500 mr-3" />
                        <span className="font-medium">{city.name}</span>
                      </div>
                      <span className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full">
                        {city.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities Filter */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Amenities</h3>
                <div className="grid grid-cols-2 gap-3">
                  {amenities.map((amenity, index) => {
                    const Icon = amenity.icon;
                    return (
                      <div key={index} className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-blue-500 cursor-pointer transition">
                        <Icon className="text-blue-500 mr-2" />
                        <span className="text-sm">{amenity.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Hotels Grid */}
            <div className="lg:col-span-3">
              {sortedHotels.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
                  <div className="text-5xl mb-6">🏨</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">No hotels found</h3>
                  <p className="text-gray-600 mb-8">Try changing your search criteria or filter options</p>
                  <button 
                    onClick={() => { setSearchTerm(''); setActiveFilter('all'); }}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {sortedHotels.map((hotel) => (
                    <div 
                      key={hotel.id} 
                      className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${hotel.featured ? 'ring-2 ring-orange-500' : ''}`}
                    >
                      {/* Hotel Image */}
                      <div className={`h-48 ${hotel.image} relative`}>
                        {hotel.featured && (
                          <div className="absolute top-4 left-4 bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                            FEATURED
                          </div>
                        )}
                        {hotel.discount && (
                          <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                            {hotel.discount}
                          </div>
                        )}
                        <div className="absolute bottom-4 left-4">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <FaStar key={i} className={`w-4 h-4 ${i < hotel.stars ? 'text-yellow-400' : 'text-gray-300'}`} />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Hotel Details */}
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-1">{hotel.name}</h3>
                            <div className="flex items-center text-gray-600 text-sm">
                              <FaMapMarkerAlt className="mr-2" />
                              {hotel.location}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-blue-600 flex items-center justify-end">
                              <FaRupeeSign className="text-xl" />
                              <span>{hotel.price.split(' ')[1]}</span>
                            </div>
                            <div className="text-gray-400 line-through text-sm">
                              NPR {hotel.oldPrice.split(' ')[1]}
                            </div>
                            <div className="text-sm text-gray-500">per night</div>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-4 line-clamp-2">{hotel.description}</p>

                        {/* Rating & Reviews */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center">
                            <div className="bg-green-100 text-green-800 font-bold px-3 py-1 rounded-lg mr-3">
                              {hotel.rating}
                            </div>
                            <div className="flex items-center text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="w-4 h-4" />
                              ))}
                            </div>
                            <span className="text-gray-500 text-sm ml-2">({hotel.reviews} reviews)</span>
                          </div>
                          <div className="text-sm text-red-600 font-semibold">
                            {hotel.roomsLeft} rooms left
                          </div>
                        </div>

                        {/* Amenities */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {hotel.amenities.slice(0, 4).map((amenity, index) => (
                            <span key={index} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                              {amenity}
                            </span>
                          ))}
                          {hotel.amenities.length > 4 && (
                            <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                              +{hotel.amenities.length - 4} more
                            </span>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 flex items-center justify-center gap-2">
                            <FaEye />
                            View Details
                          </button>
                          <button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-lg flex items-center justify-center gap-2">
                            <FaBed />
                            Book Now
                          </button>
                        </div>

                        {/* Quick Actions */}
                        <div className="flex justify-center gap-6 mt-6 pt-4 border-t border-gray-100">
                          <button className="flex items-center gap-2 text-gray-500 hover:text-red-500">
                            <FaHeart />
                            <span className="text-sm">Save</span>
                          </button>
                          <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600">
                            <FaShareAlt />
                            <span className="text-sm">Share</span>
                          </button>
                          <button className="flex items-center gap-2 text-gray-500 hover:text-green-500">
                            <FaWhatsapp />
                            <span className="text-sm">Inquiry</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Book Hotels With Us?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Best prices guaranteed with premium hotel booking experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                <FaRupeeSign className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Best Price</h3>
              <p className="text-gray-600">Guaranteed lowest prices for hotels</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6">
                <FaCheck className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Easy Booking</h3>
              <p className="text-gray-600">Instant confirmation & free cancellation</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mb-6">
                <FaStar className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Verified Reviews</h3>
              <p className="text-gray-600">Real guest reviews & ratings</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-6">
                <FaPhone className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Need Help Finding a Hotel?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
            Our travel experts can help you find the perfect accommodation
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3"
            >
              <FaPhone className="text-xl" />
              Call for Assistance
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 flex items-center gap-3"
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </Link>
          </div>
          <p className="mt-8 text-gray-300">
            Hotel booking hotline: <span className="font-bold">+977-1-1234567</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hotels;