import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define a type for the service items
interface ServiceItem {
  iconSrc: string;
  title: string;
  description: string;
  link: string;
}

// Sample service items data
const serviceItems: ServiceItem[] = [
  {
    iconSrc: '/icons/delivery.png',
    title: 'Interior design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/single-service'
  },
  {
    iconSrc: '/icons/design.png',
    title: 'Architecture design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/single-service'
  },
  {
    iconSrc: '/icons/fectory.png',
    title: 'Residential design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/single-service'
  },
  {
    iconSrc: '/icons/commercial.png',
    title: 'Commercial design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/single-service'
  },
  {
    iconSrc: '/icons/kitchen.png',
    title: 'Kitchen design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/single-service'
  },
  {
    iconSrc: '/icons/landscape.png',
    title: 'Landscape design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/single-service'
  }
];

const ServiceSection: React.FC = () => {
  return (
    <section id="service-section" className="py-12">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <small className="small-primary text-sm font-semibold uppercase">
            Work <span className="text-secondary">service</span>
          </small>
          <h2 className="mb-4 text-3xl font-bold">Our Great Services</h2>
          <p className="text-gray-600">
            We have the best people to overcome obstacles and look confidently
            toward the future.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {serviceItems.map((service, index) => (
            <div
              key={index}
              className="service-item bg-white p-6 text-center shadow-lg"
            >
              <div className="icon mb-4">
                {/* Using Next.js Image optimization */}
                <Image
                  src={service.iconSrc}
                  alt={service.title}
                  width={60}
                  height={60}
                />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
              <p className="mb-4 text-gray-600">{service.description}</p>
              <Link href={service.link}>
                <span className="text-primary hover:underline">
                  Read more <i className="fas fa-long-arrow-alt-right"></i>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
