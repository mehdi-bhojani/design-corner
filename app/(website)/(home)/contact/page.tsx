"use client";

import { ContactForm } from '@/components/client/Home/ContactForm'
import MapComponent from '@/components/client/Home/MapSection';
import PageHeaderSection from '@/components/client/PageHeader/PageHeader'
import React from 'react'

function Page() {
    let links = [
        {
            href: '/home',
            label: 'Home'
        },
        {
            href: '/contact',
            label: 'Contact Us',
        },
    ]
    return (
        <div>
            <PageHeaderSection links={links} title='Contact Us' />
            <ContactForm />
            <MapComponent />
        </div>
    )
}

export default Page