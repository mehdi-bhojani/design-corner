import Image from 'next/image';

const FeaturedSection: React.FC = () => {
  return (
    <section id="featured-section">
      <div className="container mx-auto max-w-6xl justify-center">
        <div className="flex-row-md mx-auto flex max-w-6xl flex-col justify-center gap-4">
          <div className="wow zoomIn md:w-1/3">
            <div className="featured-item">
              <Image src="/icons/design.png" alt="" width={50} height={50} />
              <h3>Our mission</h3>
              <p>
                Lorem ipsum dolor sit met,ecteturs adipisicing elit, sed do
                eiusmod por incididunt ut labore
              </p>
            </div>
          </div>
          <div className="wow zoomIn md:w-1/3">
            <div className="featured-item">
              <Image src="/icons/vision.png" alt="" width={50} height={50} />
              <h3>Our vision</h3>
              <p>
                Lorem ipsum dolor sit met,ecteturs adipisicing elit, sed do
                eiusmod por incididunt ut labore
              </p>
            </div>
          </div>
          <div className="wow zoomIn md:w-1/3">
            <div className="featured-item">
              <Image src="/icons/support.png" alt="" width={50} height={50} />
              <h3>Our core values</h3>
              <p>
                Lorem ipsum dolor sit met,ecteturs adipisicing elit, sed do
                eiusmod por incididunt ut labore
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
