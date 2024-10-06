import React from 'react';

const PricingTable: React.FC = () => {
  return (
    <section id="pricing-table-section" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-8">
            <small className="text-primary uppercase tracking-wide">
              Work <span className="font-semibold">price</span>
            </small>
            <h2 className="text-3xl font-bold mt-2">Our pricing plan</h2>
            <p className="text-gray-600 mt-4">
              We have the best people with whom we can overcome all obstacles in our way, 
              with whom we confidently look to the future.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center text-center">
          {/* Pricing Card 1 */}
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <i className="far fa-paper-plane text-4xl text-primary mb-4"></i>
              <h3 className="text-xl font-bold mb-2">One room flat</h3>
              <span className="text-4xl font-semibold text-gray-800 mb-4 block">$31.59</span>
              <ul className="text-gray-600 mb-6">
                <li>Free Security Service</li>
                <li>1x Security Service</li>
                <li>Unlimited Security Service</li>
                <li>1x Dashboard Access</li>
                <li>3x Job Listings</li>
              </ul>
              <button className="btn button-secondary-brown-round bg-brown-600 text-white py-2 px-4 rounded-lg hover:bg-brown-700">
                Contact
              </button>
            </div>
          </div>

          {/* Pricing Card 2 (Highlighted) */}
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 relative">
              <i className="fas fa-bicycle text-4xl text-primary mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Two room flat</h3>
              <span className="text-4xl font-semibold text-gray-800 mb-4 block">$38.85</span>
              <ul className="text-gray-600 mb-6">
                <li>Free Security Service</li>
                <li>1x Security Service</li>
                <li>Unlimited Security Service</li>
                <li>1x Dashboard Access</li>
                <li>3x Job Listings</li>
              </ul>
              <button className="btn button-secondary-brown-round bg-brown-600 text-white py-2 px-4 rounded-lg hover:bg-brown-700">
                Contact
              </button>
              <div className="absolute top-0 right-0 bg-yellow-400 text-white px-2 py-1 rounded-bl-lg font-bold">
                Best Value
              </div>
            </div>
          </div>

          {/* Pricing Card 3 */}
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <i className="fas fa-university text-4xl text-primary mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Three room flat</h3>
              <span className="text-4xl font-semibold text-gray-800 mb-4 block">$41.96</span>
              <ul className="text-gray-600 mb-6">
                <li>Free Security Service</li>
                <li>1x Security Service</li>
                <li>Unlimited Security Service</li>
                <li>1x Dashboard Access</li>
                <li>3x Job Listings</li>
              </ul>
              <button className="btn button-secondary-brown-round bg-brown-600 text-white py-2 px-4 rounded-lg hover:bg-brown-700">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
