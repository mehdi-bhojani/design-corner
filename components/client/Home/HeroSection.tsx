'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Play } from 'lucide-react';

const HeroSection = () => {
  const [ setModalOpen] = useState(false);
  return (
    <section id="hero-section-one" className="relative">
      {/* Hero Slider */}
      <Swiper className="hero-slider sm:h-screen">
        {[
          '/sliding1.png',
          '/sliding2.png',
        ].map((item, index) => (
          <SwiperSlide
            key={index}
            className="hero-slider-item relative bg-cover bg-center"
            style={{ backgroundImage: `url(${item})` }}
          >
            <div className="hero-slider-item bg-one">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 col-xl-6">
                        <div className="hero-contents">
                          <span className="hero-counter"></span>
                          <h1 className="leading-normal">
                            Transform Your
                            <br />
                            Design Vision
                          </h1>
                          <p>
                            Discover exceptional design solutions that bring your
                            creative ideas to life. From concept to completion,
                            we craft stunning visual experiences.
                          </p>
                          <button
                            className="btn button-primary"
                            onClick={() => {
                              const portfolioSection = document.querySelector('#portfolio-section');
                              portfolioSection?.scrollIntoView({ behavior: 'smooth' });
                            }}
                          >
                            View Portfolio
                          </button>
                          <button
                            className="btn button-secondary-white"
                            onClick={() => window.open('https://wa.link/p9muv6', '_blank')}
                          >
                            Start Project
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span className="date">Latest Work - Jan 01, 2025</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Social Icons */}
      <ul className="social-icons">
        {['facebook-f', 'twitter', 'vimeo-v', 'instagram', 'linkedin-in'].map(
          (icon, index) => (
            <li key={index}>
              <a href="#" className="text-white hover:text-gray-400">
                <i className={`fab fa-${icon}`}></i>
              </a>
            </li>
          )
        )}
      </ul>

      <span className="copy-right">&copy; Copyright 2019</span>

      {/* Modal */}
      <Dialog onOpenChange={() => setModalOpen}>
        <DialogTrigger className="video-play flex gap-4">
          <Play /> Open Video
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription>
              <div className="relative h-64 w-full">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/7d16CpWp-ok"
                  allowFullScreen
                />
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
