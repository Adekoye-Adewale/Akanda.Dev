'use client'
import React from 'react'
import { useTransform, motion } from "framer-motion";
import { Heading } from '../text'
import styles from './hero.module.css'

export default function HomeHero({ scrollYProgress, Hero }) {

    const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
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
            <Heading head={Hero}/>
        </motion.div>
    )
}
