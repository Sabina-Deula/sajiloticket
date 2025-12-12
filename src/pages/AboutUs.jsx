import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaUsers, FaShieldAlt, FaAward, FaGlobe, 
  FaHandshake, FaChartLine, FaPhone, FaEnvelope, 
  FaMapMarkerAlt, FaClock, FaHeart, FaStar,
  FaPlane, FaBus, FaHotel, FaCalendarAlt,
  FaCheckCircle, FaRocket, FaHeadset, FaTag
} from 'react-icons/fa';

const AboutUs = () => {
  const teamMembers = [
    { 
      name: 'Shivang Dutta', 
      role: 'CEO', 
      experience: '6+ years in Tourism',
      bio: 'Former travel guide turned entrepreneur',
      imgColor: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Bibek Kumar Sharma', 
      role: 'Founder & Director', 
      experience: '4+ years Experience',
      bio: 'Expert in logistics and customer service',
      imgColor: 'from-purple-500 to-pink-500'
    },
   
  ];

  const milestones = [
    { year: '2020', title: 'Founded', desc: 'Started as a small travel agency in Kathmandu' },
    { year: '2021', title: 'Online Platform', desc: 'Launched our first online booking system' },
    { year: '2023', title: '50K+ Customers', desc: 'Served over 50,000 happy travelers' },
    { year: '2024', title: 'Award Winning', desc: 'Best Travel Platform in Nepal Award' },
    { year: '2025', title: '100K+ Bookings', desc: 'Crossed 100,000 successful bookings' },
  ];

  const values = [
    { icon: FaShieldAlt, title: 'Trust & Security', desc: 'Your security is our top priority. Bank-level encryption for all transactions.', color: 'blue' },
    { icon: FaHeart, title: 'Customer First', desc: 'We put our customers at the heart of everything we do.', color: 'pink' },
    { icon: FaHandshake, title: 'Transparency', desc: 'No hidden charges, clear pricing with complete breakdown.', color: 'green' },
    { icon: FaGlobe, title: 'Sustainability', desc: 'Promoting eco-friendly tourism and supporting local communities.', color: 'emerald' },
    { icon: FaAward, title: 'Excellence', desc: 'Striving for excellence in every service we provide.', color: 'yellow' },
    { icon: FaRocket, title: 'Innovation', desc: 'Constantly improving and innovating our services.', color: 'purple' },
  ];

  const stats = [
    { number: '100K+', label: 'Happy Travelers', icon: FaUsers },
    { number: '12+', label: 'Years Experience', icon: FaCalendarAlt },
    { number: '24/7', label: 'Customer Support', icon: FaHeadset },
    { number: '100%', label: 'Secure Booking', icon: FaShieldAlt },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            About <span className="text-orange-400">Sajilo Ticket Nepal</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
            Your Trusted Travel Partner Since 2010
          </p>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Revolutionizing travel in Nepal by making ticket booking simple, secure, and accessible to everyone.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 md:px-8 -mt-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:-translate-y-1 transition duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                    <Icon className="text-2xl" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Journey to Excellence
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  Founded in 2010, <strong>Sajilo Ticket Nepal</strong> began with a simple mission: to make travel booking in Nepal easy and accessible for everyone. What started as a small travel agency in Kathmandu has now grown into Nepal's leading online travel platform.
                </p>
                <p>
                  We recognized the challenges faced by travelers in Nepal - complicated booking processes, lack of transparency, and unreliable services. Our team set out to change this by creating a platform that puts customers first.
                </p>
                <p>
                  Today, we serve thousands of travelers every month, helping them explore Nepal and beyond with confidence. Our commitment to innovation, customer satisfaction, and social responsibility continues to drive us forward.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center text-green-600">
                  <FaCheckCircle className="mr-3 text-lg" />
                  <span>12+ Years Experience</span>
                </div>
                <div className="flex items-center text-green-600">
                  <FaCheckCircle className="mr-3 text-lg" />
                  <span>100% Secure Booking</span>
                </div>
                <div className="flex items-center text-green-600">
                  <FaCheckCircle className="mr-3 text-lg" />
                  <span>24/7 Customer Support</span>
                </div>
                <div className="flex items-center text-green-600">
                  <FaCheckCircle className="mr-3 text-lg" />
                  <span>Best Price Guarantee</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FaRocket className="mr-3 text-orange-500" />
                Our Mission & Vision
              </h3>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="text-xl font-bold text-blue-600 mb-3">Our Mission</h4>
                  <p className="text-gray-600">
                    To simplify travel booking in Nepal through technology, providing secure, transparent, and affordable services to every traveler.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="text-xl font-bold text-purple-600 mb-3">Our Vision</h4>
                  <p className="text-gray-600">
                    To become Nepal's most trusted travel platform, connecting people with memorable experiences while supporting sustainable tourism.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              const colorClasses = {
                blue: 'bg-blue-100 text-blue-600',
                pink: 'bg-pink-100 text-pink-600',
                green: 'bg-green-100 text-green-600',
                emerald: 'bg-emerald-100 text-emerald-600',
                yellow: 'bg-yellow-100 text-yellow-600',
                purple: 'bg-purple-100 text-purple-600'
              };
              
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${colorClasses[value.color]} rounded-full mb-6`}>
                    <Icon className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Dedicated professionals working to make your travel experience better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className={`h-48 bg-gradient-to-r ${member.imgColor} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                      {member.experience}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-500 text-sm mb-4">{member.bio}</p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4 text-yellow-400 mr-1" />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">Expert</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Journey Timeline
            </h2>
            <p className="text-gray-600 text-lg">Milestones in our growth story</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-center mb-12">
                {/* Left side for even, right for odd */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-2'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.desc}</p>
                  </div>
                </div>
                
                {/* Center dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white hidden md:block"></div>
                
                {/* Year on timeline */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12 md:order-2' : 'md:pr-12 md:text-right'}`}>
                  <div className="text-3xl font-bold text-gray-300 mt-4 md:mt-0">{milestone.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Ready to Travel With Us?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
            Join thousands of satisfied travelers who trust Sajilo Ticket Nepal for their journey
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/packages"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3"
            >
              <FaPlane className="text-xl" />
              Explore Travel Packages
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 flex items-center gap-3"
            >
              <FaPhone />
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                <FaMapMarkerAlt className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Our Office</h3>
              <p className="text-gray-600">New Road, Kathmandu 44600</p>
              <p className="text-gray-600">Nepal</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6">
                <FaPhone className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Call Us</h3>
              <p className="text-gray-600 font-semibold text-lg">+977-1-1234567</p>
              <p className="text-gray-600">+977-9801234567</p>
              <p className="text-gray-500 text-sm mt-2">24/7 Customer Support</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-6">
                <FaEnvelope className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Email Us</h3>
              <p className="text-gray-600 font-semibold">info@sajiloticket.com</p>
              <p className="text-gray-600">support@sajiloticket.com</p>
              <p className="text-gray-500 text-sm mt-2">Response within 2 hours</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;