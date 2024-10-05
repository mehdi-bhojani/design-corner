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
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <section id="hero-section-one" className="relative">
      {/* Hero Slider */}
      <Swiper className="hero-slider sm:h-screen">
        {[
          '/sliding-sidebar.jpg',
          '/sliding-sidebar.jpg',
          '/sliding-sidebar.jpg'
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
                            Experience
                            <br />
                            Interior Design
                          </h1>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor ncididunt ut labore
                            dolore
                          </p>
                          <button className="btn button-primary">
                            See Project
                          </button>
                          <button className="btn button-secondary-white">
                            Get Contact
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span className="date">Publish - Jan 02, 2019</span>
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
