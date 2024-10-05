'use client';

import AboutSection from '@/components/client/Home/AboutSection';
import FeaturedSection from '@/components/client/Home/FeaturedSection';
import ImageGallerySection from '@/components/client/Home/ImageGallerySection';
import TestimonialSection from '@/components/client/Home/TestimonialSection';
import WorkProcessSection from '@/components/client/Home/WorkProcessSection';
import PageHeaderSection from '@/components/client/PageHeader/PageHeader';
import React from 'react';

function Page() {
  const link = [
    {
      href: '/',
      label: 'Home'
    },
    {
      href: '/about',
      label: 'About Design Corner'
    }
  ];
  return (
    <div>
      <PageHeaderSection links={link} title={'About Design Corner'} />
      <AboutSection />
      <FeaturedSection />
      <ImageGallerySection />
      <WorkProcessSection />
      <TestimonialSection />
    </div>
  );
}

export default Page;
