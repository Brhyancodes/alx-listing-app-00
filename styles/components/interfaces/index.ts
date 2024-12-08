import React from 'react';

export interface Location {
  city: string;
  country: string;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  rating: number;
  location: Location;
  amenities: string[];
  maxGuests: number;
  hostName: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}