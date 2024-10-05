import React from 'react';


const companies = [
  { 
    name: 'Boeing', 
    rating: '3.4', 
    reviews: '268,221', 
    description: 'Boeing is the worlds largest aerospace company. We’re engineers & technicians. Innovators & dreamers. Join us, and build something better.', 
    employees: '10,000+', 
    imageUrl: 'walmart-banner.jpg', // Replace with actual banner
    logoUrl: 'assets/' // Replace with actual logo
  },
  { 
    name: 'Amazon', 
    rating: '3.5', 
    reviews: '50,743', 
    description: 'Retail & Wholesale', 
    employees: '10,000+', 
    imageUrl: 'amazon-banner.jpg', 
    logoUrl: 'amazon-logo.png'
  },{ 
    name: 'Walmart', 
    rating: '3.4', 
    reviews: '268,221', 
    description: 'General Merchandise & Superstores', 
    employees: '10,000+', 
    imageUrl: 'walmart-banner.jpg', // Replace with actual banner
    logoUrl: 'walmart-logo.png' // Replace with actual logo
  },
  { 
    name: 'Amazon', 
    rating: '3.5', 
    reviews: '50,743', 
    description: 'Retail & Wholesale', 
    employees: '10,000+', 
    imageUrl: 'amazon-banner.jpg', 
    logoUrl: 'amazon-logo.png'
  },{ 
    name: 'Walmart', 
    rating: '3.4', 
    reviews: '268,221', 
    description: 'General Merchandise & Superstores', 
    employees: '10,000+', 
    imageUrl: 'walmart-banner.jpg', // Replace with actual banner
    logoUrl: 'walmart-logo.png' // Replace with actual logo
  },
  { 
    name: 'Amazon', 
    rating: '3.5', 
    reviews: '50,743', 
    description: 'Retail & Wholesale', 
    employees: '10,000+', 
    imageUrl: 'amazon-banner.jpg', 
    logoUrl: 'amazon-logo.png'
  },{ 
    name: 'Walmart', 
    rating: '3.4', 
    reviews: '268,221', 
    description: 'General Merchandise & Superstores', 
    employees: '10,000+', 
    imageUrl: 'walmart-banner.jpg', // Replace with actual banner
    logoUrl: 'walmart-logo.png' // Replace with actual logo
  },
  { 
    name: 'Walmart', 
    rating: '3.4', 
    reviews: '268,221', 
    description: 'General Merchandise & Superstores', 
    employees: '10,000+', 
    imageUrl: 'walmart-banner.jpg', // Replace with actual banner
    logoUrl: 'walmart-logo.png' // Replace with actual logo
  },
  { 
    name: 'Amazon', 
    rating: '3.5', 
    reviews: '50,743', 
    description: 'Retail & Wholesale', 
    employees: '10,000+', 
    imageUrl: 'amazon-banner.jpg', 
    logoUrl: 'amazon-logo.png'
  },{ 
    name: 'Walmart', 
    rating: '3.4', 
    reviews: '268,221', 
    description: 'General Merchandise & Superstores', 
    employees: '10,000+', 
    imageUrl: 'walmart-banner.jpg', // Replace with actual banner
    logoUrl: 'walmart-logo.png' // Replace with actual logo
  },
  { 
    name: 'Amazon', 
    rating: '3.5', 
    reviews: '50,743', 
    description: 'Retail & Wholesale', 
    employees: '10,000+', 
    imageUrl: 'amazon-banner.jpg', 
    logoUrl: 'amazon-logo.png'
  },
  // Add more companies here
];

const Cards = () => {
  return (
    <section className="py-8 px-4">
      
      {/* Sorted by Popularity Heading */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold">Sorted by Popularity</h1>
      </div>
      
      {/* Cards Grid */}
      <div className="grid gap-y-5 gap-x-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 justify-items-center">
        {companies.map((company, index) => (
          <div 
            key={index} 
            className="bg-white p-4 border border-gray-200 shadow-lg rounded-lg hover:shadow-xl transition duration-100 ease-out relative"
            style={{ height: '300px', width: '350px' }} // Adjusted width and height to match the design
          >
            {/* Banner Image */}
            <img 
              src={company.imageUrl} 
              alt={`${company.name} banner`} 
              className="w-full h-24 object-cover rounded-t-lg"
            />
            
            {/* Logo - Positioned absolutely over the banner */}
            <img 
              src={company.logoUrl} 
              alt={`${company.name} logo`} 
              className="w-12 h-12 absolute top-16 left-4 border border-white rounded-sm"
            />

            {/* Card Content */}
            <div className="mt-8">
              <h2 className="text-lg font-bold">{company.name} <span className="text-purple-500">★ {company.rating}</span></h2>
              <p className="text-gray-600 text-xs">{company.reviews} reviews • {company.description}</p>
              <p className="text-gray-500 text-sm">Employees: {company.employees}</p>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-4">
              <button 
                className="border border-blue-500 text-blue-500 py-1 px-4 rounded hover:text-black hover:border-black transition duration-100 ease-out"
              >
                Explore
              </button>
              <button 
                className="text-blue-500 py-1 px-4 rounded hover:text-black transition duration-100 ease-out"
              >
                See Jobs
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
