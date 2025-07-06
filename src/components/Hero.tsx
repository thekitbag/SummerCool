import React from 'react';
import { Truck, Clock, Calendar, Thermometer, Snowflake } from 'lucide-react';

interface HeroProps {
  location?: string; 
}

const Hero: React.FC<HeroProps> = ({ location = 'Southampton' }) => { 
  return (
    <div className="arctic-gradient py-16 relative overflow-hidden">
      {/* Floating ice crystals */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-blue-300 text-2xl ice-float">❄</div>
        <div className="absolute top-32 right-20 text-blue-400 text-xl ice-float" style={{animationDelay: '1s'}}>❅</div>
        <div className="absolute top-40 left-1/3 text-blue-200 text-3xl ice-float" style={{animationDelay: '2s'}}>❄</div>
        <div className="absolute bottom-40 right-10 text-blue-300 text-xl ice-float" style={{animationDelay: '0.5s'}}>❅</div>
        <div className="absolute bottom-20 left-20 text-blue-400 text-2xl ice-float" style={{animationDelay: '1.5s'}}>❄</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="frost-glass rounded-full p-4 cool-glow">
              <Snowflake className="h-16 w-16 text-blue-600 ice-float" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
            Air Conditioning Hire with Next Day Delivery in {location}
            </span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Transform your sweltering space into an arctic oasis. Professional-grade cooling 
            delivered faster than ice melts in the sun. ❄️
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="frost-glass rounded-xl p-6 cool-hover ice-crystal">
              <Calendar className="h-12 w-12 text-blue-600 mb-4 mx-auto cool-glow" />
              <h3 className="font-semibold text-gray-900 mb-2">Daily Arctic Hire</h3>
              <p className="text-sm text-gray-700">Rent by the day - perfect for beating short heatwaves</p>
            </div>
            <div className="frost-glass rounded-xl p-6 cool-hover ice-crystal">
              <Truck className="h-12 w-12 text-cyan-600 mb-4 mx-auto cool-glow" />
              <h3 className="font-semibold text-gray-900 mb-2">Free Ice-Cold Delivery</h3>
              <p className="text-sm text-gray-700">Zero hidden costs - delivery colder than your expectations</p>
            </div>
            <div className="frost-glass rounded-xl p-6 cool-hover ice-crystal">
              <Clock className="h-12 w-12 text-blue-500 mb-4 mx-auto cool-glow" />
              <h3 className="font-semibold text-gray-900 mb-2">Next Day Freeze</h3>
              <p className="text-sm text-gray-700">Order today, chill tomorrow - faster than overnight ice</p>
            </div>
          </div>

          <div className="frost-glass border border-red-200 rounded-lg p-4 mb-8 max-w-2xl mx-auto cooling-wave">
            <div className="flex items-center justify-center space-x-2 text-red-800">
              <Thermometer className="h-5 w-5" />
              <span className="font-semibold">🔥 Heatwave Alert: Arctic Relief in High Demand</span>
            </div>
            <p className="text-sm text-red-700 mt-1">
              Don't melt away - secure your personal arctic zone before the mercury rises
            </p>
          </div>

          <a
            href="#products"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cool-glow shimmer"
          >
            <Snowflake className="h-5 w-5 mr-2" />
            Get Instant Arctic Relief
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;