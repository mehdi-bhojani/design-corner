import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel';
import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Diana Austin',
    title: 'Web Designer',
    image: '/user/1.jpg',
    rating: 5,
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do od tempor incididunt ut labore et dolore magna aliqua. ut enim ad inim eniam, quis nostrud exercitation ullamco'
  },
  {
    id: 2,
    name: 'Stiven Smith',
    title: 'Engineer',
    image: '/user/2.jpg',
    rating: 5,
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do od tempor incididunt ut labore et dolore magna aliqua. ut enim ad inim eniam, quis nostrud exercitation ullamco'
  },
  {
    id: 1,
    name: 'mehdi Austin',
    title: 'Web Designer',
    image: '/user/1.jpg',
    rating: 5,
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do od tempor incididunt ut labore et dolore magna aliqua. ut enim ad inim eniam, quis nostrud exercitation ullamco'
  },
  {
    id: 2,
    name: 'asif Smith',
    title: 'Engineer',
    image: '/user/2.jpg',
    rating: 5,
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do od tempor incididunt ut labore et dolore magna aliqua. ut enim ad inim eniam, quis nostrud exercitation ullamco'
  },
  {
    id: 1,
    name: 'zain Austin',
    title: 'Web Designer',
    image: '/user/1.jpg',
    rating: 5,
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do od tempor incididunt ut labore et dolore magna aliqua. ut enim ad inim eniam, quis nostrud exercitation ullamco'
  },
  {
    id: 2,
    name: 'Stiven Smith',
    title: 'Engineer',
    image: '/user/2.jpg',
    rating: 5,
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do od tempor incididunt ut labore et dolore magna aliqua. ut enim ad inim eniam, quis nostrud exercitation ullamco'
  }
  // Add more testimonials as needed
];

const TestimonialSection: React.FC = () => {
  return (
    <section id="testimonial-section" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="w-full">
            <Carousel
              className="w-full max-w-6xl"
              plugins={[Autoplay({ delay: 5000 })]}
            >
              <CarouselContent className="-ml-1">
                {testimonials.map((testimonial) => (
                  <CarouselItem
                    key={testimonial.id}
                    className="p-4 md:basis-1/2 lg:basis-1/2"
                  >
                    <div className="testimonial-carousel-item rounded-lg p-6 shadow-lg">
                      <div className="testimonial-carousel-item-inner">
                        <div className="image-box mb-4 flex justify-center">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={96}
                            height={96}
                            className="h-24 w-24 rounded-full"
                          />
                        </div>
                        <h4 className="text-center text-lg font-semibold">
                          {testimonial.name} -{' '}
                          <span className="text-gray-500">
                            {testimonial.title}
                          </span>
                        </h4>
                        <ul className="rating-stars my-2 flex justify-center">
                          {Array.from(
                            { length: testimonial.rating },
                            (_, index) => (
                              <li key={index} className="text-yellow-500">
                                <i className="fas fa-star"></i>
                              </li>
                            )
                          )}
                        </ul>
                        <p className="text-center text-gray-600">
                          {testimonial.feedback}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
