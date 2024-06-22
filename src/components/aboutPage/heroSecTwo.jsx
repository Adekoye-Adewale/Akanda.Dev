'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Body, SubTitle } from '../text';
import { HomeContent } from '@/webContents/homePage';
import { tabCopy } from './anim';
import style from './about.module.css';

export default function HeroSecTwo() {

    const whyAkandaList = HomeContent.whyAkandaList;
    const [hoverTab, setHoverTab] = useState(whyAkandaList[0]);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const variant = isMobile ? tabCopy.mobile : tabCopy.desktop;

    const handleMouseEnter = (list, index) => {
        setHoverTab(list);
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoverTab(whyAkandaList[0]);
        setHoveredIndex(null);
    };

    return (
        <div 
            className={style.hero__two__sec__wrapper}
        >
            <div 
                className={style.list__wrap}
            >
                <div 
                    className={style.list__img__wrap}
                >
                    {hoverTab && hoverTab.component(
                        { 
                            img: hoverTab.img,
                        })
                    }
                </div>
                <div 
                    className={style.list__copy__wrapper}
                >
                    {whyAkandaList.map((list, index) => (
                        <motion.div
                            key={index}
                            className={style.list__copy__wrap}
                            onMouseEnter={() => handleMouseEnter(list, index)}
                            onMouseLeave={handleMouseLeave}
                            whileHover="enter"
                        >
                            <SubTitle subTitle={list.title} />
                            <motion.div
                                className={style.list__body}
                                variants={variant}
                                initial="initial"
                                animate={hoveredIndex === index ? "enter" : "initial"}
                                exit="exit"
                            >
                                <Body text={list.text} />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
