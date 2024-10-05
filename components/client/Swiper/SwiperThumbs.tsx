import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';
import SwiperCore from 'swiper';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function SwiperThumbs() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

  return (
    <div className="parent flex flex-col gap-2 md:flex-row-reverse">
      <div className="md:w-2/3 lg:w-3/4">
        <Swiper
          spaceBetween={10}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev'
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 flex h-[658px] flex-col gap-2 object-cover object-center"
        >
          <SwiperSlide>
            <Image
              alt="slide"
              width={1000}
              height={1000}
              src="/about-section/1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="slide"
              width={1000}
              height={1000}
              src="/about-section/1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="slide"
              width={1000}
              height={1000}
              src="/about-section/1.jpg"
            />
          </SwiperSlide>
          <div className="absolute bottom-5 right-5 z-10 flex -translate-y-1/2 transform gap-1">
            <div className="bg-white px-3 py-1">
              <button className="custom-prev">
                <ArrowLeft className="h-8 w-8" />
              </button>
            </div>
            <div className=" bg-white px-3 py-1">
              <button className="custom-next">
                <ArrowRight className="h-8 w-8" />
              </button>
            </div>
          </div>
        </Swiper>
      </div>
      <div className="lg-w-1/4 md:w-1/3">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper flex flex-col gap-2"
        >
          <SwiperSlide>
            <Image
              alt="slide"
              width={1000}
              height={1000}
              src="/about-section/1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="slide"
              width={1000}
              height={1000}
              src="/about-section/1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="slide"
              width={1000}
              height={1000}
              src="/about-section/1.jpg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
