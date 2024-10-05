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
                About <span>architectural</span>
              </small>
              <h2 className="leading-10">
                We are ready to create various architectural designs
              </h2>
              <p className="lead">
                We believe the designer will be able to design a good for
                learning sides lead through
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
              <button className="btn button-primary">MORE ABOUT US</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
