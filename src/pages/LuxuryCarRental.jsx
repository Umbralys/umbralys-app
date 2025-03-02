import React, { useState } from 'react';
import { Calendar, MapPin, Clock, ChevronRight, Star, Shield, Clock4, Trophy, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import bentleyImg from '../assets/bentley.png';
import maybachImg from '../assets/mercedes.png';
import rollsroyceImg from '../assets/rolls-royce.png';
import heroBackgroundImg from '../assets/lambo.png';

const LuxuryCarRental = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(0);

  const featuredVehicles = [
    {
      name: "Rolls-Royce Phantom",
      price: "1,200",
      image: rollsroyceImg,
      specs: "6.75L V12 • 563 HP • 0-60 in 5.1s"
    },
    {
      name: "Bentley Continental GT",
      price: "950",
      image: bentleyImg,
      specs: "6.0L W12 • 650 HP • 0-60 in 3.5s"
    },
    {
      name: "Mercedes-Benz AMG S63",
      price: "1,100",
      image: maybachImg,
      specs: "6.0L V12 • 621 HP • 0-60 in 4.4s"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
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
          className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 transition-colors duration-200"
        >
          <ChevronLeft className="w-5 h-5 text-amber-400" />
          <span>Back to Demos</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-0">
         <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${heroBackgroundImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">
                Exceptional Luxury
              </span>
              <br />
              <span className="text-white">Unparalleled Service</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Experience the pinnacle of automotive excellence with our curated collection 
              of the world's most prestigious vehicles.
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Location</label>
                  <div className="flex items-center space-x-2 bg-white/5 rounded-lg p-3">
                    <MapPin className="w-5 h-5 text-amber-400" />
                    <input 
                      type="text" 
                      placeholder="Pick-up Location"
                      className="bg-transparent border-none w-full focus:outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Pick-up Date</label>
                  <div className="flex items-center space-x-2 bg-white/5 rounded-lg p-3">
                    <Calendar className="w-5 h-5 text-amber-400" />
                    <input 
                      type="date" 
                      className="bg-transparent border-none w-full focus:outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Return Date</label>
                  <div className="flex items-center space-x-2 bg-white/5 rounded-lg p-3">
                    <Calendar className="w-5 h-5 text-amber-400" />
                    <input 
                      type="date" 
                      className="bg-transparent border-none w-full focus:outline-none"
                    />
                  </div>
                </div>
                <button className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-semibold rounded-lg p-3 mt-auto hover:from-amber-600 hover:to-yellow-600 transition-all duration-300">
                  Search Vehicles
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredVehicles.map((vehicle, index) => (
              <div 
                key={index}
                className="group relative rounded-xl overflow-hidden bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300"
                onMouseEnter={() => setSelectedVehicle(index)}
              >
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{vehicle.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{vehicle.specs}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm text-gray-400">Starting at</span>
                      <p className="text-2xl font-bold">${vehicle.price}<span className="text-sm">/day</span></p>
                    </div>
                    <button className="bg-amber-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-amber-600 transition-colors">
                      Reserve
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Premium Insurance",
                description: "Comprehensive coverage for peace of mind"
              },
              {
                icon: <Clock4 className="w-8 h-8" />,
                title: "24/7 Concierge",
                description: "Personal assistance whenever you need it"
              },
              {
                icon: <Trophy className="w-8 h-8" />,
                title: "Elite Selection",
                description: "Access to rare and exclusive vehicles"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "VIP Service",
                description: "Door-to-door delivery and pickup"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-800/50">
                <div className="inline-flex p-4 rounded-full bg-amber-500/10 text-amber-500 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-yellow-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Ready for an Extraordinary Drive?</h2>
          <p className="text-xl text-black/80 mb-8">
            Join our exclusive membership program for priority access and special benefits.
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors inline-flex items-center space-x-2">
            <span>Become a Member</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default LuxuryCarRental;
