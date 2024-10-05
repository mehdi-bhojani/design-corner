import React from 'react';

const WorkProcessSection: React.FC = () => {
  const workProcessItems = [
    {
      icon: 'fab fa-searchengin',
      title: 'Research & Analysis',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod por incididunt ut labore.'
    },
    {
      icon: 'fab fa-creative-commons-sampling-plus',
      title: 'Creative Solutions',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod por incididunt ut labore.'
    },
    {
      icon: 'fas fa-tasks',
      title: 'Project Launch',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod por incididunt ut labore.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Building',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod por incididunt ut labore.'
    }
  ];

  return (
    <section id="work-process-section" className="py-16">
      <div className="container text-center">
        <div className="mb-12">
          <small className="small-primary">
            How it <span>works</span>
          </small>
          <h2 className="mb-4 text-3xl font-bold">Our Work Process</h2>
          <p className="text-gray-600">
            We have the best people with whom we can overcome all obstacles in
            our way, with whom we confidently look to the future.
          </p>
        </div>

        <div className="flex flex-wrap justify-center">
          {workProcessItems.map((item, index) => (
            <div key={index} className="w-full p-4 md:w-1/2 lg:w-1/4">
              <div className="work-process-item  p-6 text-center text-primary hover:text-white">
                <div className="icon-box mb-4 flex items-center justify-center">
                  <i className={`${item.icon} text-3xl `}></i>
                </div>
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;
