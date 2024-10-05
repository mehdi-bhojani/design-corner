import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface LinkItem {
  href: string;
  label: string;
}

interface PageHeaderSectionProps {
  title: string;
  links: LinkItem[];
}

const PageHeaderSection: React.FC<PageHeaderSectionProps> = ({
  title,
  links
}) => {
  return (
    <section id="page-header-section-three" className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h1 className="mb-4 text-4xl font-bold uppercase">{title}</h1>
          <ul className="flex space-x-2 text-gray-600">
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                  {index !== links.length - 1 && (
                    <ChevronRight className="inline-block h-4 w-4" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PageHeaderSection;
