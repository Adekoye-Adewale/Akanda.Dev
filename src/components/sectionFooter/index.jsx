'use client'
import React, { useRef } from 'react'
import { circInOut, motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { Body } from '../text'
import style from './sectionFoot.module.css'

export default function SectionFoot() {
    
    const container = useRef();

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["end 99.5%", "end 90%"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [ 0, -180], { ease: circInOut });
    const opacity = useTransform(scrollYProgress, [0, 0.6], [ 1, 0], { ease: circInOut });
    const maxHeight = useTransform(scrollYProgress, [0, 1], [ 80, 0]);
    const paddingBottom = useTransform(scrollYProgress, [0, 1], [ 20, 0]);
    const paddingTop = useTransform(scrollYProgress, [0, 1], [ 20, 0]);

    console.log('=============', opacity);
    console.log('+++++++++++++', scrollYProgress);

    return (
        <motion.div 
            className={`${style.wrap} sec__foot`}
            ref={container}
            style={{
                maxHeight, paddingTop, paddingBottom
            }}
        >
            <motion.div
                style={{
                    opacity,
                    y
                }}
            >
                <Link 
                    href={'https://mobile.twitter.com/__akanda__'} 
                    target={'_blank'}
                    title={'Twitter Link'}
                >
                    @__akanda__
                </Link>
            </motion.div>
            <motion.div
                style={{
                    opacity,
                    y
                }}
            >
                <Body 
                    text={"A Creative & Problem Solving Software Engineer From Nigeria"}
                />
            </motion.div>
            <motion.div
                style={{
                    opacity, y
                }}
            >
                <Link 
                    href={''} 
                    target={'_blank'} 
                    title={'GitHub Link'}
                >
                    A Creator of Things On The WorldWideWeb
                </Link>
            </motion.div>            
        </motion.div>
    )
}
