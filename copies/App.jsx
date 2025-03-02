import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Mic, Code, Brain, Award, Sparkles, Zap, Clock, Layout, Bot, ArrowRight, FileText, MessageSquare, Database, Network, Car, Stethoscope, ShoppingBag, HardHat } from 'lucide-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import profileImage from './assets/profile.jpeg';
import client1 from './assets/cne.png';
import client2 from './assets/wyoming.png';
import client3 from './assets/asbtdc.png';


const App = () => {
  const clientSliderSettings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  
  }

  // Add the new state and effect here, after clientSliderSettings
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);


    return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-black">Antwoyne Gray</span>
            </div>
            <div className="flex space-x-8 items-center">
              <a href="#expertise" className="text-gray-700 hover:text-gray-900">Expertise</a>
              <a href="#services" className="text-gray-700 hover:text-gray-900">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">Motivated</span> About Technology
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Empowering people through AI innovation, technical expertise, and knowledge sharing
            </p>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">Nice to Meet You...</h2>
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-16">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={profileImage}
                  alt="Profile Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                I'm Antwoyne Gray, a self-taught Web Developer and Azure AI specialist. I'm here to get you motivated about technology, by turning complex topics into easy-to-understand language.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Badge icon={<Award className="w-4 h-4" />} text="Azure AI Certified" />
                <Badge icon={<Code className="w-4 h-4" />} text="Web Developer" />
                <Badge icon={<Brain className="w-4 h-4" />} text="Prompt Engineer" />
              </div>
              <div className="mt-8 mb-8">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 mb-2">Handling Tech Pain Points</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Are you sick of feeling overwhelmed by how fast technology can change? Do you struggle to make sense of the latest advancements in AI, cloud computing, and cybersecurity? You're not alone.
                </p>
              </div>
              <div className="mt-8 mb-8">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 mb-2">Simplifying Complex Tech</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With my expertise in Azure Artificial Intelligence and Web Development, I can help you cut through the noise and get to what matters.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 mb-2">Certified Expertise</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I've earned multiple Microsoft certifications, including Azure AI Language and Process Automation, and I'm passionate about sharing my knowledge with others.
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">This is what I'm good at</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <ExpertiseCard
              title="AI & Machine Learning"
              items={["Azure AI Services", "Natural Language Processing", "Custom AI Solutions", "Prompt Engineering", "LLM Integration"]}
            />
            <ExpertiseCard
              title="Web Development"
              items={["Smart Websites", "Responsive Design", "E-Commerce", "Secure Database + Storage", "Cloud Integration"]}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">This is what I do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Monitor className="w-8 h-8" />}
              title="AI Workshops"
              description="Interactive training sessions on AI implementation and prompt engineering"
            />
            <ServiceCard 
              icon={<Mic className="w-8 h-8" />}
              title="Speaking Engagements"
              description="Engaging presentations on AI innovation, best practices, and digital transformation"
            />
            <ServiceCard 
              icon={<Code className="w-8 h-8" />}
              title="Web Development"
              description="Building responsive, modern web applications with seamless cloud integration"
            />
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Companies I've worked with</h2>
        <div className="mb-12">
          <Slider {...clientSliderSettings}>
            <div className="px-4">
              <div className="h-32 bg-transparent rounded-lg flex items-center justify-center p-6">
                <img
                  src={client1}
                  alt="Client 1"
                  className="h-32 bg-transparent rounded-lg flex items-center justify-center p-6 shadow-lg"
                />
              </div>
            </div>
            <div className="px-4">
              <div className="h-32 bg-transparent rounded-lg flex items-center justify-center p-6">
                <img
                  src={client2}
                  alt="Client 2"
                  className="h-32 bg-transparent rounded-lg flex items-center justify-center p-6 shadow-lg"
                />
              </div>
            </div>
            <div className="px-4">
              <div className="h-32 bg-transparent rounded-lg flex items-center justify-center p-6">
                <img
                  src={client3}
                  alt="Client 3"
                  className="h-32 bg-transparent rounded-lg flex items-center justify-center p-6 shadow-lg"
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>

    {/* Rapid Development Section */}
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                Rapid Development
              </span>
            </h2>
            
            <p className="text-xl text-gray-300">
              Experience the future of web development with AI-powered rapid prototyping. 
              Transform concepts into working websites in minutes, not days.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <Bot className="w-8 h-8" />,
                  title: "AI Agent Activation",
                  description: "Deploy AI agents to analyze requirements and generate initial concepts"
                },
                {
                  icon: <Layout className="w-8 h-8" />,
                  title: "Component Generation",
                  description: "Rapidly create and test multiple component variations"
                },
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: "Quick Iteration",
                  description: "Refine designs and functionality in real-time"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Instant Deployment",
                  description: "Deploy and test working prototypes within minutes"
                }
              ].map((step, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-500 ${
                    activeStep === index 
                      ? 'scale-105 bg-gradient-to-r from-blue-500/20 to-transparent'
                      : 'scale-100'
                  } p-4 rounded-lg`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-full ${
                      activeStep === index ? 'bg-blue-500' : 'bg-gray-700'
                    }`}>
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="group flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition-all duration-300">
              <span>See it in action</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column - Animated Icons */}
          <div className="relative h-[600px] rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-black p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_100%)]" />
            
            {/* Central Code Window */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64">
              <div className="relative bg-gray-800 rounded-lg p-4 shadow-2xl border border-blue-500/20">
                {/* Window Controls */}
                <div className="flex space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                {/* Code Lines */}
                <div className="space-y-2">
                  <div className="h-2 bg-blue-500/20 rounded w-3/4 animate-pulse" />
                  <div className="h-2 bg-blue-500/20 rounded w-1/2 animate-pulse delay-100" />
                  <div className="h-2 bg-blue-500/20 rounded w-2/3 animate-pulse delay-200" />
                </div>
              </div>
            </div>

            {/* Floating Icons */}
            <div className="absolute top-12 left-12 animate-bounce">
              <Bot className="w-12 h-12 text-blue-500" />
            </div>
            
            <div className="absolute top-12 right-12 animate-pulse">
              <Code className="w-12 h-12 text-blue-400" />
            </div>
            
            <div className="absolute bottom-12 left-12 animate-pulse delay-300">
              <Layout className="w-12 h-12 text-blue-300" />
            </div>
            
            <div className="absolute bottom-12 right-12 animate-bounce delay-200">
              <Zap className="w-12 h-12 text-blue-500" />
            </div>

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
              <line 
                x1="20%" y1="20%" 
                x2="50%" y2="50%" 
                stroke="rgb(59,130,246)" 
                strokeWidth="2" 
                strokeDasharray="4"
                className="animate-pulse"
                strokeOpacity="0.2"
              />
              <line 
                x1="80%" y1="20%" 
                x2="50%" y2="50%" 
                stroke="rgb(59,130,246)" 
                strokeWidth="2" 
                strokeDasharray="4"
                className="animate-pulse delay-100"
                strokeOpacity="0.2"
              />
              <line 
                x1="20%" y1="80%" 
                x2="50%" y2="50%" 
                stroke="rgb(59,130,246)" 
                strokeWidth="2" 
                strokeDasharray="4"
                className="animate-pulse delay-200"
                strokeOpacity="0.2"
              />
              <line 
                x1="80%" y1="80%" 
                x2="50%" y2="50%" 
                stroke="rgb(59,130,246)" 
                strokeWidth="2" 
                strokeDasharray="4"
                className="animate-pulse delay-300"
                strokeOpacity="0.2"
              />
            </svg>

            {/* Floating Particles */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-500/20 rounded-full animate-pulse"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

{/* Smart Websites Section */}
<section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Column - Text Content */}
      <div className="space-y-8">
        <h2 className="text-4xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">
            Smart Websites
          </span>
        </h2>
        
        <p className="text-xl text-gray-300">
          Transform static sites into intelligent platforms that understand, learn, and adapt to user needs
          with advanced AI integration.
        </p>

        <div className="space-y-6">
          {[
            {
              icon: <MessageSquare className="w-8 h-8" />,
              title: "Natural Language Processing",
              description: "Implement intelligent chat interfaces and content analysis powered by advanced NLP models"
            },
            {
              icon: <FileText className="w-8 h-8" />,
              title: "Document Intelligence",
              description: "Automatically process, analyze, and extract insights from documents and user content"
            },
            {
              icon: <Sparkles className="w-8 h-8" />,
              title: "Generative AI",
              description: "Create dynamic, personalized content and experiences using state-of-the-art AI models"
            },
            {
              icon: <Network className="w-8 h-8" />,
              title: "Adaptive Learning",
              description: "Continuously improve user experience through machine learning and behavior analysis"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className={`transform transition-all duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-transparent p-4 rounded-lg`}
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-full bg-purple-500/20">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="group flex items-center space-x-2 bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-lg transition-all duration-300">
          <span>Explore AI Features</span>
          <Sparkles className="w-4 h-4 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Right Column - Interactive Visual */}
      <div className="relative h-[600px] rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-black p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.1)_0%,transparent_100%)]" />
        
        {/* Central Brain Icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Brain className="w-24 h-24 text-purple-500 animate-pulse" />
        </div>

        {/* Floating Icons */}
        <div className="absolute top-12 left-12 animate-bounce">
          <MessageSquare className="w-12 h-12 text-purple-400" />
        </div>
        
        <div className="absolute top-12 right-12 animate-pulse">
          <FileText className="w-12 h-12 text-purple-400" />
        </div>
        
        <div className="absolute bottom-12 left-12 animate-pulse delay-300">
          <Database className="w-12 h-12 text-purple-300" />
        </div>
        
        <div className="absolute bottom-12 right-12 animate-bounce delay-200">
          <Sparkles className="w-12 h-12 text-purple-500" />
        </div>

        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
          <line 
            x1="20%" y1="20%" 
            x2="50%" y2="50%" 
            stroke="rgb(147,51,234)" 
            strokeWidth="2" 
            strokeDasharray="4"
            className="animate-pulse"
            strokeOpacity="0.2"
          />
          <line 
            x1="80%" y1="20%" 
            x2="50%" y2="50%" 
            stroke="rgb(147,51,234)" 
            strokeWidth="2" 
            strokeDasharray="4"
            className="animate-pulse delay-100"
            strokeOpacity="0.2"
          />
          <line 
            x1="20%" y1="80%" 
            x2="50%" y2="50%" 
            stroke="rgb(147,51,234)" 
            strokeWidth="2" 
            strokeDasharray="4"
            className="animate-pulse delay-200"
            strokeOpacity="0.2"
          />
          <line 
            x1="80%" y1="80%" 
            x2="50%" y2="50%" 
            stroke="rgb(147,51,234)" 
            strokeWidth="2" 
            strokeDasharray="4"
            className="animate-pulse delay-300"
            strokeOpacity="0.2"
          />
        </svg>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-500/20 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

{/* Demo Sites Section */}
<section className="py-16 bg-gradient-to-b from-gray-900 to-black text-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          Demo Sites
        </span>
      </h2>
      <p className="text-gray-400 mt-2">
        Explore our collection of sample websites
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          title: "Luxury Car Rentals",
          icon: <Car className="w-6 h-6" />,
          description: "Premium vehicle rental experience",
          gradient: "from-amber-500 to-yellow-500",
          route: "/demos/luxury"
        },
        {
          title: "Medical Practice",
          icon: <Stethoscope className="w-6 h-6" />,
          description: "Modern healthcare platform",
          gradient: "from-blue-500 to-cyan-500",
          route: "/demos/medical"
        },
        {
          title: "E-Commerce Store",
          icon: <ShoppingBag className="w-6 h-6" />,
          description: "Advanced shopping experience",
          gradient: "from-green-500 to-emerald-500",
          route: "/demos/ecommerce"
        },
        {
          title: "Construction Services",
          icon: <HardHat className="w-6 h-6" />,
          description: "Professional building solutions",
          gradient: "from-orange-500 to-red-500",
          route: "/demos/construction"
        }
      ].map((site, index) => (
        <Link
          key={index}
          to={site.route}
          className="group relative overflow-hidden rounded-xl bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300"
        >
          <div className="p-6">
            <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${site.gradient} mb-4 
              transform group-hover:scale-110 transition-transform duration-300`}>
              {site.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{site.title}</h3>
            <p className="text-sm text-gray-400">{site.description}</p>
          </div>
          <div className="absolute inset-0 border border-transparent group-hover:border-white/10 rounded-xl transition-all duration-300" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${site.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </Link>
      ))}
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">Let's Connect</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Looking to enhance your organization's AI capabilities or need a speaker for your next tech event? Let's discuss how we can work together.
          </p>
          <div className="flex justify-center space-x-8">
            <ContactButton text="Schedule a Consultation" href="#" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Antwoyne Gray. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

// Component for expertise cards
const ExpertiseCard = ({ title, items }) => (
  <div className="p-[2px] rounded-lg bg-gradient-to-r from-blue-500 to-yellow-500 hover:shadow-xl transition-all duration-300">
    <div className="p-6 rounded-lg border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-gray-600" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// Component for service cards
const ServiceCard = ({ icon, title, description }) => (
  <div className="p-[2px] rounded-lg bg-gradient-to-r from-blue-500 to-yellow-500 group hover:shadow-xl transition-all duration-300">
    <div className="p-6 rounded-lg bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200">
      <div className="text-gray-900 mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

// Component for badges
const Badge = ({ icon, text }) => (
  <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800 text-white text-sm">
    {icon}
    <span className="ml-2">{text}</span>
  </div>
);

// Component for contact button
const ContactButton = ({ text, href }) => (
  <a
    href={href}
    className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
  >
    {text}
  </a>
);

export default App;