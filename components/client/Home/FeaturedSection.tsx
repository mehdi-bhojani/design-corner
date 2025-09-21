import { Target, Eye, Heart } from 'lucide-react';

const FeaturedSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#666666' }}>
            Excellence in Every Detail
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the principles that drive our passion for exceptional design and client satisfaction
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="group cursor-pointer">
            <div className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 text-center border border-gray-100 hover:border-opacity-0">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-300" 
                   style={{ backgroundColor: '#c79153' }}>
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#666666' }}>
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Transforming visions into extraordinary digital experiences through innovative design solutions that captivate audiences and drive meaningful engagement across all platforms.
              </p>
            </div>
          </div>
          
          <div className="group cursor-pointer">
            <div className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 text-center border border-gray-100 hover:border-opacity-0">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-300" 
                   style={{ backgroundColor: '#c79153' }}>
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#666666' }}>
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To become the premier destination for cutting-edge design excellence, pioneering creative solutions that shape the future of digital aesthetics and user experience worldwide.
              </p>
            </div>
          </div>
          
          <div className="group cursor-pointer">
            <div className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 text-center border border-gray-100 hover:border-opacity-0">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-300" 
                   style={{ backgroundColor: '#c79153' }}>
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#666666' }}>
                Our Values
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Built on authenticity, innovation, and collaborative excellence. We believe in creating lasting partnerships while delivering designs that exceed expectations and inspire lasting impact.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-block px-8 py-3 rounded-full text-sm font-medium text-white shadow-lg" 
               style={{ backgroundColor: '#c79153' }}>
            Crafting Tomorrow&apos;s Design Today
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
