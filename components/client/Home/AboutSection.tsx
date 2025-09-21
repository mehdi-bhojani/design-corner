import React from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import SwiperThumbs from '../Swiper/SwiperThumbs';

const AboutSection: React.FC = () => {
  return (
    <section id="about-section">
      <div className="m-0 mx-auto max-w-6xl p-1 md:p-5">
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          <div className="md:w-1/2">
            <div className="about-section-left">
              <SwiperThumbs />
            </div>
          </div>
          <div className="p-[2rem] md:w-1/2 md:p-0">
            <div className="about-section-right ">
              <small className="small-primary">
                About <span>Design Corner</span>
              </small>
              <h2 className="leading-10">
                Transform Your Space with Expert Interior Design Services
              </h2>
              <p className="lead">
                We create stunning, functional interiors that reflect your personality and enhance your lifestyle
              </p>
              <p>
                Our experienced interior designers specialize in residential and commercial spaces, offering comprehensive design solutions from concept to completion. We combine contemporary trends with timeless elegance to deliver custom interior designs that maximize both aesthetic appeal and functionality. Whether you&apos;re renovating your home, designing a new office, or creating a retail space, our team brings creative vision and professional expertise to every project.
              </p>
              <button className="btn button-primary">DISCOVER OUR PORTFOLIO</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
