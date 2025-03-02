// NOTES:
// 1) Updated the CTA buttons in Rapid Development (formerly "See it in action") and Smart Websites (formerly "Explore AI Features") sections
// 2) Now both encourage immediate demo scheduling

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Code, Brain, Award, Zap, Clock, Layout, Bot, ArrowRight, FileText, File,
  MessageSquare, Database, Network, Car, Stethoscope, ShoppingBag, HardHat, Menu, X, BookOpen,
 Target, Sparkles, FileArchive, Lock, Mail  } from 'lucide-react';
 
import logoImage from "../assets/logo.png";
import client1 from "../assets/cne.png";
import client2 from "../assets/wyoming.png";
import client3 from "../assets/asbtdc.png";
import client4 from "../assets/taf.png";
import client5 from "../assets/obsid.png";


const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#expertise", label: "Solutions" },
    { href: "#services", label: "Our Apps" },
    { href: "#demos", label: "Demo Sites" },
    { href: "#contact", label: "Contact" }
  ];
    
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
              {/* Logo and Brand Name */}
              <div className="flex items-center">
                <img 
                  src={logoImage}
                  alt="Motivated Technology Logo" 
                  className="h-10 w-auto mr-3"
                />
                <span className="text-xl font-bold text-black font-mono">Umbralys</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        <div 
          className={`
            md:hidden fixed inset-y-0 right-0 transform w-64 bg-gray-800/95 
            backdrop-blur-lg shadow-lg transition-transform duration-300 ease-in-out z-50
            ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex items-center">
                <img 
                  src={logoImage}
                  alt="Motivated Technology Logo" 
                  className="h-8 w-auto mr-2" 
                />
                <span className="text-lg font-semibold text-white">Menu</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-md text-white hover:text-gray-300 hover:bg-gray-700 focus:outline-none"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col py-4 bg-gray-800/95">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-3 text-white hover:text-gray-300 hover:bg-gray-700 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">Motivated</span> About Technology
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Building intelligent digital solutions that transform businesses through AI integration, modern web development, and rapid deployment.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-400">
              <span className="flex items-center px-4 py-2 bg-gray-800/50 rounded-full text-sm">
                <Brain className="w-4 h-4 mr-2" /> AI Solutions
              </span>
              <span className="flex items-center px-4 py-2 bg-gray-800/50 rounded-full text-sm">
                <Layout className="w-4 h-4 mr-2" /> Modern Web Apps
              </span>
              <span className="flex items-center px-4 py-2 bg-gray-800/50 rounded-full text-sm">
                <Zap className="w-4 h-4 mr-2" /> Rapid Development
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section1 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Innovative Solutions for Modern Businesses</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <Layout className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 mb-2">Modern Web Apps</h3>
                <p className="text-gray-600 leading-relaxed">
                  Responsive, intuitive, and powerful web applications built with the latest technologies for optimal performance.
                </p>
              </div>
            </div>
            
            <div className="p-6 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <Brain className="w-12 h-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-300 mb-2">AI Solutions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Custom AI integrations that transform your business operations through intelligent automation and data insights.
                </p>
              </div>
            </div>
            
            <div className="p-6 rounded-lg bg-gradient-to-br from-green-50 to-green-100 border border-green-200 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <Zap className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300 mb-2">Rapid Development</h3>
                <p className="text-gray-600 leading-relaxed">
                  Accelerated project delivery using AI-powered development techniques that save time without sacrificing quality.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-center mb-6">Why Choose Umbralys Technology?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Award className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Certified Expertise</h4>
                  <p className="text-gray-600">Azure AI certified professional with experience delivering scalable solutions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Target className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Business-Focused Approach</h4>
                  <p className="text-gray-600">Solutions tailored to meet your specific business goals and objectives</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Sparkles className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Innovative Technology</h4>
                  <p className="text-gray-600">Cutting-edge tools and frameworks that keep you ahead of the competition</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Rapid Time-to-Market</h4>
                  <p className="text-gray-600">Efficient development processes that get your solutions deployed faster</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <a
                href="https://example.com/smartinvoice"
                className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Book a Free Strategy Call
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-blue-900/70"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Expert Solutions for Today's Digital Demands</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              In a world where technology evolves daily, staying ahead isn't optional—it's essential. 
              Our expertise transforms digital challenges into competitive advantages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:border-blue-400/30 transition-all duration-300 shadow-lg hover:shadow-blue-500/10">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-500/20 rounded-lg mr-4">
                  <Brain className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">AI & Machine Learning</h3>
              </div>
              
              <p className="text-gray-300 mb-8">
                AI adoption is expected to grow by 37% in the next two years. Don't get left behind in the race for intelligent automation.
                Our expertise puts the power of Azure AI services and custom machine learning solutions at your fingertips.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Sparkles className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-semibold text-white">Azure AI Services</h4>
                    <p className="text-gray-300">Enterprise-grade AI capabilities without the enterprise-level complexity</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MessageSquare className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-semibold text-white">Natural Language Processing</h4>
                    <p className="text-gray-300">Transform how your business communicates with intelligent text and voice solutions</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Bot className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-semibold text-white">Custom AI Solutions</h4>
                    <p className="text-gray-300">Tailored intelligent systems that solve your specific business challenges</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <File className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-semibold text-white">Document Intelligence</h4>
                    <p className="text-gray-300">Leverage natural language processing to analyze, extract, and categorize information from documents</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:border-blue-400/30 transition-all duration-300 shadow-lg hover:shadow-blue-500/10">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-500/20 rounded-lg mr-4">
                  <Layout className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Web Development</h3>
              </div>
              
              <p className="text-gray-300 mb-8">
                83% of users expect websites to load in 3 seconds or less, and 53% will abandon sites that take longer. 
                Our web development delivers the speed, functionality, and experience your customers demand.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Zap className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-semibold text-white">Smart Websites</h4>
                    <p className="text-gray-300">AI-powered sites that adapt to user behavior and deliver personalized experiences</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Monitor className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-semibold text-white">Responsive Design</h4>
                    <p className="text-gray-300">Flawless experiences across all devices with performance-optimized interfaces</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <ShoppingBag className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-semibold text-white">E-Commerce</h4>
                    <p className="text-gray-300">Conversion-focused online stores with seamless payment and inventory management</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Database className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-semibold text-white">Secure Cloud Solutions</h4>
                    <p className="text-gray-300">Enterprise-grade security and scalability with Azure cloud integration</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-500/20 to-blue-700/20 rounded-xl p-8 border border-blue-500/30 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-bold text-white mb-2">Ready to leverage our expertise?</h3>
                <p className="text-gray-200">
                  Transform your digital presence with solutions built for tomorrow's challenges.
                </p>
              </div>
              <a 
                href="https://example.com/smartinvoice" 
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300 whitespace-nowrap"
              >
                Schedule Your Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* App Store Section */}
      <section id="services" className="py-20 bg-white relative">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex flex-col items-center justify-center">
          <Lock className="w-16 h-16 text-white mb-4" />
          <h2 className="text-white text-3xl font-bold">Coming Soon</h2>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Our App Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our suite of web applications designed to solve real business challenges
            </p>
          </div>
          
          {/* App Store Preview */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 shadow-lg mb-10">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/4"></div>
            </div>
            
            <div className="p-8 md:p-12 relative">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Left side - App Icon */}
                <div className="flex-shrink-0">
                  <div className="relative w-24 h-24 md:w-32 md:h-32">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg"></div>
                    <div className="absolute inset-[2px] bg-white rounded-xl flex items-center justify-center">
                      <ShoppingBag className="w-12 h-12 md:w-16 md:h-16 text-blue-500" />
                    </div>
                  </div>
                </div>
                
                {/* Right side - App Info */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-baseline mb-4 md:space-x-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Apps</h3>
                    <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium hidden md:inline-block">
                      New Collection
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 max-w-lg">
                    Get access to our exclusive collection of business applications designed to streamline operations, 
                    boost productivity, and drive innovation in your organization.
                  </p>
                  
                  <a 
                    href="/app-store" 
                    className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                  >
                    <span className="mr-2">Visit App Store</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* App Preview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* App 1 */}
            <div className="app-card group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
              <div className="app-icon-container p-4 bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-sm">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">Npowerment Hub</h3>
                  <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-xs">
                    eLearning
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  Generative AI learning platform. Master the fundamentals of ChatGPT and advanced data analysis with Anthropic.
                </p>
                <div className="border-t border-gray-100 pt-3 mt-auto">
                  <a href="https://example.com/smartinvoice" className="text-blue-500 font-medium text-sm hover:text-blue-600 transition-colors flex items-center">
                    <span>Visit this app</span>
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* App 2 */}
            <div className="app-card group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
              <div className="app-icon-container p-4 bg-gradient-to-br from-green-50 to-green-100">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-sm">
                  <FileArchive className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">AI Assistant</h3>
                  <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-xs">
                    Productivity
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  Intelligent AI assistant for automating repetitive business tasks.
                </p>
                <div className="border-t border-gray-100 pt-3 mt-auto">
                  <a href="https://example.com/smartinvoice" className="text-blue-500 font-medium text-sm hover:text-blue-600 transition-colors flex items-center">
                    <span>Visit this app</span>
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* App 3 */}
            <div className="app-card group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
              <div className="app-icon-container p-4 bg-gradient-to-br from-purple-50 to-purple-100">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center shadow-sm">
                  <Layout className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">SiteBuilder X</h3>
                  <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-xs">
                    Development
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  No-code website builder with AI-powered design suggestions.
                </p>
                <div className="border-t border-gray-100 pt-3 mt-auto">
                  <a href="https://example.com/smartinvoice" className="text-blue-500 font-medium text-sm hover:text-blue-600 transition-colors flex items-center">
                    <span>Visit this app</span>
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-12 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-1.5xl font-bold text-white mb-8 text-center">Organizations we've collaborated with</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 pb-2">
            <div className="client-logo group transition-transform duration-300 hover:scale-105">
              <img
                src={client1}
                alt="Client 1"
                className="h-12 md:h-16 object-contain filter grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
              />
            </div>
            
            <div className="client-logo group transition-transform duration-300 hover:scale-105">
              <img
                src={client2}
                alt="Client 2"
                className="h-12 md:h-16 object-contain filter grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
              />
            </div>
            
            <div className="client-logo group transition-transform duration-300 hover:scale-105">
              <img
                src={client3}
                alt="Client 3"
                className="h-12 md:h-16 object-contain filter grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
              />
            </div>

            <div className="client-logo group transition-transform duration-300 hover:scale-105">
              <img
                src={client4}
                alt="Client 4"
                className="h-12 md:h-16 object-contain filter grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
              />
            </div>
            
            <div className="client-logo group transition-transform duration-300 hover:scale-105">
              <img
                src={client5}
                alt="Client 5"
                className="h-12 md:h-16 object-contain filter grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
              />
            </div>
          </div>
          
          <div className="mt-10 w-full max-w-lg mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Rapid Development Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white relative">
        <div className="lg:hidden absolute inset-0 opacity-20 pointer-events-none">
          <div className="relative h-full rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-black p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_100%)]" />
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64">
              <div className="relative bg-gray-800 rounded-lg p-4 shadow-2xl border border-blue-500/20">
                <div className="flex space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-blue-500/20 rounded w-3/4 animate-pulse" />
                  <div className="h-2 bg-blue-500/20 rounded w-1/2 animate-pulse delay-100" />
                  <div className="h-2 bg-blue-500/20 rounded w-2/3 animate-pulse delay-200" />
                </div>
              </div>
            </div>

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
          </div>
        </div> 
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 relative z-10">  
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                  Rapid Development
                </span>
              </h2>
              
              <p className="text-xl text-gray-300">
                Experience the future of web development with AI-powered rapid mock ups. 
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

              {/*"Book a Rapid Demo" */}
              <a 
                href="https://example.com"
                rel="noopener noreferrer"  
                className="group flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition-all duration-300"
                style={{ width: 'fit-content' }}
              >
                <span>Book a Rapid Demo</span>
                <Sparkles className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>

            <div className="relative h-[600px] rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-black p-8 hidden lg:block">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_100%)]" />
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64">
                <div className="relative bg-gray-800 rounded-lg p-4 shadow-2xl border border-blue-500/20">
                  <div className="flex space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-blue-500/20 rounded w-3/4 animate-pulse" />
                    <div className="h-2 bg-blue-500/20 rounded w-1/2 animate-pulse delay-100" />
                    <div className="h-2 bg-blue-500/20 rounded w-2/3 animate-pulse delay-200" />
                  </div>
                </div>
              </div>

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
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white relative">
        {/* Mobile background visualization - appears behind content on mobile */}
        <div className="lg:hidden absolute inset-0 opacity-20 pointer-events-none">
          <div className="relative h-full rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-black p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.1)_0%,transparent_100%)]" />
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Brain className="w-24 h-24 text-purple-500 animate-pulse" />
            </div>

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
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 relative z-10">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">
                  Smart Websites
                </span>
              </h2>
              
              <p className="text-xl text-gray-300">
              Transform simple websites and landing pages into intelligent, AI-powered platforms that understand, automate, and adapt to user needs seamlessly.
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
                    className={`transform transition-all duration-500 ${
                      activeStep === index 
                        ? 'scale-105 bg-gradient-to-r from-purple-500/20 to-transparent'
                        : 'scale-100'
                    } p-4 rounded-lg`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-full ${
                        activeStep === index ? 'bg-purple-500' : 'bg-gray-700'
                      }`}>
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

              <a 
                href="https://example.com"  
                className="group inline-flex items-center space-x-2 bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-lg transition-all duration-300"
                style={{ width: 'fit-content' }}
              >
                <span>Schedule an AI Demo</span>
                <Sparkles className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>

            <div className="relative h-[600px] rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-black p-8 hidden lg:block">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.1)_0%,transparent_100%)]" />
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Brain className="w-24 h-24 text-purple-500 animate-pulse" />
              </div>

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
      <section id="demos" className="py-16 bg-gradient-to-b from-gray-900 to-black text-white">
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
      Looking to enhance your organization's AI capabilities or do you have additional questions? Let's discuss how we can work together.
    </p>
    <div className="flex flex-col items-center space-y-8">
      <ContactButton text="Schedule a Free Consultation" 
        href="https://example.com" />
      
      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mt-8">
        <a href="https://facebook.com" className="text-gray-600 hover:text-blue-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
          <span className="sr-only">Facebook</span>
        </a>
        <a href="https://twitter.com" className="text-gray-600 hover:text-blue-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
          </svg>
          <span className="sr-only">Twitter</span>
        </a>
        <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-700 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          <span className="sr-only">LinkedIn</span>
        </a>
        <a href="https://github.com/antwongfm" className="text-gray-600 hover:text-gray-900 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          <span className="sr-only">GitHub</span>
        </a>
        <a href="mailto:contact@umbralys.com" className="text-gray-600 hover:text-red-500 transition-colors">
          <Mail className="w-6 h-6" />
          <span className="sr-only">Email</span>
        </a>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Umbralys Technology. All rights reserved.
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

export default Home;

