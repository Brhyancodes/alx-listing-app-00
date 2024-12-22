// components/layout/Header.tsx

import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Listing App</h1>
        {/* Add navigation links here */}
      </div>
    </header>
  );
};

export default Header;