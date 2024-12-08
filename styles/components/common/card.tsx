import React from 'react';

import { CardProps } from '../interfaces';

import Button from './Button';
const Card: React.FC<CardProps> = ({ property, onClick }) => {
  const {
    title,
    description,
    imageUrl,
    price,
    rating,
    location,
    amenities,
    maxGuests,
    hostName
  } = property;

  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white">
      <div className="relative">
        <img 
          className="w-full h-56 object-cover" 
          src={imageUrl} 
          alt={title} 
        />
        <div className="absolute top-4 right-4 bg-white/80 px-3 py-1 rounded-full">
          <span className="flex items-center">
            <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {rating}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-lg font-bold">${price}/night</p>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            <span>{location.city}, {location.country}</span>
            <span className="ml-2">• {maxGuests} guests</span>
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex space-x-2">
            {amenities.slice(0, 3).map((amenity, index) => (
              <span key={index} className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                {amenity}
              </span>
            ))}
          </div>
          <Button 
            onClick={onClick} 
            variant="primary"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;