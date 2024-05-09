'use client'
import React, { useEffect, useState } from 'react'
import { Body } from '../text';
import style from './accordion.module.css'
import AccordionTitle from './accordionTitle';

const AccordionTabs = [
    {
        title: 'tab1',
        label: 'What services does Akanda offer?',
        component: ({ text }) => <Body text={text}/>,
        text: `Akanda offers a variety of services, but his main areas of focus are web design and development, mobile applications, digital transformation consulting services, and SEO. Some other services include content marketing, branding, and graphic design.`,
    },
    {
        title: 'tab2',
        label: 'Do you offer e-commerce web design?',
        component: ({ text }) => <Body text={text}/>,
        text: `Yes, I definitely offer e-commerce website design and development services. I also specialize in creating and refining websites on Shopify or WordPress with the basic support of an on-site SEO service.`,
    },
    {
        title: 'tab3',
        label: 'Do you offer SEO services?',
        component: ({ text }) => <Body text={text}/>,
        text: `Yes, I offer a range of SEO packages designed to meet your needs. My packages include strategies for both on-page and off-page optimization, such, as content creation, optimizing your web pages, building quality backlinks, and more. Whether you prefer my packages or need a customized solution, I am ready to assist you. Feel free to reach out to me today to discuss your requirements and begin enhancing your visibility.`,
    },
    {
        title: 'tab4',
        label: 'How long will a web development project take?',
        component: ({ text }) => <Body text={text}/>,
        text: `Typically, my websites are completed within a timeframe of 2 to 10 weeks. However, I ensure that I have the capacity, for projects before accepting them to ensure your project will never be placed in a waiting queue.`,
    }
];

export default function Accordion() {

    const [activeTab, setActiveTab] = useState(AccordionTabs[0])

    useEffect(() => {
        setActiveTab(AccordionTabs[0])
    }, [])

    const isSelected = (tab) => activeTab.title === tab.title;

    return (
        <div>
            {AccordionTabs.map((tab) => (
                <div
                    className={style.wrap}
                    key={tab.title}
                    onClick={() => setActiveTab(tab)}
                >
                    <div 
                        className={`${style.accordion__title} ${isSelected(tab) ? `${style.active}` : ''}`}
                        key={tab.title}
                        onClick={() => setActiveTab(tab)}
                    >
                        <AccordionTitle text={tab.label}/>
                    </div>

                    <div
                        key={activeTab.title || "empty"} 
                        className={`${style.accordion__content} ${isSelected(tab) ? `${style.open}` : ``}`}
                    >
                        <Body text={tab.text}/>
                    </div>
                </div>
            ))}
        </div>
    )
}

