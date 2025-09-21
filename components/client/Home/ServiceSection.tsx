import React from 'react';
import { Palette, Building, Home, Briefcase, ChefHat, TreePine } from 'lucide-react';
import Link from 'next/link';

// Define a type for the service items
interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  link: string;
}

// Updated service items with meaningful content
const serviceItems: ServiceItem[] = [
  {
    icon: Palette,
    title: 'Stunning Interior Design',
    description: 'Ignite your space with jaw-dropping interiors that fuse bold creativity, smart function, and pure wow-factor. We turn ordinary rooms into unforgettable experiences.',
    link: '/services/interior-design'
  },
  {
    icon: Home,
    title: 'Dream Home Makeovers',
    description: 'Step into your ultimate sanctuary! Our residential designs are tailored to your wildest visions—luxury, comfort, and personality, all in one breathtaking package.',
    link: '/services/residential-design'
  },
  {
    icon: Briefcase,
    title: 'Next-Level Commercial Spaces',
    description: 'Supercharge your business with commercial environments that impress, inspire, and energize. We craft spaces that make brands unforgettable.',
    link: '/services/commercial-design'
  },
];

const ServiceSection: React.FC = () => {
  return (
    <section id="service-section" className="py-20 relative overflow-hidden backdrop-blur-sm">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #c79153 2px, transparent 2px), radial-gradient(circle at 75% 75%, #c79153 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl md:text-6xl font-bold text-white leading-tight">
            Exceptional Design
            <span className="block text-[#c79153]">
              Solutions
            </span>
          </h2>
         
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceItems.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link href={service.link} key={index}>
                <div className="group relative bg-white/10 backdrop-blur-md rounded p-8 border border-white/20 hover:border-[#c79153]/50 transition-all duration-300 hover:scale-105 cursor-pointer hover:bg-white/15 shadow-xl hover:shadow-2xl">
                  {/* Glass effect overlay */}
                  <div className="absolute inset-0 rounded bg-gradient-to-br from-white/20 via-white/10 to-white/5 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                  {/* Icon with glass background */}
                  <div className="relative inline-flex p-4 rounded bg-primary backdrop-blur-sm mb-6 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110 border border-white/30">
                    <IconComponent className="w-8 h-8 text-white transition-all duration-300 group-hover:rotate-12" />
                  </div>

                  {/* Content */}
                  <h3 className="relative mb-4 text-2xl font-bold text-white group-hover:text-[#c79153] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="relative text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Glass reflection effect */}
                  <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Bottom glow line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#c79153] to-white/50 group-hover:w-full transition-all duration-500 rounded-bl-2xl"></div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
