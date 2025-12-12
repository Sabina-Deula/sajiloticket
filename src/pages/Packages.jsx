import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaSearch, FaFilter, FaSortAmountDown, FaStar,
  FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaBed,
  FaWifi, FaSwimmingPool, FaCar, FaUtensils,
  FaParking, FaHotTub, FaDumbbell, FaShower,
  FaCheck, FaPhone, FaWhatsapp, FaHeart,
  FaShareAlt, FaEye, FaRupeeSign, FaClock,
  FaPlane, FaBus, FaHotel, FaMountain,
  FaTag, FaArrowRight, FaShoppingCart,
  FaLandmark, FaUmbrellaBeach,
  FaShieldAlt, FaShieldAlt as FaShield
} from 'react-icons/fa';

const Packages = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const filters = [
    { id: 'all', label: 'All Packages', icon: FaFilter },
    { id: 'trekking', label: 'Trekking', icon: FaMountain },
    { id: 'cultural', label: 'Cultural', icon: FaLandmark },
    { id: 'adventure', label: 'Adventure', icon: FaMountain },
    { id: 'luxury', label: 'Luxury', icon: FaHotel },
    { id: 'budget', label: 'Budget', icon: FaTag },
  ];

  const packages = [
    {
      id: 1,
      title: 'Everest Base Camp Trek',
      category: 'trekking',
      duration: '14 Days / 13 Nights',
      price: 'NPR 85,000',
      oldPrice: 'NPR 1,00,000',
      discount: '15% OFF',
      rating: 4.8,
      reviews: 124,
      image: 'bg-gradient-to-r from-blue-600 to-purple-700',
      highlights: ['Flight to Lukla', 'Teahouse Accommodation', 'Guide & Porter', 'Permits Included', '3 Meals Daily'],
      description: 'Experience the world\'s highest peak with our expertly guided trek to Everest Base Camp.',
      featured: true,
      seatsLeft: 8,
      bestFor: ['Adventure Seekers', 'Photography Enthusiasts'],
      includes: ['Accommodation', 'Meals', 'Transport', 'Guide', 'Permits']
    },
    {
      id: 2,
      title: 'Pokhara Luxury Getaway',
      category: 'luxury',
      duration: '4 Days / 3 Nights',
      price: 'NPR 25,000',
      oldPrice: 'NPR 32,000',
      discount: '22% OFF',
      rating: 4.9,
      reviews: 89,
      image: 'bg-gradient-to-r from-emerald-600 to-teal-700',
      highlights: ['5-Star Hotel', 'All Meals', 'Paragliding', 'Boating', 'Spa Treatment'],
      description: 'Luxury stay in Pokhara with adventure activities and premium amenities included.',
      featured: true,
      seatsLeft: 12,
      bestFor: ['Couples', 'Family', 'Luxury Travelers'],
      includes: ['Luxury Hotel', 'All Meals', 'Activities', 'Transfers']
    },
    {
      id: 3,
      title: 'Chitwan Jungle Safari',
      category: 'adventure',
      duration: '3 Days / 2 Nights',
      price: 'NPR 18,500',
      oldPrice: 'NPR 22,000',
      discount: '16% OFF',
      rating: 4.7,
      reviews: 156,
      image: 'bg-gradient-to-r from-green-600 to-lime-700',
      highlights: ['Jungle Safari', 'Elephant Ride', 'Cultural Show', 'Bird Watching', 'Nature Walk'],
      description: 'Wildlife adventure in Chitwan National Park with thrilling jungle activities.',
      featured: false,
      seatsLeft: 15,
      bestFor: ['Wildlife Lovers', 'Family', 'Nature Enthusiasts'],
      includes: ['Resort Stay', 'All Meals', 'Safari Activities', 'Guide']
    },
    {
      id: 4,
      title: 'Lumbini Spiritual Tour',
      category: 'cultural',
      duration: '2 Days / 1 Night',
      price: 'NPR 12,000',
      oldPrice: 'NPR 15,000',
      discount: '20% OFF',
      rating: 4.6,
      reviews: 78,
      image: 'bg-gradient-to-r from-yellow-600 to-orange-700',
      highlights: ['Hotel Stay', 'Guide Service', 'All Transfers', 'Entrance Fees', 'Meditation Session'],
      description: 'Visit Buddha\'s birthplace with guided spiritual tour and meditation sessions.',
      featured: false,
      seatsLeft: 20,
      bestFor: ['Spiritual Seekers', 'History Buffs'],
      includes: ['Hotel', 'Guide', 'Transport', 'Entrance Fees']
    },
    {
      id: 5,
      title: 'Annapurna Circuit Trek',
      category: 'trekking',
      duration: '18 Days / 17 Nights',
      price: 'NPR 1,20,000',
      oldPrice: 'NPR 1,40,000',
      discount: '14% OFF',
      rating: 4.9,
      reviews: 203,
      image: 'bg-gradient-to-r from-red-600 to-pink-700',
      highlights: ['ACAP Permit', 'Mountain Lodges', 'Expert Guide', 'Medical Kit', 'Porter Service'],
      description: 'One of the world\'s best trekking routes through diverse landscapes and cultures.',
      featured: true,
      seatsLeft: 6,
      bestFor: ['Experienced Trekkers', 'Adventure Seekers'],
      includes: ['Accommodation', 'Meals', 'Guide', 'Porter', 'Permits']
    },
    {
      id: 6,
      title: 'Bhutan Cultural Tour',
      category: 'cultural',
      duration: '7 Days / 6 Nights',
      price: 'NPR 1,85,000',
      oldPrice: 'NPR 2,20,000',
      discount: '16% OFF',
      rating: 4.8,
      reviews: 94,
      image: 'bg-gradient-to-r from-purple-600 to-indigo-700',
      highlights: ['Visa Processing', 'Hotel Stay', 'All Meals', 'Guide Service', 'Cultural Shows'],
      description: 'Explore the mystical kingdom of Bhutan with its rich culture and stunning landscapes.',
      featured: true,
      seatsLeft: 10,
      bestFor: ['Cultural Explorers', 'Photography'],
      includes: ['Visa', 'Hotel', 'Meals', 'Guide', 'Transport']
    },
    {
      id: 7,
      title: 'Goa Beach Holiday',
      category: 'luxury',
      duration: '5 Days / 4 Nights',
      price: 'NPR 65,000',
      oldPrice: 'NPR 78,000',
      discount: '17% OFF',
      rating: 4.7,
      reviews: 167,
      image: 'bg-gradient-to-r from-cyan-600 to-blue-700',
      highlights: ['Beach Resort', 'Water Sports', 'Local Tours', 'Breakfast', 'Airport Transfers'],
      description: 'Sun, sand, and sea in beautiful Goa with beachfront resort and water activities.',
      featured: false,
      seatsLeft: 18,
      bestFor: ['Beach Lovers', 'Couples', 'Friends'],
      includes: ['Beach Resort', 'Breakfast', 'Activities', 'Transfers']
    },
    {
      id: 8,
      title: 'Kathmandu Heritage Tour',
      category: 'cultural',
      duration: '3 Days / 2 Nights',
      price: 'NPR 15,000',
      oldPrice: 'NPR 18,000',
      discount: '17% OFF',
      rating: 4.5,
      reviews: 112,
      image: 'bg-gradient-to-r from-gray-600 to-gray-800',
      highlights: ['Heritage Sites', 'Hotel Stay', 'Guide Service', 'All Transfers', 'Local Meals'],
      description: 'Explore UNESCO World Heritage sites in Kathmandu Valley with expert guides.',
      featured: false,
      seatsLeft: 25,
      bestFor: ['History Lovers', 'First-time Visitors'],
      includes: ['Hotel', 'Guide', 'Transport', 'Entrance Fees']
    },
  ];

  const filteredPackages = packages.filter(pkg => {
    if (activeFilter !== 'all' && pkg.category !== activeFilter) return false;
    if (searchTerm && !pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !pkg.description.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  const sortPackages = (packages) => {
    switch (sortBy) {
      case 'price-low':
        return [...packages].sort((a, b) => parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')));
      case 'price-high':
        return [...packages].sort((a, b) => parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, '')));
      case 'rating':
        return [...packages].sort((a, b) => b.rating - a.rating);
      case 'duration':
        return [...packages].sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
      default:
        return [...packages].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || b.rating - a.rating);
    }
  };

  const sortedPackages = sortPackages(filteredPackages);

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
            Travel <span className="text-orange-400">Packages</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
            Curated experiences for every traveler's dream
          </p>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            From Himalayan treks to cultural tours, find your perfect adventure with our best deals
          </p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 px-4 md:px-8 bg-white shadow-sm -mt-8 rounded-t-3xl relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="text"
                placeholder="Search packages (e.g., 'Everest', 'Pokhara', 'Trekking')"
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
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

            {/* Sort Dropdown */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
                <FaSortAmountDown className="text-gray-600" />
                <span className="text-gray-700">Sort by:</span>
                <select 
                  className="bg-transparent border-none focus:outline-none focus:ring-0 text-gray-700"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="duration">Duration</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-gray-600 mb-4">
            <span className="font-semibold">{sortedPackages.length}</span> packages found
            {activeFilter !== 'all' && <span> in <span className="font-semibold capitalize">{activeFilter}</span></span>}
            {searchTerm && <span> for "<span className="font-semibold">{searchTerm}</span>"</span>}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {sortedPackages.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
              <div className="text-6xl mb-6">🏔️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No packages found</h3>
              <p className="text-gray-600 mb-8">Try changing your search criteria or filter options</p>
              <button 
                onClick={() => { setSearchTerm(''); setActiveFilter('all'); }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedPackages.map((pkg) => (
                <div 
                  key={pkg.id} 
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${pkg.featured ? 'ring-2 ring-orange-500' : ''}`}
                >
                  {/* Package Image/Banner */}
                  <div className={`h-56 ${pkg.image} relative`}>
                    {pkg.featured && (
                      <div className="absolute top-4 left-4 bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full flex items-center gap-1">
                        <FaStar className="w-3 h-3" />
                        <span>FEATURED</span>
                      </div>
                    )}
                    {pkg.discount && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                        {pkg.discount}
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4">
                      <span className="text-white text-sm bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                        {pkg.duration}
                      </span>
                    </div>
                  </div>

                  {/* Package Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-1 line-clamp-1">{pkg.title}</h3>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center text-yellow-400">
                            <FaStar className="w-4 h-4" />
                            <span className="ml-1 text-gray-600 font-semibold">{pkg.rating}</span>
                          </div>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-500 text-sm">{pkg.reviews} reviews</span>
                        </div>
                        <p className="text-gray-600 text-sm line-clamp-2">{pkg.description}</p>
                      </div>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ml-2 ${
                        pkg.category === 'trekking' ? 'bg-blue-100 text-blue-800' :
                        pkg.category === 'luxury' ? 'bg-purple-100 text-purple-800' :
                        pkg.category === 'adventure' ? 'bg-green-100 text-green-800' :
                        pkg.category === 'cultural' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {pkg.category.toUpperCase()}
                      </span>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {pkg.highlights.slice(0, 3).map((highlight, index) => (
                          <span key={index} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                            {highlight}
                          </span>
                        ))}
                        {pkg.highlights.length > 3 && (
                          <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                            +{pkg.highlights.length - 3} more
                          </span>
                        )}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <FaUsers className="mr-2" />
                        <span>Best for: {pkg.bestFor.join(', ')}</span>
                      </div>
                    </div>

                    {/* Price & Booking */}
                    <div className="border-t border-gray-100 pt-6">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="flex items-center text-2xl font-bold text-blue-600">
                            <FaRupeeSign className="text-xl" />
                            <span>{pkg.price.split(' ')[1]}</span>
                          </div>
                          {pkg.oldPrice && (
                            <div className="text-gray-400 line-through text-sm">
                              NPR {pkg.oldPrice.split(' ')[1]}
                            </div>
                          )}
                          <div className="text-gray-500 text-sm mt-1">per person</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500 mb-1">Only</div>
                          <div className="text-lg text-red-600 font-semibold">
                            {pkg.seatsLeft} seats left
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 flex items-center justify-center gap-2">
                          <FaEye />
                          View Details
                        </button>
                        <button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-lg flex items-center justify-center gap-2">
                          <FaShoppingCart />
                          Book Now
                        </button>
                      </div>

                      {/* Included Features */}
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <FaCheck className="text-green-500 mr-2" />
                          <span className="font-medium">Includes:</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {pkg.includes.map((item, index) => (
                            <span key={index} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="flex justify-center gap-6 mt-6 pt-4 border-t border-gray-100">
                        <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition">
                          <FaHeart />
                          <span className="text-sm">Save</span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition">
                          <FaShareAlt />
                          <span className="text-sm">Share</span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-500 hover:text-green-500 transition">
                          <FaWhatsapp />
                          <span className="text-sm">Inquiry</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Packages */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Our Packages?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience hassle-free travel with our comprehensive packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                <FaCheck className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">All-Inclusive</h3>
              <p className="text-gray-600">No hidden costs. Everything included in one transparent price.</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6">
                <FaShieldAlt className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Flexible Booking</h3>
              <p className="text-gray-600">Free cancellation & easy date changes with no extra fees.</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mb-6">
                <FaStar className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Expert Guides</h3>
              <p className="text-gray-600">Local guides with extensive knowledge and experience.</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-6">
                <FaPhone className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance during your entire trip.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Need a Custom Package?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
            Tell us your travel preferences and we'll create a personalized itinerary just for you
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3"
            >
              <FaPhone className="text-xl" />
              Request Custom Package
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
            Call our travel experts: <span className="font-bold">+977-1-1234567</span> • Open 24/7
          </p>
        </div>
      </section>
    </div>
  );
};

export default Packages;