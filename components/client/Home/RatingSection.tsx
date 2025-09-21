import React from 'react';
import Link from 'next/link';

const RatingSection: React.FC = () => {
  return (
    <section id="rating-section">
      <div className="rating-item bg-one group relative overflow-hidden" style={{backgroundImage: 'url("/rating/ceiling.png")'}}>
        <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-0 transition-all duration-300"></div>
        <div className="relative z-10 group-hover:opacity-0 transition-opacity duration-300">
          <div className="icon">
            <Link href="/gypsum-ceiling">
            </Link>
          </div>
          <h3 className="text-white">Gypsum & False Ceiling</h3>
          <p className="text-white">
            Transform your space with premium gypsum board ceilings, suspension systems,
            and elegant molding frames that redefine modern interiors.
          </p>
          <span className="rating text-white">Most Popular</span>
        </div>
      </div>

      <div className="rating-item bg-two group relative overflow-hidden" style={{backgroundImage: 'url("/rating/paint.png")'}}>
        <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-0 transition-all duration-300"></div>
        <div className="relative z-10 group-hover:opacity-0 transition-opacity duration-300">
          <div className="icon">
            <Link href="/painting-services">
            </Link>
          </div>
          <h3 className="text-white">Premium Painting</h3>
          <p className="text-white">
            Expert interior and exterior painting services with your choice of
            premium materials for stunning, long-lasting finishes.
          </p>
          <span className="rating text-white">Quick Delivery</span>
        </div>
      </div>

      <div className="rating-item bg-three group relative overflow-hidden" style={{backgroundImage: 'url("/rating/carpentor.png")'}}>
        <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-0 transition-all duration-300"></div>
        <div className="relative z-10 group-hover:opacity-0 transition-opacity duration-300">
          <div className="icon">
            <Link href="/wooden-works">
            </Link>
          </div>
          <h3 className="text-white">Custom Wooden Works</h3>
          <p className="text-white">
            Bespoke kitchen cabinets, wardrobes, and interior wooden cladding
            crafted to perfection with attention to every detail.
          </p>
          <span className="rating text-white">Best Quality</span>
        </div>
      </div>

      <div className="rating-item bg-four group relative overflow-hidden" style={{backgroundImage: 'url("/rating/cladding.png")'}}>
        <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-0 transition-all duration-300"></div>
        <div className="relative z-10 group-hover:opacity-0 transition-opacity duration-300">
          <div className="icon">
            <Link href="/wall-cladding">
            </Link>
          </div>
          <h3 className="text-white">Interior Cladding</h3>
          <p className="text-white">
            Luxurious wall cladding solutions including marble, porcelain, fabric,
            and decorative options to elevate your interior design.
          </p>
          <span className="rating text-white">Trending</span>
        </div>
      </div>

      <div className="rating-item bg-five group relative overflow-hidden" style={{backgroundImage: 'url("/rating/marble.png")'}}>
        <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-0 transition-all duration-300"></div>
        <div className="relative z-10 group-hover:opacity-0 transition-opacity duration-300">
          <div className="icon">
            <Link href="/marble-ceramics">
            </Link>
          </div>
          <h3 className="text-white">Marble & Ceramics</h3>
          <p className="text-white">
            Premium marble, granite, and porcelain installations including countertops,
            stairs, and elegant tile work for sophisticated spaces.
          </p>
          <span className="rating text-white">Premium Choice</span>
        </div>
      </div>
    </section>
  );
};

export default RatingSection;
