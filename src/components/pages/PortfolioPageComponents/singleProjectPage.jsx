import React from 'react'
import Hero from '@/components/projectPage/hero'
import CtaWrap from '@/components/siteFooter/ctaWrap';
import ServicesProvided from '@/components/projectPage/servicesProvides';

export default function SingleProjectPage({ params }) {

    const { img, title, status, projectYear, agency }  = params;

    return (
        <main>
            <Hero 
                img={img} 
                title={title}
                status={status} 
                year={projectYear} 
                agency={agency}
            />
            <ServicesProvided/>
            <CtaWrap/>
        </main>
    )
}