import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import LocalContent from '../components/LocalContent'; 
import locations from '../data/locations.json'; 


const Home: React.FC = () => {
  const { locationId } = useParams<{ locationId: string }>();

  const locationData = locations.find(loc => loc.id === locationId);

  const pageTitle = locationData?.seoTitle || 'Summercool | Fast AC Hire in Southampton & Hampshire';
  const pageDescription = locationData?.seoDescription || 'The easiest way to rent a portable air conditioner for your home or office.';
  const heroLocation = locationData?.name; 

  const localBlurb = locationData?.content;
  const locationName = locationData?.name;

  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      
      <Hero location={heroLocation} />
      <LocalContent name={locationName} content={localBlurb} />

      
      <ProductGrid />
    </div>
  );
};

export default Home;