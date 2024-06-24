'use client'
import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from "framer-motion";
import { Heading, Title } from '../text';
import Image from 'next/image';
import { Akanda } from '@/webContents/aboutPage';
import style from './about.module.css'

export default function IntroSec() {

    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [-60, 0]);
    
    const intro = Akanda.alwaysReady;

    return (
        <section 
            
            className={style.intro__sec}
        >
            <div className={style.intro__sec__title}>
                <Heading head={intro.title}/>
            </div>
            <div ref={container} className={style.intro__sec__img}>
                <motion.div 
                    style={{
                        y
                    }} 
                    className={style.intro__sec__img__wrap}
                >
                    <Image {...intro.img}/>
                </motion.div>
            </div>
            <div className={style.intro__sec__sub__title}>
                <Title title={intro.subTitle}/>
            </div>
        </section>
    )
}
