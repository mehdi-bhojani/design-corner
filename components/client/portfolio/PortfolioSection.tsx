import { Search } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { LightBox } from '../lightbox/LightBox'; // Import LightBox component
import { motion } from 'framer-motion'; // Import Framer Motion

const PortfolioSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [lightboxIsOpen, setLightboxIsOpen] = useState<boolean>(false);
  const [photoIndex, setPhotoIndex] = useState<number>(0);

  const handleFilter = (category: string) => {
    setFilter(category);
  };

  const portfolioItems = [
    {
      category: 'architecture',
      imgSrc: '/portfolio-one/1.jpg',
      title: 'Architecture Project 1'
    },
    {
      category: 'interior',
      imgSrc: '/portfolio-three/2.jpg',
      title: 'Interior Project 1'
    },
    {
      category: 'commercial',
      imgSrc: '/portfolio-three/3.jpg',
      title: 'Commercial Project 1'
    },
    {
      category: 'interior',
      imgSrc: '/portfolio-three/4.jpg',
      title: 'Interior Project 2'
    },
    {
      category: 'commercial',
      imgSrc: '/portfolio-three/5.jpg',
      title: 'Commercial Project 2'
    },
    {
      category: 'architecture',
      imgSrc: '/portfolio-three/6.jpg',
      title: 'Architecture Project 2'
    },
    {
      category: 'architecture',
      imgSrc: '/portfolio-three/7.jpg',
      title: 'Architecture Project 1'
    },
    {
      category: 'interior',
      imgSrc: '/portfolio-three/8.jpg',
      title: 'Interior Project 1'
    }
  ];

  // Filter items based on category
  const filteredItems = portfolioItems.filter((item) =>
    filter === 'all' ? true : item.category === filter
  );

  // Open lightbox with clicked image
  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setLightboxIsOpen(true);
  };

  return (
    <>
      {/* Portfolio Section Start */}
      <section id="portfolio-section-three" className="mb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <small className="text-sm font-semibold text-primary">
                Work <span className="text-secondary">project</span>
              </small>
              <h2 className="text-3xl font-bold">Latest project</h2>
            </div>
            <div className="flex items-center justify-end space-x-4">
              <button
                className={`btn text-sm sm:text-lg ${
                  filter === 'all' ? 'text-primary' : ''
                }`}
                onClick={() => handleFilter('all')}
              >
                All
              </button>
              <button
                className={`btn text-sm sm:text-lg ${
                  filter === 'architecture' ? 'text-primary' : ''
                }`}
                onClick={() => handleFilter('architecture')}
              >
                Architecture
              </button>
              <button
                className={`btn text-sm sm:text-lg ${
                  filter === 'interior' ? 'text-primary' : ''
                }`}
                onClick={() => handleFilter('interior')}
              >
                Interior
              </button>
              <button
                className={`btn text-sm sm:text-lg ${
                  filter === 'commercial' ? 'text-primary' : ''
                }`}
                onClick={() => handleFilter('commercial')}
              >
                Commercial
              </button>
            </div>
          </div>

          <motion.div
            layout
            className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                className={`portfolio-item relative ${item.category}`}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -100 : 100,
                  y: index % 2 !== 0 ? 100 : 0
                }} // Animate from left or bottom
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }} // Delay animations
              >
                <div className="inner overflow-hidden rounded-lg">
                  <Image
                    src={item.imgSrc}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="h-[200px] w-1/3 cursor-pointer object-cover xl:h-[300px]"
                  />
                  <div className="overlay absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity hover:opacity-100">
                    <div className="contents text-center">
                      <span className="flex w-full items-center justify-center">
                        <Search
                          className="h-6 w-6 text-primary"
                          onClick={() => openLightbox(index)}
                        />
                      </span>
                      <small className="mt-2 block text-white">
                        {item.category}
                      </small>
                      <h3 className="text-lg font-bold text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Portfolio Section End */}

      {/* Lightbox Component */}
      <LightBox
        isLightboxOpen={lightboxIsOpen}
        setLightboxIsOpen={setLightboxIsOpen}
        photoIndex={photoIndex}
        setPhotoIndex={setPhotoIndex}
        images={filteredItems.map((item) => ({
          src: item.imgSrc,
          alt: item.title
        }))}
      />
    </>
  );
};

export default PortfolioSection;
