'use client'
import React from 'react'
import { useAccordionState } from './Lib/useAccordionState';
import { Body } from '../text';
import AccordionTitle from './accordionTitle';
import style from './accordion.module.css'

export default function Accordion({ Content }) {

    const {activeTab, setActiveTab} = useAccordionState({Content});

    const isSelected = (tab) => activeTab.title === tab.title;

    return (
        <div>
            {Content.map((tab) => (
                <div
                    className={`${style.wrap} ${isSelected(tab) ? `${style.this}` : ''}`}
                    key={tab.title}
                    onClick={() => setActiveTab(tab)}
                >
                    <div 
                        className={`${style.accordion__title} ${isSelected(tab) ? `${style.active}` : ''}`}
                        key={tab.title}
                        onClick={() => setActiveTab(tab)}
                    >
                        <AccordionTitle text={tab.question}/>
                    </div>

                    <div
                        key={activeTab.title || ""} 
                        className={`${style.accordion__content} ${isSelected(tab) ? `${style.open}` : ``}`}
                    >
                        <Body text={tab.answer}/>
                    </div>
                </div>
            ))}
        </div>
    )
}

