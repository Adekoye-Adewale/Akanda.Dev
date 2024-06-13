'use client'
import {useRef} from 'react';
import { useScroll, useTransform, motion } from "framer-motion";
import Image from 'next/image';
import { Heading } from '../text';
import style from './projectPage.module.css';

export default function Hero({ img, title, status, year, agency }) {

    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end start"]
    })

    const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
    const clipPath = useTransform(scrollYProgress, [0, 1], ["circle(35% at 50% 50%)", "circle(80% at 50% 50%)"]);
    const translateY = useTransform(scrollYProgress, [0, 1], [0, -200]);

    return (
        <section ref={container} className={`${style.hero} inline__pad`}>
            <motion.div 
                style={{scale, clipPath}} 
                transition={{ 
                    type: "spring", 
                    stiffness: 100, 
                    ease: "easeInOut"
                }}
                drag 
                dragConstraints={container}
                dragSnapToOrigin={true}
                // dragElastic={0.2}
                dragTransition={{ bounceStiffness: 300, bounceDamping: 50 }}
                className={`${style.hero__img__wrap} drag`}
            >
                <Image {...img}/>
            </motion.div>
            <div 
                className={style.hero__copy__wrap}
            >
                <motion.div 
                    style={{translateY}} 
                    transition={{ 
                        type: "spring", 
                        stiffness: 100, 
                        ease: "easeInOut"
                    }}
                >
                    <Heading 
                        head={title}
                    />
                </motion.div>
                
                <div className={style.hero__metadata__wrap}>
                    <span>Project Status: {status}</span>
                    <span>Since {year}</span>
                    <span>Agency: {agency}</span>
                </div>
            </div>
        </section>
    )
}
