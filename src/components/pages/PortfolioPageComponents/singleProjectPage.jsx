import React from 'react'
import Hero from '@/components/projectPage/hero'
import CtaWrap from '@/components/siteFooter/ctaWrap';
import ServicesProvided from '@/components/projectPage/servicesProvides';
import MainContent from '@/components/projectPage/mainContent';

export default function SingleProjectPage({ params }) {

    const { img, title, status, projectYear, agency, serviceProvided, objectiveSummary, mainService, mainDescription, techList, imgList, projectTechnologies, link }  = params;
    const mainWorksCopy = {
        title: title,
        serviceProvided: serviceProvided,
        objectiveSummary: objectiveSummary,
        mainService: mainService,
        mainDescription: mainDescription,
        techList: techList,
        link: link,
    }

    return (
        <main>
            <Hero 
                img={img} 
                title={title}
                status={status} 
                year={projectYear} 
                agency={agency}
            />
            <MainContent 
                mainWorksCopy={mainWorksCopy} 
                imgList={imgList}
            />
            <ServicesProvided projectTechnologies={projectTechnologies}/>
            <CtaWrap/>
        </main>
    )
}