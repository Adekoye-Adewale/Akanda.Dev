'use client'
import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from "framer-motion";
import { FadeInLeft } from '../ui/enteranceAnimation';
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
            <FadeInLeft 
                delay={'.5'}
            >
                <motion.div 
                    className={style.intro__sec__title}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <Heading head={intro.title}/>
                </motion.div>
            </FadeInLeft>
            <FadeInLeft 
                delay={'.5'}
            >
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
            </FadeInLeft>
            <FadeInLeft 
                delay={'.5'}
            >
                <div className={style.intro__sec__sub__title}>
                    <SubTitle subTitle={intro.subTitle}/>
                </div>
            </FadeInLeft>
        </section>
    )
}
