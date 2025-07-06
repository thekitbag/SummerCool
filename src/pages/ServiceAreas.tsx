// src/pages/ServiceAreas.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import locations from '../data/locations.json';
import { MapPin } from 'lucide-react';

const ServiceAreas: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Service Areas | Summercool</title>
        <meta name="description" content="We deliver portable air conditioners across Hampshire, including Winchester, Portsmouth, Southampton, and more." />
      </Helmet>
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Areas We Cover</h1>
            <p className="mt-4 text-xl text-gray-600">
              We provide fast, local delivery to the following towns and cities.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <Link
                key={location.id}
                to={`/${location.id}`}
                className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center">
                  <MapPin className="h-8 w-8 text-blue-600" />
                  <h2 className="ml-4 text-2xl font-semibold text-gray-900">{location.name}</h2>
                </div>
                <p className="mt-4 text-gray-600">
                  Air conditioner hire in {location.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceAreas;