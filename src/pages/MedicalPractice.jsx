import React, { useState } from 'react';
import { Calendar, MapPin, Clock, ChevronRight, Heart, Shield, Stethoscope, Award, ChevronLeft, Users, Phone, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import medicalImg from '../assets/medical-hero.png';

const MedicalPractice = () => {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      name: "Primary Care",
      description: "Comprehensive health management and preventive care",
      duration: "30-60 min",
      price: "150"
    },
    {
      name: "Pediatrics",
      description: "Specialized care for children and adolescents",
      duration: "45 min",
      price: "175"
    },
    {
      name: "Mental Health",
      description: "Professional counseling and mental wellness support",
      duration: "60 min",
      price: "200"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="absolute top-4 left-4 z-30">
        <Link 
          to="/"
          onClick={() => {
            setTimeout(() => {
              const element = document.getElementById('demos');
              element?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="inline-flex items-center space-x-2 bg-blue-500/10 hover:bg-blue-500/20 backdrop-blur-sm rounded-lg px-4 py-2 transition-colors duration-200"
        >
          <ChevronLeft className="w-5 h-5 text-blue-600" />
          <span className="text-blue-600">Back to Demos</span>
        </Link>
      </div>

      {/* Hero Section */}
<section className="relative min-h-screen">
  {/* Background Image Layer - lowest z-index */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
    style={{ 
      backgroundImage: `url(${medicalImg})`,
      zIndex: 0 
    }}
  />
  
  {/* White Overlay - middle layer */}
  <div className="absolute inset-0 bg-white/80" style={{ zIndex: 1 }} />
  
  {/* Grid Pattern - top layer */}
  <div className="absolute inset-0 bg-grid-blue-500/[0.03]" style={{ zIndex: 2 }} />
  
  {/* Content - highest layer */}
  <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-blue-600">Modern Healthcare</span>
              <br />
              <span className="text-gray-900">For Modern Lives</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience personalized care with our team of dedicated healthcare professionals,
              combining traditional expertise with cutting-edge medical technology.
            </p>
            <div className="inline-flex space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Schedule Appointment
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Virtual Visit
              </button>
            </div>
          </div>

          {/* Appointment Scheduler */}
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900">Book Your Visit</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-600">Service Type</label>
                  <div className="flex items-center space-x-2 bg-white rounded-lg p-3 border border-gray-200">
                    <Stethoscope className="w-5 h-5 text-blue-600" />
                    <select className="bg-transparent border-none w-full focus:outline-none">
                      <option>Primary Care</option>
                      <option>Pediatrics</option>
                      <option>Mental Health</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-600">Location</label>
                  <div className="flex items-center space-x-2 bg-white rounded-lg p-3 border border-gray-200">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <select className="bg-transparent border-none w-full focus:outline-none">
                      <option>Main Clinic</option>
                      <option>Downtown Office</option>
                      <option>Virtual Visit</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-600">Date</label>
                  <div className="flex items-center space-x-2 bg-white rounded-lg p-3 border border-gray-200">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <input type="date" className="bg-transparent border-none w-full focus:outline-none" />
                  </div>
                </div>
                <button className="bg-blue-600 text-white rounded-lg p-3 mt-auto hover:bg-blue-700 transition-colors">
                  Check Availability
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative rounded-xl bg-white border border-gray-200 hover:border-blue-500 transition-all duration-300"
                onMouseEnter={() => setSelectedService(index)}
              >
                <div className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Stethoscope className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                    <span className="text-blue-600 font-semibold">${service.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Video className="w-8 h-8" />,
                title: "Virtual Visits",
                description: "Convenient online consultations"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Safe Care",
                description: "Enhanced safety protocols"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Family Care",
                description: "Comprehensive family health"
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: "24/7 Support",
                description: "Always here when you need us"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-white border border-gray-200">
                <div className="inline-flex p-4 rounded-full bg-blue-100 text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Start Your Health Journey Today</h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience healthcare that puts you first. Schedule your visit now.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center space-x-2">
            <span>Book Appointment</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default MedicalPractice;