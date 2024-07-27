'use client'
import { useRef } from 'react'
import { useScroll, useTransform, motion } from "framer-motion";
import style from './about.module.css'
import HeroSecTwo from './heroSecTwo';

export default function Hero() {
    
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    }) 

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 500]);
    const backgroundColor = useTransform(scrollYProgress, [0, 1], ["#ffffff", '#000000']);
    const opacity = useTransform(scrollYProgress, [0, 0.50, 0.8, 1], [0, 0, 1, 1]);
    const filter = useTransform(scrollYProgress, [0, 0.6], ["blur(0) brightness(1)", "blur(10px) brightness(0)"]);
    const transform = useTransform(scrollYProgress, [0, 0.35, 1], 
        ["scale(0.8) translate(0px, 0px)", "scale(1) translate(-15%, 0%)", "scale(50) translate(-15%, 50%)"]);

    return (
        <section className={style.hero} ref={container}>
            <motion.div
                className={`${style.hero__inner__sec} ${style.hero__sec__one}`}
                style={{
                    transform,
                }} 
                transition={{  
                    type: "spring", 
                    stiffness: 100, 
                    ease: "easeInOut"
                }}
            >
                <motion.div 
                    style={{
                        filter
                    }}
                    className={style.hero__logo}
                >                    
                </motion.div>
            </motion.div>
            <motion.div
                className={`${style.hero__inner__sec} ${style.hero__two__sec}`}
                style={{
                    opacity
                }} 
                transition={{  
                    type: "spring", 
                    stiffness: 100, 
                    ease: "easeInOut"
                }}
            >
                <HeroSecTwo/>
            </motion.div>
        </section>
    )
}
