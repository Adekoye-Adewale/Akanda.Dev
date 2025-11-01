'use client'
import { useRef} from 'react'
import { useScroll, useTransform, motion } from "framer-motion";

export default function SectionRotate(
    { 
        className, 
        children, 
        gridPositionClass = 'grid__center' 
    }) {

    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 100%", "start 30%"]
    }) 

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    // const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

    return (
        <section ref={container} className={className}>
            <motion.div 
                style={{scale, opacity}} 
                transition={{ 
                    duration: 0.5, 
                    type: "spring", 
                    stiffness: 100, 
                    ease: "easeInOut"
                }}
                className={`full__screen ${gridPositionClass} section__bg container__pad`}
            >
                {children}
            </motion.div>
        </section>
    )
}
