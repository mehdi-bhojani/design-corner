import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section id="cta-section" className="py-12">
      <div className="container mx-auto">
        <div className="flex-row-md flex flex-col">
          <div className="mb-6 md:mb-0 md:w-2/3">
            <h3 className="text-3xl font-bold">
              Ready to Transform Your Brand with Exceptional Design?
            </h3>
            <p className="mt-2 text-lg">
              Let&apos;s collaborate to create stunning visuals that captivate your audience and drive results.
            </p>
          </div>
          <div className="flex items-center justify-center md:w-1/3 md:justify-end">
            <button
              onClick={() => {
                window.open('https://wa.link/iyk5nl', '_blank');
              }}
              className="btn button-primary rounded bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600 hover:scale-105 active:scale-95 transform"
            >
              Get Quotation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
