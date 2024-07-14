'use client'
import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from "framer-motion";
import { Heading, SubTitle } from '../text';
import Image from 'next/image';
import { Akanda } from '@/webContents/aboutPage';
import style from './about.module.css';

export default function IntroSec() {

    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["30% end", "70% start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [ 0, -180]);
    
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
                <SubTitle subTitle={intro.subTitle}/>
            </div>
        </section>
    )
}
