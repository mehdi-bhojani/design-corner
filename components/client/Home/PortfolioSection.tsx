import React, { useState } from 'react';
import Image from 'next/image';
import { LightBox } from '../lightbox/LightBox';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion'; // Import Framer Motion

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
    category: 'architecture',
    imgSrc: '/portfolio-one/1.jpg',
    title: 'Architecture Project 1',
    description: 'Conference Center',
    link: '/projects/architecture-1',
    style: 'sm:col-span-2 sm:row-span-4'
  },
  {
    category: 'interior',
    imgSrc: '/portfolio-one/2.jpg',
    title: 'Interior Project 1',
    description: 'Conference Center',
    link: '/projects/interior-1',
    style: 'sm:col-span-1 sm:row-span-3'
  },
  {
    category: 'commercial',
    imgSrc: '/portfolio-one/3.jpg',
    title: 'Commercial Project 1',
    description: 'Conference Center',
    link: '/projects/commercial-1',
    style: 'sm:col-span-1 sm:row-span-3'
  },
  {
    category: 'architecture',
    imgSrc: '/portfolio-one/1.jpg',
    title: 'Architecture Project 2',
    description: 'Office Building',
    link: '/projects/architecture-2',
    style: 'sm:col-span-2 sm:row-span-4'
  },
  {
    category: 'interior',
    imgSrc: '/portfolio-one/2.jpg',
    title: 'Interior Project 1',
    description: 'Conference Center',
    link: '/projects/interior-1',
    style: 'sm:col-span-1 sm:row-span-3'
  },
  {
    category: 'commercial',
    imgSrc: '/portfolio-one/3.jpg',
    title: 'Commercial Project 1',
    description: 'Conference Center',
    link: '/projects/commercial-1',
    style: 'sm:col-span-1 sm:row-span-3'
  }
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

  return (
    <section id="portfolio-section">
      <div className="p-1">
        <div className="row">
          <div className="container items-center justify-between sm:flex">
            <div>
              <small className="small-primary">
                Work <span>project</span>
              </small>
              <h2>Latest project</h2>
            </div>
            <div>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentCategory('all')}
                  className={currentCategory === 'all' ? 'text-primary' : ''}
                >
                  All
                </button>
                <button
                  onClick={() => setCurrentCategory('architecture')}
                  className={
                    currentCategory === 'architecture' ? 'text-primary' : ''
                  }
                >
                  Architecture
                </button>
                <button
                  onClick={() => setCurrentCategory('interior')}
                  className={
                    currentCategory === 'interior' ? 'text-primary' : ''
                  }
                >
                  Interior
                </button>
                <button
                  onClick={() => setCurrentCategory('commercial')}
                  className={
                    currentCategory === 'commercial' ? 'text-primary' : ''
                  }
                >
                  Commercial
                </button>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          layout
          className="portfolio-item-list grid auto-rows-auto grid-cols-2 gap-1 sm:grid-cols-4"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              className={`portfolio-item ${item.category} ${item.style} w-full`}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
                y: index % 2 !== 0 ? 100 : -100
              }} // From left or bottom
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }} // Delay based on index
            >
              <div className="inner">
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="cursor-pointer"
                  onClick={() => openLightbox(index)}
                />
                <div className="overlay">
                  <Button
                    onClick={() => openLightbox(index)}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    variant={'link'}
                  >
                    View Image
                  </Button>
                  <div className="title">
                    <small className="small-secondary capitalize">
                      {item.category}
                    </small>
                    <h3>{item.description}</h3>
                  </div>
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
