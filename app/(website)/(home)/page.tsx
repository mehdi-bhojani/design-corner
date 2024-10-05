'use client';

import AboutSection from '@/components/client/Home/AboutSection';
import AwardsSection from '@/components/client/Home/AwardsSection';
import CtaSection from '@/components/client/Home/CtaSection';
import FeaturedSection from '@/components/client/Home/FeaturedSection';
import HeroSection from '@/components/client/Home/HeroSection';
import ImageGallerySection from '@/components/client/Home/ImageGallerySection';
import PortfolioSection from '@/components/client/Home/PortfolioSection';
import RatingSection from '@/components/client/Home/RatingSection';
import ServiceSection from '@/components/client/Home/ServiceSection';
import React from 'react';

function Page() {
  return (
    <div>
      <HeroSection />
      <RatingSection />
      <AboutSection />
      <FeaturedSection />
      <PortfolioSection />
      <ServiceSection />
      <ImageGallerySection />
      <AwardsSection />
      <CtaSection />
    </div>
  );
}

export default Page;
