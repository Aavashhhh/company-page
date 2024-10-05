import React from 'react';

const Header = () => {
  return (
    <header className="text-center py-8 bg-gray-100">
      <h1 className="text-2xl font-semibold mb-4">Aerospace & Defense Companies</h1>
      <div className="flex justify-center space-x-4">
        <select className= "p-2 border rounded">
          <option>Aerospace & Defense</option>
          <option>Aerospace & Defense</option>
          <option>Aerospace & Defense</option>
          <option>Aerospace & Defense</option>
          <option>Aerospace & Defense</option>
          <option>Aerospace & Defense</option>
          <option>Aerospace & Defense</option>
        </select>
        <select className="p-2 border rounded">
          <option>United States</option>
          <option>United States</option>
          <option>United States</option>
          <option>United States</option>
          <option>United States</option>
          <option>United States</option>
          <option>United States</option>
          
        </select>
      </div>
    </header>
  );
};

export default Header;
