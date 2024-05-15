'use client'
import { useRef} from 'react'
import { useScroll, useTransform, motion } from "framer-motion";

export default function SectionRotate({ className, children }) {

    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 100%", "start 30%"]
    }) 

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

    return (
        <section ref={container} className={className}>
            <motion.div 
                style={{scale, rotate, opacity}} 
                className='full__screen grid__center section__bg container__pad'
            >
                {children}
            </motion.div>
        </section>
    )
}
