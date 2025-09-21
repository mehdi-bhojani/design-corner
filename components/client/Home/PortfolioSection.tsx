import React, { useState } from 'react';
import Image from 'next/image';
import { LightBox } from '../lightbox/LightBox';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface PortfolioItem {
  category: string;
  imgSrc: string;
  title: string;
  description: string;
  link?: string;
  style?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    category: 'residential',
    imgSrc: '/portfolio/kitchen.png',
    title: 'Modern Kitchen',
    description: 'Contemporary Kitchen Design',
    link: '/projects/modern-kitchen',
    style: 'sm:col-span-2 sm:row-span-3'
  },
  {
    category: 'hospitality',
    imgSrc: '/portfolio/Lobby.png',
    title: 'Modern Hotel Lobby',
    description: 'Elegant Lobby Design',
    link: '/projects/lobby-design',
    style: 'sm:col-span-2 sm:row-span-3'
  },
  {
    category: 'wellness',
    imgSrc: '/portfolio/Fitness-Gym.png',
    title: 'Fitness Center',
    description: 'Modern Gym Interior',
    link: '/projects/fitness-gym',
    style: 'sm:col-span-1 sm:row-span-2'
  },
  {
    category: 'wellness',
    imgSrc: '/portfolio/saloon.png',
    title: 'Beauty Salon',
    description: 'Luxury Salon Design',
    link: '/projects/beauty-salon',
    style: 'sm:col-span-1 sm:row-span-2'
  },
  {
    category: 'hospitality',
    imgSrc: '/portfolio/coffee-shop.png',
    title: 'Coffee Shop',
    description: 'Cozy Café Interior',
    link: '/projects/coffee-shop',
    style: 'sm:col-span-2 sm:row-span-3'
  },
  {
    category: 'corporate',
    imgSrc: '/portfolio/confrence-room.png',
    title: 'Conference Room',
    description: 'Executive Meeting Space',
    link: '/projects/conference-room',
    style: 'sm:col-span-2 sm:row-span-3'
  }
];

const categories = [
  { id: 'all', label: 'All Projects', icon: '🏠' },
  { id: 'residential', label: 'Residential', icon: '🏡' },
  { id: 'hospitality', label: 'Hospitality', icon: '🏨' },
  { id: 'corporate', label: 'Corporate', icon: '🏢' },
  { id: 'wellness', label: 'Wellness', icon: '💆‍♀️' }
];

const Portfolio: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState<string>('all');
  const [lightboxIsOpen, setLightboxIsOpen] = useState<boolean>(false);
  const [photoIndex, setPhotoIndex] = useState<number>(0);

  // Filter items based on category
  const filteredItems = portfolioItems.filter((item) =>
    currentCategory === 'all' ? true : item.category === currentCategory
  );

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setLightboxIsOpen(true);
  };

  // Reset photoIndex when category changes
  React.useEffect(() => {
    setPhotoIndex(0);
    setLightboxIsOpen(false);
  }, [currentCategory]);

  // Reset lightbox if photoIndex is out of bounds
  React.useEffect(() => {
    if (photoIndex >= filteredItems.length && filteredItems.length > 0) {
      setPhotoIndex(0);
    }
    if (filteredItems.length === 0 && lightboxIsOpen) {
      setLightboxIsOpen(false);
    }
  }, [filteredItems, photoIndex, lightboxIsOpen]);

  return (
    <section id="portfolio-section" className="py-16 bg-gradient-to-br from-primary/5 via-white to-primary/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <small className="text-sm font-medium text-primary tracking-wider uppercase mb-2 block">
            Our <span className="text-primary font-bold">Portfolio</span>
          </small>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-4">
            Latest Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our diverse collection of interior design projects across different spaces and styles.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setCurrentCategory(category.id)}
              className={`
                relative px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 
                flex items-center gap-2 min-w-[120px] justify-center border-2
                ${currentCategory === category.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105 border-primary'
                  : 'bg-white text-gray-700 hover:bg-primary/5 border-primary/20 hover:border-primary/50 hover:text-primary'
                }
              `}
              whileHover={{ scale: currentCategory === category.id ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.label}</span>
              {currentCategory === category.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary rounded-full -z-10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="portfolio-item-list grid auto-rows-auto grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={`${item.category}-${index}`}
              layout
              className={`portfolio-item ${item.category} ${item.style} w-full group`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
            >
              <div className="inner relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 border border-primary/10 hover:border-primary/30">
                <div className="relative overflow-hidden h-48 sm:h-56">
                  <Image
                    src={item.imgSrc}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="cursor-pointer w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onClick={() => openLightbox(index)}
                  />
                  <div className="overlay absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      onClick={() => openLightbox(index)}
                      className="bg-white text-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-full px-6 py-2 border-2 border-primary font-semibold"
                      variant={'outline'}
                    >
                      View Project
                    </Button>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-r from-white to-primary/5">
                  <small className="text-xs font-semibold text-primary uppercase tracking-wider mb-1 block">
                    {item.category}
                  </small>
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                    {item.description}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <LightBox
          isLightboxOpen={lightboxIsOpen}
          setLightboxIsOpen={setLightboxIsOpen}
          images={filteredItems.map((item) => ({
            src: item.imgSrc,
            alt: item.title
          }))}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      </div>
    </section>
  );
};

export default Portfolio;
