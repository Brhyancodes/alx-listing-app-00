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