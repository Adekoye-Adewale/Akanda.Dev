'use client'
import {useRef} from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Hero from './HeroSection'
import ContactInfo from '@/components/contactInfo'
import ContactCTA from '@/components/contactCTASec'
import SectionRotate from '@/components/util/sectionRotate'
import styles from './contactPageContent.module.css'
import { FadeIn } from '@/components/ui/enteranceAnimation'

export default function ContactPageContent() {
    
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    }) 
    
    return (
        <>
            <div 
                ref={container} 
                className={styles.scroll__ani}
            >
                <HeroSection 
                    scrollYProgress={scrollYProgress}
                />
                <SecTwo 
                    scrollYProgress={scrollYProgress}
                />
            </div>
            <SectionRotate 
                className={`${styles.cta__sec} grid__center full__screen`}
            >
                <ContactCTA/>
            </SectionRotate>
        </>
    )
}

const HeroSection = ({scrollYProgress}) => {

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const filter = useTransform(scrollYProgress, [0, 0.6], ["blur(0) brightness(1)", "blur(10px) brightness(0)"]);

    return (
        <motion.section 
            style={{
                scale, 
                opacity,
                filter
            }} 
            transition={{ 
                duration: 0.5, 
                type: "spring", 
                ease: "easeInOut"
            }}
            className={`${styles.scroll__sec} inline__pad stick`}
        >
            <Hero/>
        </motion.section>
    )

}

const SecTwo = ({scrollYProgress}) => {

    const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
    const backgroundColor = useTransform(scrollYProgress, [0, 1], ['#171717', '#000000']);

    return (
        <motion.section 
            style={
                {
                    scale, 
                    opacity, 
                    backgroundColor
                }
            } 
            className={`${styles.scroll__sec} inline__pad`}
        >
            <FadeIn>
                <ContactInfo/>
            </FadeIn>
        </motion.section>
    )

}