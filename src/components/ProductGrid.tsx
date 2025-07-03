import React, { useState } from 'react';
import { airconUnits } from '../data/products';
import ProductCard from './ProductCard';
import ProductFilter from './ProductFilter';
import { Snowflake } from 'lucide-react';

const ProductGrid: React.FC = () => {
  const [selectedBtu, setSelectedBtu] = useState<number | null>(null);

  const filteredUnits = selectedBtu
    ? airconUnits.filter(unit => unit.btu === selectedBtu)
    : airconUnits;

  return (
    <section id="products" className="py-16 ice-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Snowflake className="h-12 w-12 text-blue-600 ice-float cool-glow" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
              Arctic Arsenal
            </span>
            <span className="block text-gray-800">Choose Your Cooling Weapon</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Professional-grade arctic units ready for daily hire with free next day delivery. 
            Each one colder than a polar bear's breath. 🐻‍❄️
          </p>
        </div>

        <ProductFilter
          selectedBtu={selectedBtu}
          onBtuChange={setSelectedBtu}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredUnits.map((unit) => (
            <ProductCard key={unit.id} unit={unit} />
          ))}
        </div>

        {filteredUnits.length === 0 && (
          <div className="text-center py-12">
            <div className="frost-glass rounded-lg p-8 max-w-md mx-auto">
              <Snowflake className="h-16 w-16 text-blue-400 mx-auto mb-4 ice-float" />
              <p className="text-gray-600 text-lg">No arctic units found matching your criteria.</p>
              <p className="text-sm text-gray-500 mt-2">Try adjusting your BTU filter to find your perfect cooling companion.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;