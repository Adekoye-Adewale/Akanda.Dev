"use client"
import React, {useRef} from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import style from './text.module.css'

export function Heading({ head }) {
    return (
        <Reveal>
            <h1 className="cursor__pointer"
                dangerouslySetInnerHTML={{ __html: head }}
            >
            </h1>
        </Reveal>
    )
}

export function Reveal({ children }) {
    return (
        <>
            <motion.div 
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0},
                }}
                initial='hidden'
                animate='visible'
                transition={{ duration: 0.5, delay: 0.05 }}
            >
                {children}
            </motion.div>
        </>
    )
}

export function Title({ title }) {

    const el = useRef(null);

    const { scrollYProgress } = useScroll({
        target: el,
        offset: ['start 0.8', 'start 0.25']
    })

    const words = title.split(' ');

    return (
        <h2 
            className={`cursor__pointer ${style.title}`} 
            ref={el}       
        >
            {words.map((word, i) => {

                const start = i / words.length;
                const end = start + (1 / words.length)   
                
                return <TitleWord 
                            key={i} 
                            range={[start, end]} 
                            progress={scrollYProgress}
                        >
                            {word}
                        </TitleWord>
            })}
        </h2>
    )
}

const TitleWord = ({ children, range, progress }) => {

    const characters = children.split('');
    const amount = range[1] - range[0];
    const step = amount / children.length;
    
    return (
        <span className={style.title__word}>
            {characters.map((character, i) => {
                const start = range[0] + (step * i);
                const end = range[0] + (step * (i + 1));
                return <Character 
                            key={i} 
                            range={[start, end]} 
                            progress={progress}
                        >
                            {character}
                        </Character>
            })}
        </span>
    )
}

const Character = ({ children, range, progress }) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
        <span className={style.title__word}>
            <span 
                className={style.title__shadow}
            >
                {children}
            </span>
            <motion.span 
                style={{opacity}}
            >
                {children}
            </motion.span>
        </span>
    )
}

export function SubTitle({ subTitle}) {
    return (
        <h3 className="cursor__pointer">
            {subTitle}
        </h3>
    )
}
