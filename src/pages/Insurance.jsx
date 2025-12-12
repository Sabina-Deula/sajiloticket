import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaShieldAlt, FaCheck, FaRupeeSign, FaCalendarAlt,
  FaUserMd, FaPlane, FaBus, FaCar, FaHospital,
  FaPhone, FaWhatsapp, FaEnvelope, FaUsers,
  FaStar, FaClock, FaFileAlt, FaCalculator,
  FaHeartbeat, FaGlobe, FaHandHoldingMedical,
  FaChartLine, FaTag, FaHeadset, FaDownload
} from 'react-icons/fa';

const Insurance = () => {
  const [activeTab, setActiveTab] = useState('domestic');
  const [travelType, setTravelType] = useState('individual');
  const [duration, setDuration] = useState(7);
  const [age, setAge] = useState(25);

  const plans = [
    {
      id: 1,
      name: 'Basic Travel Shield',
      type: 'domestic',
      coverage: 'NPR 5,00,000',
      price: 'NPR 499',
      period: '7 Days',
      features: [
        'Medical Expenses',
        'Accidental Death',
        'Trip Cancellation',
        'Lost Luggage',
        '24/7 Emergency Assistance'
      ],
      recommended: false,
      popular: true
    },
    {
      id: 2,
      name: 'Premium Travel Guard',
      type: 'international',
      coverage: 'NPR 2,500,000',
      price: 'NPR 1,299',
      period: '15 Days',
      features: [
        'Medical & Hospitalization',
        'Emergency Evacuation',
        'Trip Interruption',
        'Personal Liability',
        'Adventure Sports Cover',
        'COVID-19 Coverage'
      ],
      recommended: true,
      popular: true
    },
    {
      id: 3,
      name: 'Family Travel Protect',
      type: 'domestic',
      coverage: 'NPR 10,00,000',
      price: 'NPR 1,999',
      period: '30 Days',
      features: [
        'Cover for 4 Members',
        'Child Education Benefit',
        'Hospital Cash',
        'Ambulance Charges',
        'Dental Emergency',
        'Flight Delay'
      ],
      recommended: false,
      popular: false
    },
    {
      id: 4,
      name: 'Adventure Explorer',
      type: 'trekking',
      coverage: 'NPR 7,500,000',
      price: 'NPR 2,499',
      period: '30 Days',
      features: [
        'High Altitude Sickness',
        'Helicopter Rescue',
        'Trekking Equipment Loss',
        'Guide & Porter Coverage',
        'Mountain Rescue',
        'Weather Delay'
      ],
      recommended: true,
      popular: true
    },
    {
      id: 5,
      name: 'Student Travel Safe',
      type: 'international',
      coverage: 'NPR 3,000,000',
      price: 'NPR 899',
      period: '90 Days',
      features: [
        'Study Interruption',
        'Tuition Fee Protection',
        'Mental Health Support',
        'Repatriation',
        'Personal Accident',
        'Legal Assistance'
      ],
      recommended: false,
      popular: false
    },
    {
      id: 6,
      name: 'Senior Citizen Care',
      type: 'domestic',
      coverage: 'NPR 3,00,000',
      price: 'NPR 699',
      period: '15 Days',
      features: [
        'Pre-existing Conditions',
        'Chronic Disease Coverage',
        'Doctor Consultation',
        'Medicine Expenses',
        'Medical Checkup',
        'Caregiver Allowance'
      ],
      recommended: false,
      popular: true
    },
  ];

  const benefits = [
    { icon: FaUserMd, title: 'Medical Coverage', desc: 'Hospitalization & treatment expenses' },
    { icon: FaPlane, title: 'Trip Protection', desc: 'Cancellation & interruption coverage' },
    { icon: FaHospital, title: 'Emergency Services', desc: '24/7 medical assistance' },
    { icon: FaHeartbeat, title: 'Personal Accident', desc: 'Accidental death & disability' },
    { icon: FaGlobe, title: 'Worldwide Coverage', desc: 'Valid in 150+ countries' },
    { icon: FaHandHoldingMedical, title: 'COVID-19 Protection', desc: 'Testing & treatment included' },
  ];

  const claimsProcess = [
    { step: 1, title: 'Report Claim', desc: 'Call our 24/7 helpline immediately', icon: FaPhone },
    { step: 2, title: 'Submit Documents', desc: 'Upload required documents online', icon: FaFileAlt },
    { step: 3, title: 'Claim Assessment', desc: 'Our team reviews your claim', icon: FaChartLine },
    { step: 4, title: 'Receive Payment', desc: 'Get direct bank transfer within 7 days', icon: FaRupeeSign },
  ];

  const filteredPlans = plans.filter(plan => 
    activeTab === 'all' || plan.type === activeTab
  );

  const calculatePremium = () => {
    let base = 0;
    if (travelType === 'individual') base = 500;
    if (travelType === 'family') base = 1500;
    if (travelType === 'student') base = 700;
    
    const ageFactor = age > 60 ? 1.5 : age > 40 ? 1.2 : 1;
    const durationFactor = duration / 7;
    
    return Math.round(base * ageFactor * durationFactor);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white py-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <FaShieldAlt className="text-2xl text-green-300" />
            <span className="font-semibold">Travel Safe with Insurance</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Travel <span className="text-green-400">Insurance</span> Plans
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
            Travel with peace of mind - Comprehensive coverage for every journey
          </p>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Get insured in minutes with our affordable and reliable travel insurance plans
          </p>
        </div>
      </section>

      {/* Premium Calculator */}
      <section className="py-12 px-4 md:px-8 -mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  Calculate Your Premium
                </h2>
                <p className="text-gray-600">Get instant quote for your travel insurance</p>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="text-4xl font-bold text-green-600 flex items-center">
                  <FaRupeeSign className="text-3xl" />
                  <span>{calculatePremium()}</span>
                </div>
                <p className="text-gray-500 text-sm text-center">Estimated Premium</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Travel Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  <FaUsers className="inline mr-2" />
                  Travel Type
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['individual', 'family', 'student'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setTravelType(type)}
                      className={`py-3 rounded-lg text-sm font-medium transition ${
                        travelType === type
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  <FaCalendarAlt className="inline mr-2" />
                  Trip Duration
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="1"
                    max="365"
                    value={duration}
                    onChange={(e) => setDuration(parseInt(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-lg font-semibold text-green-600">{duration} days</span>
                </div>
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  <FaUserMd className="inline mr-2" />
                  Traveler Age
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="1"
                    max="85"
                    value={age}
                    onChange={(e) => setAge(parseInt(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-lg font-semibold text-green-600">{age} years</span>
                </div>
              </div>

              {/* Calculate Button */}
              <div className="flex items-end">
                <button className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-3">
                  <FaCalculator />
                  Update Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Plans */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Choose Your Insurance Plan
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Select from our range of comprehensive travel insurance plans
            </p>
          </div>

          {/* Plan Type Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['all', 'domestic', 'international', 'trekking'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlans.map((plan) => (
              <div 
                key={plan.id} 
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  plan.recommended ? 'ring-2 ring-green-500' : ''
                }`}
              >
                {plan.recommended && (
                  <div className="bg-green-600 text-white text-sm font-bold py-2 text-center">
                    🏆 RECOMMENDED PLAN
                  </div>
                )}
                {plan.popular && (
                  <div className="bg-orange-500 text-white text-sm font-bold py-2 text-center">
                    ⭐ MOST POPULAR
                  </div>
                )}

                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                        plan.type === 'domestic' ? 'bg-blue-100 text-blue-800' :
                        plan.type === 'international' ? 'bg-purple-100 text-purple-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {plan.type.toUpperCase()}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-green-600 flex items-center justify-end">
                        <FaRupeeSign className="text-2xl" />
                        <span>{plan.price.split(' ')[1]}</span>
                      </div>
                      <div className="text-gray-500 text-sm">{plan.period}</div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-gray-600">Coverage Amount</div>
                      <div className="text-xl font-bold text-gray-800">{plan.coverage}</div>
                    </div>
                    
                    <div className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-gray-600">
                          <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold py-3 rounded-lg transition duration-300 mb-4">
                    Buy Now
                  </button>
                  
                  <button className="w-full border border-green-600 text-green-600 hover:bg-green-50 font-semibold py-3 rounded-lg transition duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Travel Insurance Matters
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive protection for unexpected situations during your travels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6">
                    <Icon className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Claims Process */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Easy Claims Process
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Simple and quick claim settlement in 4 easy steps
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-1 bg-green-200 top-12 w-3/4"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {claimsProcess.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="relative">
                    <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-600 rounded-full mb-6 mx-auto">
                        <Icon className="text-3xl" />
                      </div>
                      <div className="text-2xl font-bold text-green-600 mb-2">Step {step.step}</div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">Get answers to common questions about travel insurance</p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'What does travel insurance cover?',
                a: 'Travel insurance typically covers medical emergencies, trip cancellation/interruption, lost baggage, flight delays, and personal liability. Our plans also include COVID-19 coverage and adventure sports protection.'
              },
              {
                q: 'How quickly can I get insured?',
                a: 'You can purchase travel insurance instantly online. Your policy documents will be emailed to you within 5 minutes of purchase.'
              },
              {
                q: 'Is COVID-19 covered?',
                a: 'Yes, all our travel insurance plans include COVID-19 medical expenses, testing costs, and quarantine accommodation.'
              },
              {
                q: 'Can I extend my insurance while traveling?',
                a: 'Yes, you can extend your policy online while your trip is ongoing, subject to terms and conditions.'
              },
              {
                q: 'How do I make a claim?',
                a: 'You can make a claim by calling our 24/7 helpline or submitting documents through our online portal. We process most claims within 7 working days.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Travel Protected, Travel Confident
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
            Don't let unexpected events ruin your journey. Get insured today!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3">
              <FaShieldAlt className="text-xl" />
              Buy Insurance Now
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 flex items-center gap-3">
              <FaWhatsapp />
              Chat for Assistance
            </button>
          </div>
          <div className="mt-8 space-y-4">
            <p className="text-gray-300">
              <FaPhone className="inline mr-3" />
              Insurance Helpline: <span className="font-bold">+977-1-9876543</span>
            </p>
            <p className="text-gray-300">
              <FaClock className="inline mr-3" />
              Available 24/7 for emergencies and claims
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insurance;