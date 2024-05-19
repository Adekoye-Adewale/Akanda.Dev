'use client'
import React from 'react'
import { useTransform, motion } from "framer-motion";
import { Heading } from '../text'
import styles from './hero.module.css'

const homeHero = `<span class='italic'>In Business</span> <span>of making everyone </span> <div><span>visible</span> <span>on the internet</span></div>`

export default function HomeHero({scrollYProgress}) {

    const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    // const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
    
    return (
        <motion.div 
            className={`${styles.wrapper}`} 
            style={{scale, opacity}} 
            transition={{ 
                duration: 0.2, 
                type: "tween",
                ease: "easeInOut"
            }}
        >
            <Heading head={homeHero}/>
        </motion.div>
    )
}
