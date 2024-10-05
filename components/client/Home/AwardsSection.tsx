import React from 'react';

const awards = [
  {
    year: '2005',
    title: 'Kitchen made of marble',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'
  },
  {
    year: '2007',
    title: 'Road construction',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'
  },
  {
    year: '2009',
    title: 'Diamond ready design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'
  },
  {
    year: '2010',
    title: 'The gold-plated mosque',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'
  },
  {
    year: '2015',
    title: 'Factory created award',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'
  },
  {
    year: '2018',
    title: 'Eidgah field is ready',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'
  }
];

const AwardsSection: React.FC = () => {
  return (
    <section id="awards-section" className="py-12">
      <div className="container mx-auto">
        <div className="parent gap-4">
          <div className="sm:w-1/3">
            <small className="text-sm text-primary">
              Company <span className="font-semibold">Awards</span>
            </small>
            <h2 className="mt-2 text-4xl font-bold ">2005 - 2019</h2>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="mb-8 block lg:hidden"></div>
          </div>

          <div className="sm:w-2/3 lg:flex lg:justify-between">
            <div className="space-y-8 lg:w-1/2">
              {awards.slice(0, 3).map((award, index) => (
                <div key={index} className="awards-item">
                  <small className="text-sm text-primary">{award.year}</small>
                  <h3 className="mt-2 text-xl font-semibold">{award.title}</h3>
                  <p className="mt-1">{award.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 space-y-8 lg:mt-0 lg:w-1/2">
              {awards.slice(3).map((award, index) => (
                <div key={index} className="awards-item">
                  <small className="text-sm text-primary">{award.year}</small>
                  <h3 className="mt-2 text-xl font-semibold">{award.title}</h3>
                  <p className="mt-1">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
