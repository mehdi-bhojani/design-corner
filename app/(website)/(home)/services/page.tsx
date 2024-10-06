"use client"

import CtaSection from '@/components/client/Home/CtaSection'
import PricingTable from '@/components/client/Home/PricingTable'
import ServiceSection from '@/components/client/Home/ServiceSection'
import PageHeaderSection from '@/components/client/PageHeader/PageHeader'
import React from 'react'

function Page() {
    const links = [
        {
            href: '/home',
            label: 'Home'
        },
        {
            href: '/service',
            label: 'Services'
        },
    ]
    return (
        <div>
            <PageHeaderSection links={links} title='Services' />
            <ServiceSection />
            <CtaSection />
            <PricingTable />

        </div>
    )
}

export default Page