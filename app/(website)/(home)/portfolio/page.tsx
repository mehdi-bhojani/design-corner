'use client';

import PageHeaderSection from '@/components/client/PageHeader/PageHeader';
import PortfolioSection from '@/components/client/portfolio/PortfolioSection';
import React from 'react';

function Page() {
  const title = 'Portfolio';
  const links = [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Portfolio' }
  ];
  return (
    <div>
      <PageHeaderSection title={title} links={links} />
      <PortfolioSection />
    </div>
  );
}

export default Page;
