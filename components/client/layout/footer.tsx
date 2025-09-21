import Link from 'next/link';

export default function Footer() {
  return (
    <footer className=" py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Footer Top */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* About Us */}
          <div>
            <h3 className="mb-4 text-xl font-bold">About Design Corner</h3>
            <p className="text-sm">
              We are a premium interior design studio specializing in residential and commercial spaces. 
              Our team creates beautiful, functional environments that reflect your style and enhance 
              your lifestyle through thoughtful design solutions.
            </p>
            <p className="mt-4 flex flex-col gap-2 text-sm">
              <span>
                <strong>Address:</strong> shop # 8, Aniqa Arcade, Main Numaish, <br />Near Chipa Ambulance Centre, Karachi
              </span>
              <span>
                <strong>Phone:</strong>{' '}
                <a href="tel:(+92)3343515283" className="text-primary">
                  (+92) 3343515283
                </a>
              </span>
              <span>
                <strong>Email:</strong>{' '}
                <a href="mailto:designcornerbyasifbhojani@gmail.com" className="text-primary">
                  designcornerbyasifbhojani@gmail.com
                </a>
              </span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
            <div className="flex gap-10">
              <ul className="text-md space-y-4">
                {['Home', 'About', 'Services', 'Portfolio'].map(
                  (item, index) => (
                    <li key={index}>
                      <Link
                        href={`${item === 'Home' ? '/' : '/' + item.toLowerCase()}`}
                        className=" hover:text-primary"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
              {/* <ul className="text-md space-y-4">
                {['FAQ', 'Pricing', 'Blog', 'Contact'].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className=" hover:text-primary"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul> */}
            </div>
          </div>

          {/* Recent Projects */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Interior Design Projects</h3>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <div className="h-16 w-16 rounded bg-gradient-to-br from-amber-500 to-orange-600"></div>
                <div className="flex-1">
                  <h4>
                    <Link href="/portfolio/modern-apartment" className="text-primary hover:underline">
                      Modern Apartment Living Room Design
                    </Link>
                  </h4>
                  <p className="text-xs text-zinc-300">January 15, 2025</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="h-16 w-16 rounded bg-gradient-to-br from-rose-500 to-pink-600"></div>
                <div className="flex-1">
                  <h4>
                    <Link href="/portfolio/luxury-bedroom" className="text-primary hover:underline">
                      Luxury Master Bedroom Suite Design
                    </Link>
                  </h4>
                  <p className="text-xs text-zinc-300">December 8, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-zinc-800 pt-6">
          <div className="flex flex-col justify-between text-sm text-zinc-400 md:flex-row">
            <p>&copy; 2025 Design Corner. All Rights Reserved.</p>
            <ul className="mt-4 flex space-x-4 md:mt-0">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map(
                (item, index) => (
                  <li key={index}>
                    <Link
                      href={`${item === 'Home' ? '/' : '/' + item.toLowerCase()}`}
                      className="hover:text-primary"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
