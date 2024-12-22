// pages/index.tsx
import React from 'react';
import { PROPERTYLISTINGSAMPLE } from '@/constants';
import Pill from '@/components/Pill';

const filters = ['Top Villa', 'Self Checkin', 'Luxury', 'Discount'];

const FilterSection: React.FC = () => {
  return (
    <div className="filter-section">
      {filters.map((filter) => (
        <Pill key={filter} label={filter} onClick={() => console.log(filter)} />
      ))}
    </div>
  );
};

const ListingSection: React.FC = () => {
  return (
    <div className="property-list">
      {PROPERTYLISTINGSAMPLE.map((property) => (
        <div key={property.name} className="property-card"> 
          <img src={property.image} alt={property.name} />
          <h2>{property.name}</h2>
          <p>Price: ${property.price}</p>
          <p>Rating: {property.rating}</p>
        </div>
      ))}
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div>
      <section style={{ backgroundImage: 'url(/assets/Image 1.png)' }}>
        <h1>Find your favorite place here!</h1>
        <p>The best prices for over 2 million properties worldwide.</p>
      </section>
      <FilterSection />
      <ListingSection />
    </div>
  );
};

export default Home;