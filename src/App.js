import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Cards />
      <div className="flex justify-center space-x-4 py-8">
        <button className="bg-gray-300 text-black py-1 px-3 rounded">Previous</button>
        <button className="bg-gray-300 text-black py-1 px-3 rounded">Next</button>
      </div>
      <Footer />
    </div>
  );
};

export default App;
