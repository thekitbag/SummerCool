import React from 'react';
import { Link } from 'react-router-dom';
import { AirconUnit } from '../types';
import { Thermometer, Zap, Clock, Snowflake } from 'lucide-react';

interface ProductCardProps {
  unit: AirconUnit;
}

const ProductCard: React.FC<ProductCardProps> = ({ unit }) => {
  return (
    <div className="frost-glass rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden frost-border cool-hover ice-crystal">
      <div className="relative overflow-hidden">
        <img
          src={unit.image}
          alt={unit.name}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 right-4 frost-glass text-blue-800 px-3 py-1 rounded-full text-sm font-semibold cool-glow">
          ❄️ {unit.btu.toLocaleString()} BTU
        </div>
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold cool-glow">
          SALE!
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-2">
          <Snowflake className="h-5 w-5 text-blue-500" />
          <h3 className="text-xl font-bold text-gray-900">{unit.name}</h3>
        </div>
        <p className="text-sm text-gray-600 mb-4">Arctic Model: {unit.model}</p>
        
        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center space-x-1 frost-glass px-2 py-1 rounded-full">
            <Thermometer className="h-4 w-4 text-blue-500" />
            <span>{unit.btu.toLocaleString()} BTU</span>
          </div>
          <div className="flex items-center space-x-1 frost-glass px-2 py-1 rounded-full">
            <Zap className="h-4 w-4 text-cyan-500" />
            <span>{unit.specifications.powerConsumption}</span>
          </div>
          <div className="flex items-center space-x-1 frost-glass px-2 py-1 rounded-full">
            <Clock className="h-4 w-4 text-blue-400" />
            <span>£{unit.runningCostPerHour}/hr</span>
          </div>
        </div>

        <div className="border-t border-blue-100 pt-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="text-lg text-gray-500 line-through">
                Original: £{(unit.dailyRate * 1.5).toFixed(2)}
                <span className="text-sm font-normal text-gray-500">/day</span>
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Sale: £{unit.dailyRate.toFixed(2)}
                <span className="text-sm font-normal text-gray-600">/day</span>
              </div>
              <div className="text-sm text-gray-600">
                £{unit.weeklyRate}/week arctic bliss
              </div>
            </div>
          </div>
          
          <Link
            to={`/product/${unit.id}`}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 cool-glow shimmer"
          >
            <Snowflake className="h-4 w-4" />
            <span>Freeze Your Space</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;