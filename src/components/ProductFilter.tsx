import React from 'react';
import { btuOptions } from '../data/products';
import { Snowflake } from 'lucide-react';

interface ProductFilterProps {
  selectedBtu: number | null;
  onBtuChange: (btu: number | null) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ selectedBtu, onBtuChange }) => {
  return (
    <div className="frost-glass rounded-lg shadow-lg p-6 mb-8 frost-border">
      <div className="flex items-center space-x-2 mb-4">
        <Snowflake className="h-6 w-6 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">Filter by Arctic Power (BTU)</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => onBtuChange(null)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 cool-hover ${
            selectedBtu === null
              ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white cool-glow'
              : 'frost-glass text-gray-700 hover:text-blue-600'
          }`}
        >
          ❄️ All Arctic Units
        </button>
        {btuOptions.map((btu) => (
          <button
            key={btu}
            onClick={() => onBtuChange(btu)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 cool-hover ${
              selectedBtu === btu
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white cool-glow'
                : 'frost-glass text-gray-700 hover:text-blue-600'
            }`}
          >
            🧊 {btu.toLocaleString()} BTU
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;