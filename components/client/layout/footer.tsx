import Link from 'next/link';

export default function Footer() {
  return (
    <footer className=" py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Footer Top */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* About Us */}
          <div>
            <h3 className="mb-4 text-xl font-bold">About Us</h3>
            <p className="text-sm ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="mt-4 flex flex-col gap-2 text-sm">
              <span>
                {' '}
                <strong>Address:</strong> 651 Fifth Avenue, 36th New York, NY
                546{' '}
              </span>
              <span>
                {' '}
                <strong>Phone:</strong>{' '}
                <a href="tel:(+080)46893578" className="text-primary">
                  (+080) 4689 35 78
                </a>
              </span>
              <span>
                <strong>Email:</strong>{' '}
                <a href="mailto:myemail@kyanite.com" className="text-primary">
                  myemail@kyanite.com
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
                        href={`${item === 'Home' ? '/' : item.toLowerCase()}`}
                        className=" hover:text-primary"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
              <ul className="text-md space-y-4">
                {['FAQ', 'Pricing', 'Blog', 'Contact'].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={`${item === 'Home' ? '/' : item.toLowerCase()}`}
                      className=" hover:text-primary"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Popular Post */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Recent Projects</h3>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <div className="h-16 w-16 rounded bg-zinc-700"></div>
                <div className="flex-1">
                  <h4>
                    <Link href="#" className="text-primary hover:underline">
                      There are 10 professional bre in our training center
                    </Link>
                  </h4>
                  <p className="text-xs text-zinc-300">February 15, 2019</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="h-16 w-16 rounded bg-zinc-700"></div>
                <div className="flex-1">
                  <h4>
                    <Link href="#" className="text-primary hover:underline">
                      I used to love the clock to play life in a very beautiful
                    </Link>
                  </h4>
                  <p className="text-xs text-zinc-300">March 25, 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-zinc-800 pt-6">
          <div className="flex flex-col justify-between text-sm text-zinc-400 md:flex-row">
            <p>&copy; 2024 Design Corner. All Rights Reserved.</p>
            <ul className="mt-4 flex space-x-4 md:mt-0">
              {['Home', 'About', 'Services', 'Portfolio', 'FAQ'].map(
                (item, index) => (
                  <li key={index}>
                    <Link
                      href={`${item === 'Home' ? '/' : item.toLowerCase()}`}
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
