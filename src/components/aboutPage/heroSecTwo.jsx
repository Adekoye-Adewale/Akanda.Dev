'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Body, SubTitle } from '../text';
import { tabCopy } from './anim';
import style from './about.module.css';
import { Tabs } from '@/webContents/skills';

export default function HeroSecTwo() {

    const whyAkandaList = Tabs;
    // const [hoverTab, setHoverTab] = useState(whyAkandaList[0]);
    // const [hoveredIndex, setHoveredIndex] = useState(null);
    // const [isMobile, setIsMobile] = useState(false);

    // useEffect(() => {
    //     const checkMobile = () => {
    //         setIsMobile(window.innerWidth <= 768);
    //     };
    //     checkMobile();
    //     window.addEventListener('resize', checkMobile);
    //     return () => window.removeEventListener('resize', checkMobile);
    // }, []);

    // const variant = isMobile ? tabCopy.mobile : tabCopy.desktop;

    // const handleMouseEnter = (list, index) => {
    //     setHoverTab(list);
    //     setHoveredIndex(index);
    // };

    // const handleMouseLeave = () => {
    //     setHoverTab(whyAkandaList[0]);
    //     setHoveredIndex(null);
    // };

    return (
        <div 
            className={style.hero__two__sec__wrapper}
        >
            <div 
                className={style.list__wrap}
            >
                {/* <div 
                    className={style.list__img__wrap}
                >
                    {hoverTab && hoverTab.comp(
                        { 
                            aboutImg: hoverTab.aboutImg,
                        })
                    }
                </div> */}
                {whyAkandaList.map((list, i) => (
                    <div key={i} style={{ '--r': i }} className={style.list__copy__wrap}>
                        {/* <span></span> */}
                        <div>
                            <SubTitle 
                                subTitle={list.label}
                            />
                        </div>
                        <div className={style.list__img__wrap}>
                            <Image {...list.aboutImg}/>
                        </div>
                        <div>
                            <Body 
                                text={list.text}
                            />
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}
