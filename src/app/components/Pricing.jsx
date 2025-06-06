'use client';

import { useState } from 'react';
import { pricingData } from '../db/pricing'; 

const Pricing = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('desktop');
  const [selectedCustomer, setSelectedCustomer] = useState('individuals');

  const platformOptions = [
    { value: 'desktop', label: 'Desktop' },
    { value: 'ipadOS', label: 'iPadOS' }
  ];

  const customerOptions = [
    { value: 'individuals', label: 'Individuals' },
    { value: 'business', label: 'Business' },
    { value: 'education', label: 'Education' }
  ];

  const products = ['all', 'photo', 'publisher', 'designer'];

  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Affinity Software
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional creative tools without the subscription
          </p>

          {/* Platform & Customer Selection */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            {/* Platform Selection */}
            <div className="flex gap-2 p-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              {platformOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedPlatform(option.value)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedPlatform === option.value
                      ? 'bg-white text-purple-900 shadow-lg'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            {/* Customer Selection */}
            <div className="flex gap-2 p-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              {customerOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedCustomer(option.value)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedCustomer === option.value
                      ? 'bg-white text-purple-900 shadow-lg'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((productKey) => {
            const product = pricingData[productKey];
            const pricing = product.pricing[selectedPlatform][selectedCustomer];
            
            return (
              <div
                key={productKey}
                className="group relative bg-white/10 backdrop-blur-lg rounded-3xl border-2 border-white/20 p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-105"
              >
                {/* Popular Badge for All Apps */}
                {productKey === 'all' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {product.subtitle}
                  </p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-6">
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-white">
                      {formatPrice(pricing.price)}
                    </span>
                    {pricing.originalPrice > pricing.price && (
                      <span className="text-lg text-gray-400 line-through ml-2">
                        {formatPrice(pricing.originalPrice)}
                      </span>
                    )}
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 mb-4">
                    Buy Now
                  </button>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Features</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-gray-300 text-sm flex items-center">
                        <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Actions */}
                <div className="space-y-3 border-t border-white/10 pt-4">
                  <button className="w-full text-purple-300 hover:text-white transition-colors duration-300 text-sm">
                    Upgrade from v1
                  </button>
                  <button className="w-full text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    Try now for free
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            One-time purchase • No subscription fees • Lifetime updates included
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;