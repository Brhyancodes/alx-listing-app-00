import React from 'react';

import Card from '@/styles/components/common/Card';
import Button from '@/styles/components/common/Button';


import { Property } from '@/styles/components/interfaces';

import { LISTING_CATEGORIES } from '@/styles/components/constants';
const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Cozy Downtown Apartment',
    description: 'Spacious and modern apartment in the heart of the city',
    imageUrl: '/assets/apartment1.jpg',
    price: 120,
    rating: 4.5,
    location: {
      city: 'New York',
      country: 'United States'
    },
    amenities: ['WiFi', 'Kitchen', 'Air Conditioning'],
    maxGuests: 4,
    hostName: 'Sarah'
  },
  {
    id: '2',
    title: 'Beachfront Villa',
    description: 'Luxurious villa with stunning ocean views',
    imageUrl: '/assets/villa1.jpg',
    price: 350,
    rating: 4.8,
    location: {
      city: 'Miami',
      country: 'United States'
    },
    amenities: ['Pool', 'Beach Access', 'Parking'],
    maxGuests: 6,
    hostName: 'John'
  },
  {
    id: '3',
    title: 'Mountain Cabin Retreat',
    description: 'Rustic cabin surrounded by beautiful nature',
    imageUrl: '/public/assets/Property 2.png',
    price: 180,
    rating: 4.3,
    location: {
      city: 'Aspen',
      country: 'United States'
    },
    amenities: ['Fireplace', 'Hot Tub', 'WiFi'],
    maxGuests: 4,
    hostName: 'Emily'
  }
];

const Home: React.FC = () => {
  const handlePropertyClick = (propertyId: string) => {
    // Placeholder for property detail navigation
    console.log(`Navigating to property ${propertyId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">ALX Listing App</h1>
      
      {/* Category Filter */}
      <div className="mb-6 flex space-x-4">
        {LISTING_CATEGORIES.map((category) => (
          <Button 
            key={category} 
            variant="secondary" 
            className="mr-2 mb-2"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Property Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockProperties.map((property) => (
          <Card 
            key={property.id}
            property={property}
            onClick={() => handlePropertyClick(property.id)}
          />
        ))}
      </div>

      {/* Load More Button */}
      <div className="mt-8 flex justify-center">
        <Button 
          variant="primary" 
          onClick={() => alert('Load more listings')}
        >
          Load More Listings
        </Button>
      </div>
    </div>
  );
};

export default Home;