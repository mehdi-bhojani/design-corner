import FaqSection from '@/components/client/Home/FaqSection'
import PageHeaderSection from '@/components/client/PageHeader/PageHeader'
import React from 'react'

function Page() {
    const links = [
        { label: 'Home', href: '/' },
        { label: 'FAQ', href: '/faq' },
    ]
  return (
    <div>
        <PageHeaderSection links={links} title='Frequently asked question' />
        <FaqSection />

    </div>
  )
}

export default Page