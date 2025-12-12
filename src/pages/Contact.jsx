import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock,
  FaWhatsapp, FaFacebook, FaTwitter, FaInstagram,
  FaLinkedin, FaPaperPlane, FaUser, FaHeadset,
  FaCheckCircle, FaBuilding, FaGlobe
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Call Us',
      details: ['+977-1-1234567', '+977-9801234567'],
      description: '24/7 Customer Support',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      details: ['+977-9813182059'],
      description: 'Quick chat support',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: FaEnvelope,
      title: 'Email Us',
      details: ['sajiloticketnepal@gmail.com', ],
      description: 'Response within 2 hours',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Visit Us',
      details: ['Tinkune, Kathmandu', 'Nepal'],
      description: 'Main Office',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const departments = [
    {
      name: 'Booking Support',
      email: 'sajiloticketnepal@gmail.com',
      phone: '+977-1-1234001',
      hours: '24/7'
    },

    {
      name: 'Refund & Cancellation',
      email: 'sajiloticketnepal@gmail.com',
      phone: '+977-9813182059',
      hours: '10 AM - 4 PM'
    }
  ];

  const socialMedia = [
    { icon: FaFacebook, name: 'Facebook', url: 'https://facebook.com/sajiloticket', color: 'bg-blue-600' },
    { icon: FaTwitter, name: 'Twitter', url: 'https://twitter.com/sajiloticket', color: 'bg-blue-400' },
    { icon: FaInstagram, name: 'Instagram', url: 'https://instagram.com/sajiloticket', color: 'bg-pink-600' },
    { icon: FaLinkedin, name: 'LinkedIn', url: 'https://linkedin.com/company/sajiloticket', color: 'bg-blue-700' },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

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
            Get in <span className="text-orange-400">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
            We're here to help you with your travel needs
          </p>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Have questions about bookings, packages, or need travel advice? Our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 md:px-8 -mt-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${info.color} rounded-full mb-6`}>
                    <Icon className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{info.title}</h3>
                  <div className="space-y-2 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">{info.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <FaPaperPlane className="text-blue-600 text-2xl" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Send us a Message</h2>
                    <p className="text-gray-600">We'll get back to you within 24 hours</p>
                  </div>
                </div>

                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                    <FaCheckCircle className="text-green-600 text-xl" />
                    <div>
                      <p className="text-green-800 font-semibold">Message sent successfully!</p>
                      <p className="text-green-600 text-sm">We'll contact you soon.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FaUser className="inline mr-2" />
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FaEnvelope className="inline mr-2" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FaPhone className="inline mr-2" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+977 98XXXXXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FaHeadset className="inline mr-2" />
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="booking">Booking Inquiry</option>
                        <option value="package">Package Information</option>
                        <option value="refund">Refund & Cancellation</option>
                        <option value="technical">Technical Support</option>
                        <option value="feedback">Feedback & Suggestions</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Please describe your inquiry in detail..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-3"
                  >
                    <FaPaperPlane className="text-xl" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Departments */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <FaBuilding className="mr-3 text-blue-500" />
                  Departments
                </h3>
                <div className="space-y-6">
                  {departments.map((dept, index) => (
                    <div key={index} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                      <h4 className="font-bold text-gray-800 mb-2">{dept.name}</h4>
                      <div className="space-y-1">
                        <div className="flex items-center text-sm text-gray-600">
                          <FaEnvelope className="mr-2 text-gray-400" />
                          <span>{dept.email}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <FaPhone className="mr-2 text-gray-400" />
                          <span>{dept.phone}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <FaClock className="mr-2 text-gray-400" />
                          <span>{dept.hours}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <FaGlobe className="mr-3 text-blue-500" />
                  Connect With Us
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialMedia.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${social.color} text-white p-4 rounded-lg text-center hover:opacity-90 transition-opacity duration-300`}
                      >
                        <Icon className="text-2xl mx-auto mb-2" />
                        <span className="text-sm font-medium">{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl shadow-lg p-8 text-white">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <FaClock className="mr-3" />
                  Business Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span>Sunday - Friday</span>
                    <span className="font-semibold">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span>Saturday</span>
                    <span className="font-semibold">Public Holiday</span>
                  </div>
                  <div className="mt-6 p-3 bg-white/20 rounded-lg">
                    <p className="text-sm text-center">
                      <span className="font-bold">24/7 Support:</span> Call us anytime for emergencies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Location */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Visit Our Office
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Come meet us in person at our main office in Kathmandu
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Map Placeholder */}
              <div className="md:w-2/3 bg-gradient-to-br from-blue-100 to-indigo-100 h-64 md:h-96 flex items-center justify-center">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-5xl text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-700 font-semibold">Map Location</p>
                  <p className="text-gray-600 text-sm mt-2">New Road, Kathmandu 44600, Nepal</p>
                  <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
                    Open in Google Maps
                  </button>
                </div>
              </div>

              {/* Location Details */}
              <div className="md:w-1/3 p-8 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
                <h3 className="text-2xl font-bold mb-6">Office Details</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold mb-2">Address</h4>
                    <p className="text-gray-300">
                      Sajilo Ticket Nepal<br />
                      Tinkune<br />
                      Kathmandu <br />
                      Nepal
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Landmark</h4>
                    <p className="text-gray-300">Near Nepal Rastra Bank, Opposite City Hall</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Parking</h4>
                    <p className="text-gray-300">Available in building basement</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Public Transport</h4>
                    <p className="text-gray-300">Bus stops within 100m walk</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Quick Help
            </h2>
            <p className="text-gray-600">Common questions answered</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-gray-800 mb-3">How do I book tickets?</h3>
              <p className="text-gray-600 mb-4">Select your travel details, choose from available options, and complete payment.</p>
              <Link to="/flights" className="text-blue-600 hover:text-blue-700 font-medium">
                Learn more →
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Cancellation Policy</h3>
              <p className="text-gray-600 mb-4">Cancel up to 24 hours before travel for full refund on most tickets.</p>
              <Link to="/policy" className="text-blue-600 hover:text-blue-700 font-medium">
                View policy →
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Payment Methods</h3>
              <p className="text-gray-600 mb-4">We accept credit/debit cards, mobile banking, eSewa, Khalti, and bank transfers.</p>
              <Link to="/payment" className="text-blue-600 hover:text-blue-700 font-medium">
                See all options →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 px-4 md:px-8 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <FaHeadset className="text-2xl" />
            <span className="font-bold">EMERGENCY ASSISTANCE</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Immediate Help?</h2>
          <p className="text-xl mb-6 opacity-90">For urgent travel emergencies, call our 24/7 hotline</p>
          <div className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
            <FaPhone className="text-2xl" />
            <span>+977-980-1234567</span>
          </div>
          <p className="opacity-80">Available 24 hours, 7 days a week for emergencies</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;