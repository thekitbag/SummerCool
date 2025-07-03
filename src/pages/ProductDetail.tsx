import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { airconUnits } from '../data/products';
import { Thermometer, Zap, Volume2, Calendar, ArrowLeft, ShoppingCart } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [rentalDays, setRentalDays] = useState(7);

  const unit = airconUnits.find(u => u.id === id);

  if (!unit) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-700"
          >
            Return to homepage
          </button>
        </div>
      </div>
    );
  }

  const calculatePrice = () => {
    if (rentalDays >= 7) {
      const weeks = Math.floor(rentalDays / 7);
      const remainingDays = rentalDays % 7;
      return (weeks * unit.weeklyRate) + (remainingDays * unit.dailyRate);
    }
    return rentalDays * unit.dailyRate;
  };

  const handleHireNow = () => {
    navigate('/checkout', { state: { unit, rentalDays, totalPrice: calculatePrice() } });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to all units</span>
        </button>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="p-8">
              <img
                src={unit.image}
                alt={unit.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>

            <div className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <h1 className="text-3xl font-bold text-gray-900">{unit.name}</h1>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {unit.btu.toLocaleString()} BTU
                </span>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">Model: {unit.model}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-2 text-gray-700">
                  <Thermometer className="h-5 w-5 text-blue-600" />
                  <span>Cooling: {unit.specifications.coolingCapacity}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Zap className="h-5 w-5 text-yellow-600" />
                  <span>Power: {unit.specifications.powerConsumption}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Volume2 className="h-5 w-5 text-green-600" />
                  <span>Noise: {unit.specifications.noiseLevel}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Calendar className="h-5 w-5 text-purple-600" />
                  <span>Running cost: £{unit.runningCostPerHour}/hr</span>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Rental Period & Pricing</h3>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rental Duration: {rentalDays} days
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={rentalDays}
                    onChange={(e) => setRentalDays(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 day</span>
                    <span>30 days</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-600">
                    {rentalDays >= 7 && (
                      <div>
                        {Math.floor(rentalDays / 7)} week{Math.floor(rentalDays / 7) > 1 ? 's' : ''} 
                        {rentalDays % 7 > 0 && `, ${rentalDays % 7} day${rentalDays % 7 > 1 ? 's' : ''}`}
                      </div>
                    )}
                    <div>Estimated running cost: £{(unit.runningCostPerHour * 8 * rentalDays).toFixed(2)}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gray-900">
                      £{calculatePrice().toFixed(2)}
                    </div>
                    <div className="text-sm text-gray-600">Total rental cost</div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleHireNow}
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 text-lg"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Hire Now - Free Delivery</span>
              </button>
            </div>
          </div>

          <div className="border-t border-gray-200 p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {unit.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Specifications</h3>
                <dl className="space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Dimensions</dt>
                    <dd className="font-medium">{unit.specifications.dimensions}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Weight</dt>
                    <dd className="font-medium">{unit.specifications.weight}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Power Consumption</dt>
                    <dd className="font-medium">{unit.specifications.powerConsumption}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Cooling Capacity</dt>
                    <dd className="font-medium">{unit.specifications.coolingCapacity}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Noise Level</dt>
                    <dd className="font-medium">{unit.specifications.noiseLevel}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;