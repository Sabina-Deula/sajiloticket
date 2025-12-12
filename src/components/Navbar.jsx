import React, { useState } from 'react';
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
  FaTimes
} from 'react-icons/fa';
import HomePage from '../pages/HomePage';

const Menu = [
  { id: 1, name: "HOME", link: "../pages/HomePage" },
  { id: 2, name: "ABOUT", link: "/about" },
  { id: 3, name: "PACKAGES", link: "/packages" },
  { id: 4, name: "HOTELS", link: "/hotels" },
  { id: 5, name: "INSURENCE", link: "/insurence" },
  { id: 6, name: "CONTACT", link: "/contact" },
];

const TopBarSocialMedia = () => {
    const phoneNumber = " +977 9809618111";
    const formattedNumber = phoneNumber.replace(/\D/g,'');
  const socialLinks = {
    facebook: 'https://www.facebook.com/profile.php?id=100066820548714',
    whatsapp: 'https://wa.me/+9779809618111',
    instagram: 'https://www.instagram.com/sajiloticketnepal/?__pwa=1',
    tiktok: 'https://www.tiktok.com/@sajiloticketnepal.com',
    email: 'mailto:sajiloticketnepal@gmail.com',
    phone: 'tel:+977 9845970307 ,  +977 9809618111'
  };

  return (
    <div className="top-social-bar bg-gray-700 text-white py-2 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
      <span className='contact-item flex items-center hover:text-blue-300 transition-colors'>Visit Us 
            </span>
        <span className='contact-item flex items-center hover:text-blue-300 transition-colors'>Buy Tickets</span>
      
        {/* Social Media Icons */}
        <div className="social-icons flex items-center gap-2">       
          <div className="flex gap-3">
            <a 
              href={socialLinks.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon w-7 h-7 rounded-full bg-gray-600 flex items-center justify-center hover:bg-blue-600 transition-all hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebook className="text-sm" />
            </a>
            <a 
              href={socialLinks.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon w-7 h-7 rounded-full bg-gray-600 flex items-center justify-center hover:bg-green-500 transition-all hover:scale-110"
              aria-label="whatsapp"
            >
              <FaWhatsapp className="text-sm" />
            </a>
            <a 
              href={socialLinks.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon w-7 h-7 rounded-full bg-gray-600 flex items-center justify-center hover:bg-linear-to-r from-pink-600 to-yellow-500 transition-all hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram className="text-sm" />
            </a>
            <a 
              href={socialLinks.tiktok} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon w-7 h-7 rounded-full bg-gray-600 flex items-center justify-center hover:bg-black transition-all hover:scale-110"
              aria-label="TikTok"
            >
              <FaTiktok className="text-sm" />
            </a>
              {/* Contact Info */}
             <div className="contact-info flex flex-wrap justify-center sm:justify-start gap-4 mb-2 sm:mb-0">
          <a 
            href={socialLinks.phone} 
            className="contact-item flex items-center gap-2 hover:text-blue-300 transition-colors"
          >
            <FaPhoneAlt className="text-sm" />
            <span className="text-sm">+977 9845970307 </span></a>
             <a 
            href={socialLinks.phone} 
            className="contact-item flex items-center gap-2 hover:text-blue-300 transition-colors"
          >
            <FaPhoneAlt className="text-sm" />
            <span className="text-sm">+977 9809618111</span>
          </a>
          <a 
            href={socialLinks.email} 
            className="contact-item flex items-center gap-2 hover:text-blue-300 transition-colors"
          >
            <FaEnvelope className="text-sm" />
            <span className="text-sm">sajiloticketnepal@gmail.com</span>
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

  return (
    <div className="sticky top-0 z-50">
      {/* Top Social Media Bar */}
      <TopBarSocialMedia />
      
      {/* Main Navigation */}
      <div className="bg-transparent shadow-md px-2">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <a href="/" className="flex items-center gap-3">
                <img 
                  src={Logo} 
                  alt="Sajilo Ticket" 
                  className="w-70 "
                />
                <div className="hidden sm:block">
                  <span className="text-l  font-bold text-shadow-white">
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
                  className="px-3 py-2 text-black dark:text-shadow-white hover:text-white dark:hover:text-orange-600 
                  font-medium transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-blue-500"
                >
                  {data.name}
                </a>
              ))}
            </div>

            {/* Search and Actions */}
            {/* <div className="hidden md:flex items-center gap-4"> */}
              {/* Search Bar */}
              {/* <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                />
                <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div> */}
              
              {/* CTA Button */}
              {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
                Get Started
              </button>
            </div> */}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-shadow-black dark:text-blue-500 text-2xl"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 dark:border-black pt-4">
              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-3">
                {Menu.map((data) => (
                  <a
                    key={data.id}
                    href={data.link}
                    className="px-4 py-2 text-gray-700 dark:text-black hover:text-orange-600 dark:hover:text-orange-600 font-medium transition-colors rounded-full hover:bg-blue-300 dark:hover:bg-blue-600"
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
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-600 dark:bg-transparent dark:text-shadow-black
                    fill:blue-500"
                  />
                  <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-shadow-black" />
                </div>

                {/* Mobile Social Media */}
                <div className="flex justify-center gap-4 pt-4">
                  <a 
                    href="https://facebook.com/sajiloticketnepal" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </a>
                  <a 
                    href="https://instagram.com/yourprofile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center text-white hover:bg-pink-700 transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a 
                    href="tel:+1234567890" 
                    className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white hover:bg-green-700 transition-colors"
                    aria-label="Call"
                  >
                    <FaPhoneAlt />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;