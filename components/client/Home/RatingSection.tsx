import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RatingSection: React.FC = () => {
  return (
    <section id="rating-section">
      <div className="rating-item bg-one">
        <div className="icon">
          <Link href="/path-to-design">
            <Image
              src="/icons/design.png"
              className="default-icon"
              alt="Design Icon"
              width={50}
              height={50}
            />
            <Image
              src="/icons/design-light.png"
              className="hover-icon"
              alt="Design Icon Light"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <h3>Design our own</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur ng elit, sed do eiusmod tempor
          incididunt ut re magna aliqu enim ad minim
        </p>
        <span className="rating">93%</span>
      </div>

      <div className="rating-item bg-two">
        <div className="icon">
          <Link href="/path-to-award">
            <Image
              src="/icons/award.png"
              className="default-icon"
              alt="Award Icon"
              width={50}
              height={50}
            />
            <Image
              src="/icons/award-light.png"
              className="hover-icon"
              alt="Award Icon Light"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <h3>Award winning</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur ng elit, sed do eiusmod tempor
          incididunt ut re magna aliqu enim ad minim
        </p>
        <span className="rating">85%</span>
      </div>

      <div className="rating-item bg-three">
        <div className="icon">
          <Link href="/path-to-support">
            <Image
              src="/icons/support.png"
              className="default-icon"
              alt="Support Icon"
              width={50}
              height={50}
            />
            <Image
              src="/icons/support-light.png"
              className="hover-icon"
              alt="Support Icon Light"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <h3>24 / 7 Support</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur ng elit, sed do eiusmod tempor
          incididunt ut re magna aliqu enim ad minim
        </p>
        <span className="rating">97%</span>
      </div>

      <div className="rating-item bg-four">
        <div className="icon">
          <Link href="/path-to-consultation">
            <Image
              src="/icons/consultation.png"
              className="default-icon"
              alt="Consultation Icon"
              width={50}
              height={50}
            />
            <Image
              src="/icons/consultation-light.png"
              className="hover-icon"
              alt="Consultation Icon Light"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <h3>Free consultation</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur ng elit, sed do eiusmod tempor
          incididunt ut re magna aliqu enim ad minim
        </p>
        <span className="rating">88%</span>
      </div>

      <div className="rating-item bg-five">
        <div className="icon">
          <Link href="/path-to-delivery">
            <Image
              src="/icons/delivery.png"
              className="default-icon"
              alt="Delivery Icon"
              width={50}
              height={50}
            />
            <Image
              src="/icons/delivery-light.png"
              className="hover-icon"
              alt="Delivery Icon Light"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <h3>Quick delivery</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur ng elit, sed do eiusmod tempor
          incididunt ut re magna aliqu enim ad minim
        </p>
        <span className="rating">99%</span>
      </div>
    </section>
  );
};

export default RatingSection;
