import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'; // Import Tabs from shadcn
import { motion } from 'framer-motion'; // Import framer-motion for animations

const ImageGallerySection: React.FC = () => {
  // Define a state to track the active tab
  const [activeTab, setActiveTab] = useState<string>('dining');

  // Tabs data
  const tabs = [
    {
      id: 'dining',
      title: 'Dining Spaces',
      img: '/image-gallery/dine-ins.png'
    },
    {
      id: 'workspaces',
      title: 'Work Spaces',
      img: '/image-gallery/work-spaces.png'
    },
    {
      id: 'coffeeshop',
      title: 'Coffee Shop',
      img: '/image-gallery/coffee%20shop.png'
    },
    {
      id: 'livingroom',
      title: 'Living Room',
      img: '/image-gallery/living-room.png'
    },
    {
      id: 'cafe',
      title: 'Café Design',
      img: '/image-gallery/caffe.png'
    }
  ];

  return (
    <section id="image-gallery-section" className="relative">
      <div className="relative">
        {/* Tabs from shadcn */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          {/* <TabsList className="flex flex-wrap md:flex-nowrap md:justify-between mt-8 absolute top-2 z-50 w-full bg-transparent p-0 m-0"> */}
          <TabsList className="absolute bottom-[114px] z-50 m-0 flex w-full flex-wrap bg-transparent p-0 text-white md:bottom-[25px]">
            {tabs.map((tab, index) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className={`flex-1 rounded-none border border-white/50 px-4 py-4 text-xs font-semibold capitalize leading-normal md:flex-[0_0_20%] md:text-lg   ${activeTab === tab.id ? 'bg-white text-black' : 'bg-white/5 text-white'
                  } ${index === tabs.length - 1
                    ? 'flex-[0_0_100%]'
                    : 'flex-[0_0_calc(50%)]'
                  }`}
                style={{ zIndex: 100 }} // Ensure z-index is high enough
              >
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab content with framer-motion animation */}
          {tabs.map((tab) => (
            <TabsContent
              key={tab.id}
              value={tab.id}
              style={{ padding: 0 }}
              asChild
            >
              <motion.div
                className="tab-pane py-8 text-center"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="flex h-[500px] w-full flex-col items-center justify-center object-cover object-center relative"
                  style={{
                    backgroundImage: `url(${tab.img})`,
                    objectFit: 'cover',
                    objectPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Dark overlay for better text visibility */}
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="relative z-10 text-white">
                    <h3 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-2xl text-white uppercase tracking-wide">{tab.title}</h3>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ImageGallerySection;
