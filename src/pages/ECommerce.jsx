import React, { useState } from 'react';
import { ChevronRight, Star, Gift, Truck, Shield, Headphones, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import wirelessHeadphonesImg from '../assets/headphones1.png';
import watchesImg from '../assets/watches.png';
import ecommImg from '../assets/ecomm-hero.png';
import backpackImg from '../assets/backpack.png';
import speakerImg from '../assets/speaker.png';
import electronicsImg from '../assets/electronics.png';
import fashionImg from '../assets/fashion.png';
import homeImg from '../assets/home.png';
import sportsImg from '../assets/sports.png';


const EcommerceHome = () => {
  // Sample featured products data
  const featuredProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 199.99,
      rating: 5.0,
      image: wirelessHeadphonesImg,
      category: "Electronics"
    },
    {
      id: 2,
      name: "Designer Watch",
      price: 299.99,
      rating: 4.8,
      image: watchesImg,
      category: "Accessories"
    },
    {
      id: 3,
      name: "Leather Backpack",
      price: 149.99,
      rating: 4.6,
      image: backpackImg,
      category: "Bags"
    },
    {
      id: 4,
      name: "Smart Speaker",
      price: 179.99,
      rating: 4.7,
      image: speakerImg,
      category: "Electronics"
    }
  ];

  // Sample categories
  const categories = [
    { name: "Electronics", image: electronicsImg },
    { name: "Fashion", image: fashionImg },
    { name: "Home & Living", image: homeImg },
    { name: "Sports", image: sportsImg }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
          className="inline-flex items-center px-4 py-2 bg-black/80 text-white rounded-full hover:bg-black/90 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Demos
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Discover Amazing Deals on Trending Products
              </h1>
              <p className="text-xl text-blue-100">
                Shop the latest collection with up to 50% off on selected items
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Shop Now
              </button>
            </div>
            <div className="hidden md:block">
              <img
                src={ecommImg}
                alt="Hero"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <FeatureCard icon={<Truck />} title="Free Shipping" description="On orders over $50" />
            <FeatureCard icon={<Shield />} title="Secure Payment" description="100% secure checkout" />
            <FeatureCard icon={<Gift />} title="Special Offers" description="Save up to 50% off" />
            <FeatureCard icon={<Headphones />} title="24/7 Support" description="Get help anytime" />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Special Summer Sale!</h2>
            <p className="text-xl text-gray-300">Get an extra 20% off when you sign up for our newsletter</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Sign Up Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
  <div className="flex items-start space-x-3">
    <div className="flex-shrink-0 text-blue-600">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

// Product Card Component
const ProductCard = ({ product }) => (
  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-48 object-cover rounded-t-lg"
    />
    <div className="p-4">
      <span className="text-sm text-gray-500">{product.category}</span>
      <h3 className="text-lg font-semibold text-gray-900 mt-1">{product.name}</h3>
      <div className="flex items-center mt-2">
        <div className="flex items-center text-yellow-400">
          <Star className="h-4 w-4 fill-current" />
          <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
        </div>
        <span className="ml-auto text-lg font-bold text-gray-900">${product.price}</span>
      </div>
      <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
        Add to Cart
      </button>
    </div>
  </div>
);

// Category Card Component
const CategoryCard = ({ category }) => (
  <div className="group relative rounded-lg overflow-hidden">
    <img
      src={category.image}
      alt={category.name}
      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
      <div className="p-4 w-full">
        <h3 className="text-lg font-semibold text-white">{category.name}</h3>
        <span className="text-sm text-white/80 group-hover:text-white flex items-center">
          Shop Now <ChevronRight className="h-4 w-4 ml-1" />
        </span>
      </div>
    </div>
  </div>
);

export default EcommerceHome;