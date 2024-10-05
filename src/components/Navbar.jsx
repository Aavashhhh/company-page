import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white">
      <div className="flex items-center space-x-8">
        <img src="logo.png" alt="Logo" className="w-32"/>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Company Reviews</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Find Salaries</a>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <i className="far fa-envelope text-gray-600"></i>
        <i className="far fa-bell text-gray-600"></i>
        <i className="far fa-user-circle text-gray-600"></i>
        <a href="#" className="text-blue-600 font-semibold">Employee / Post Job</a>
      </div>
    </nav>
  );
};

export default Navbar;
