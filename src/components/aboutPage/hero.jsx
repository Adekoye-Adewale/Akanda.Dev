'use client'
import { useRef} from 'react'
import { useScroll, useTransform, motion } from "framer-motion";
import Image from 'next/image'
import style from './about.module.css'
import akandaDev from '../../../public/images/akandaDevDark.svg'

export default function Hero() {
    
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    }) 

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 500]);
    const backgroundColor = useTransform(scrollYProgress, [0, 1], ["#ffffff", '#000000']);
    const opacity = useTransform(scrollYProgress, [0, 0.65, 1], [0, 0, 1]);
    const filter = useTransform(scrollYProgress, [0, 0.6], ["blur(0) brightness(1)", "blur(10px) brightness(0)"]);
    const transform = useTransform(scrollYProgress, [0, 0.5, 1], 
        ["scale(0.8) translateX(0px)", "scale(1) translateX(-175px)", "scale(50) translateX(-175px)"]);

    return (
        <section className={style.hero} ref={container}>
            <motion.div
                className={style.hero__sec__one}
                style={{
                    transform,
                    backgroundColor
                }} 
                transition={{ 
                    duration: 0.5, 
                    type: "spring", 
                    stiffness: 100, 
                    ease: "easeInOut"
                }}
            >
                <h1>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                </h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                </p>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                </p>
                {/* <Image 
                    src={akandaDev} 
                    alt={"akanda dev image identity"} 
                    title={"akanda dev image identity"} 
                    width={774} 
                    height={130}
                /> */}
                <motion.div 
                    style={{
                        filter
                    }}
                    className={style.hero__logo}
                >                    
                </motion.div>
            </motion.div>
            <motion.div
                style={{
                    opacity
                }} 
                transition={{ 
                    duration: 0.5, 
                    type: "spring", 
                    stiffness: 100, 
                    ease: "easeInOut"
                }}
            >
                <h1>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                </h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                </p>
            </motion.div>
        </section>
    )
}
