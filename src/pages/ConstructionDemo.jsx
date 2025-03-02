import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Ruler, Calendar, Phone, CheckCircle, Clock, Shield, Users, HardHat, Building, Factory, Home, ArrowRight } from 'lucide-react';

const ConstructionDemo = () => {
  const services = [
    {
      name: "Residential Construction",
      description: "Custom homes and renovations built to the highest standards",
      icon: <Home className="w-8 h-8" />,
      price: "Custom Quote",
      features: ["Design Consultation", "3D Modeling", "Interior Finishing", "Project Management"]
    },
    {
      name: "Commercial Buildings",
      description: "Modern office spaces and retail locations",
      icon: <Building className="w-8 h-8" />,
      price: "Project-Based",
      features: ["Structural Engineering", "Code Compliance", "Safety Planning", "Timeline Optimization"]
    },
    {
      name: "Industrial Projects",
      description: "Large-scale industrial and manufacturing facilities",
      icon: <Factory className="w-8 h-8" />,
      price: "Contact Us",
      features: ["Site Analysis", "Heavy Equipment", "Environmental Impact", "Quality Control"]
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
          className="inline-flex items-center space-x-2 bg-black/80 text-white rounded-lg px-4 py-2 transition-colors duration-200 hover:bg-black/90"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back to Demos</span>
        </Link>
      </div>

      {/* New Hero Section */}
      <section className="relative min-h-screen bg-gray-900">
        <div className="absolute inset-0">
          <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-10" />
              <div className="absolute inset-0 bg-[url('/api/placeholder/960/1080')] bg-cover bg-center" />
            </div>
            <div className="hidden md:block">
              <div className="grid grid-cols-2 h-full">
                <div className="relative">
                  <div className="absolute inset-0 bg-[url('/api/placeholder/480/540')] bg-cover bg-center filter brightness-75" />
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-[url('/api/placeholder/480/540')] bg-cover bg-center filter brightness-75" />
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-[url('/api/placeholder/480/540')] bg-cover bg-center filter brightness-75" />
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-[url('/api/placeholder/480/540')] bg-cover bg-center filter brightness-75" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-20 flex items-center min-h-screen">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="md:max-w-lg">
              <div className="inline-flex items-center bg-orange-500/10 rounded-full px-4 py-2 mb-6">
                <HardHat className="w-5 h-5 text-orange-500 mr-2" />
                <span className="text-orange-500 font-medium">25+ Years of Excellence</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Crafting Spaces,
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                  Building Dreams
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Where innovation meets craftsmanship. We transform your vision into reality with precision, 
                passion, and unparalleled expertise.
              </p>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300">Project Type</label>
                    <div className="flex items-center space-x-2 bg-white/5 rounded-lg p-3">
                      <Ruler className="w-5 h-5 text-orange-400" />
                      <select className="bg-transparent border-none w-full focus:outline-none text-white">
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="industrial">Industrial</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300">Preferred Date</label>
                    <div className="flex items-center space-x-2 bg-white/5 rounded-lg p-3">
                      <Calendar className="w-5 h-5 text-orange-400" />
                      <input 
                        type="date" 
                        className="bg-transparent border-none w-full focus:outline-none text-white"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-end gap-4">
                  <div className="flex-1 space-y-2">
                    <label className="text-sm text-gray-300">Contact Number</label>
                    <div className="flex items-center space-x-2 bg-white/5 rounded-lg p-3">
                      <Phone className="w-5 h-5 text-orange-400" />
                      <input 
                        type="tel" 
                        placeholder="Your phone number"
                        className="bg-transparent border-none w-full focus:outline-none text-white"
                      />
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg px-6 py-3 hover:from-orange-600 hover:to-red-600 transition-all duration-300">
                    Get Started
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div>
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="w-px h-12 bg-gray-700" />
                <div>
                  <div className="text-3xl font-bold text-white">98%</div>
                  <div className="text-gray-400">Client Satisfaction</div>
                </div>
                <div className="w-px h-12 bg-gray-700" />
                <div>
                  <div className="text-3xl font-bold text-white">25+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="mb-4 text-orange-500">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm text-gray-500">Starting at</span>
                      <p className="text-lg font-bold text-gray-900">{service.price}</p>
                    </div>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
<section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
          Why Choose Us
        </span>
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        We combine expertise with innovation to deliver exceptional results
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          icon: <HardHat className="w-8 h-8" />,
          title: "Expert Team",
          description: "Skilled professionals with years of experience",
          gradient: "from-orange-500 to-red-500"
        },
        {
          icon: <Clock className="w-8 h-8" />,
          title: "On-Time Delivery",
          description: "Projects completed within agreed timelines",
          gradient: "from-red-500 to-orange-500"
        },
        {
          icon: <Shield className="w-8 h-8" />,
          title: "Quality Assured",
          description: "Premium materials and workmanship",
          gradient: "from-orange-500 to-red-500"
        },
        {
          icon: <Users className="w-8 h-8" />,
          title: "Client Focus",
          description: "Transparent communication throughout",
          gradient: "from-red-500 to-orange-500"
        }
      ].map((benefit, index) => (
        <div 
          key={index} 
          className="group relative p-6 rounded-xl bg-gray-800/30 border border-gray-700 hover:bg-gray-800/50 transition-all duration-300"
        >
          <div className={`absolute inset-x-0 -bottom-px h-px bg-gradient-to-r ${benefit.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
          
          <div className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${benefit.gradient} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
            {benefit.icon}
          </div>
          
          <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-400 transition-colors duration-300">
            {benefit.title}
          </h3>
          
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {benefit.description}
          </p>
          
          <div className="mt-4 flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-orange-400 text-sm">Learn More</span>
            <ArrowRight className="w-4 h-4 ml-1 text-orange-400" />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss your vision and make it a reality.
          </p>
          <button className="bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default ConstructionDemo;