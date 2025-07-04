import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <ProductGrid />
    </div>
  );
};

export default Home;