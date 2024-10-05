import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 text-center">
      <div className="space-y-2">
        <a href="#" className="text-gray-600">Hiring Lab</a>
        <a href="#" className="text-gray-600">Career Advice</a>
        <a href="#" className="text-gray-600">Browse Jobs</a>
        {/* Add more links here */}
        <p className="text-sm text-gray-500">© 2024 Indeed | Your Privacy Choices | Terms</p>
      </div>
    </footer>
  );
};

export default Footer;
