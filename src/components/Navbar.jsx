import React, { useState, useEffect } from 'react';
import Logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { 
  FaFacebook, 
  FaWhatsapp, 
  FaInstagram, 
  FaTiktok,
  FaEnvelope,
  FaPhoneAlt,
  FaBars,
  FaTimes,
  FaMapMarkerAlt,
  FaTicketAlt
} from 'react-icons/fa';

const Menu = [
  { id: 1, name: "HOME", link: "/" },
  { id: 2, name: "ABOUT", link: "/about" },
  { id: 3, name: "PACKAGES", link: "/packages" },
  { id: 4, name: "HOTELS", link: "/hotels" },
  { id: 5, name: "INSURANCE", link: "/insurance" },
  { id: 6, name: "CONTACT", link: "/contact" },
];

const TopBarSocialMedia = () => {
  const socialLinks = {
    facebook: 'https://www.facebook.com/profile.php?id=100066820548714',
    whatsapp: 'https://wa.me/+9779809618111',
    instagram: 'https://www.instagram.com/sajiloticketnepal/?__pwa=1',
    tiktok: 'https://www.tiktok.com/@sajiloticketnepal.com',
    email: 'mailto:sajiloticketnepal@gmail.com',
    phone: 'tel:+977 9845970307',
    phone2: 'tel:+977 9809618111',
  };

  return (
    <div className="bg-gray-800 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Left Side - Contact Info */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 mb-2 sm:mb-0">
            <a 
              href="#" 
              className="contact-item flex items-center gap-2 hover:text-blue-300 transition-colors text-sm"
            >
              <FaMapMarkerAlt className="text-xs" />
              <span>Visit Us</span>
            </a>
            
            <a 
              href="#" 
              className="contact-item flex items-center gap-2 hover:text-blue-300 transition-colors text-sm"
            >
              <FaTicketAlt className="text-xs" />
              <span>Buy Tickets</span>
            </a>
          </div>

          {/* Right Side - Social Media & Contact */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a 
                href={socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="text-sm" />
              </a>
              <a 
                href={socialLinks.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-sm" />
              </a>
              <a 
                href={socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a 
                href={socialLinks.tiktok} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok className="text-sm" />
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex items-center gap-4 text-sm">
              <a 
                href={socialLinks.phone} 
                className="contact-item flex items-center gap-2 hover:text-blue-300 transition-colors"
              >
                <FaPhoneAlt className="text-xs" />
                <span className="hidden sm:inline">+977 9845970307</span>
              </a>
              <a
              href={socialLinks.phone2} 
                className="contact-item flex items-center gap-2 hover:text-blue-300 transition-colors"
              >
                <FaPhoneAlt className="text-xs" />
                <span className="hidden sm:inline">+977 9809618111</span>
              </a>
              <a 
                href={socialLinks.email} 
                className="contact-item flex items-center gap-2 hover:text-blue-300 transition-colors"
              >
                <FaEnvelope className="text-xs" />
                <span className="hidden md:inline">sajiloticketnepal@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50">
  
      {!isScrolled && <TopBarSocialMedia />}
      

      <div className={`transition-all duration-300 ${isScrolled ? 'bg-transparent shadow-md' : 'bg-transparent'}`}>
        <div className={`transition-all duration-300 ${isScrolled ? 'max-w-full px-4' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
          <div className="flex justify-between items-center py-4">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <a href="/" className="flex items-center gap-3">
                <img 
                  src={Logo} 
                  alt="Sajilo Ticket" 
                  className={`h-12 transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'}`}
                />
                <div className={`hidden sm:block transition-all duration-300 ${isScrolled ? 'text-sm' : 'text-base'}`}>
                  <span className={`font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                    Your Trusted <br /> Travel Partner
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {Menu.map((data) => (
                <a
                  key={data.id}
                  href={data.link}
                  className={`px-3 py-2 font-medium transition-all duration-300 rounded-full ${
                    isScrolled 
                      ? 'text-gray-800 hover:text-blue-600 hover:bg-blue-50' 
                      : 'text-white hover:text-blue-300'
                  }`}
                >
                  {data.name}
                </a>
              ))}
            </div>

            {/* Search and CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className={`pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                    isScrolled 
                      ? 'border border-gray-300 bg-white text-gray-800' 
                      : 'border border-white/30 bg-white/10 text-white backdrop-blur-sm'
                  }`}
                />
                <CiSearch className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                  isScrolled ? 'text-gray-400' : 'text-white'
                }`} />
              </div>
              
              <button className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                isScrolled 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-white text-blue-600 hover:bg-blue-50'
              }`}>
                LOGIN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden text-2xl transition-all duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-3">
                {Menu.map((data) => (
                  <a
                    key={data.id}
                    href={data.link}
                    className="px-4 py-2 text-gray-800 hover:text-blue-600 font-medium transition-colors rounded-full hover:bg-blue-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {data.name}
                  </a>
                ))}
              </div>

              {/* Mobile Search and Social */}
              <div className="mt-6 space-y-4">
                {/* Mobile Search */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                  />
                  <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>

                {/* Mobile CTA Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
                  LOGIN
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;