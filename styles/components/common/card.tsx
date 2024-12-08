import React from 'react';
import { Property } from '../interfaces';
import Button from './Button';

interface CardProps {
  property: Property;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ property, onClick }) => {
  return (
    <div 
      className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      <img 
        src={property.imageUrl} 
        alt={property.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{property.title}</h2>
        <p className="text-gray-600 mb-2">{property.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">${property.price}/night</span>
          <div className="flex items-center">
            <span className="ml-2">{property.rating} ★</span>
          </div>
        </div>
        <div className="mt-2 text-sm text-gray-500">
          {property.location.city}, {property.location.country}
        </div>
        <div className="mt-4">
          <Button variant="primary" onClick={onClick}>
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;