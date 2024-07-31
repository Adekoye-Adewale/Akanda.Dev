"use client"
import React, { useState, useEffect } from 'react'
import { motion, useAnimate, stagger } from 'framer-motion'
import { ContactForm } from '../forms'
import { FadeInLeft } from '../ui/enteranceAnimation'
import style from './btn.module.css'

const staggerFormInputs = stagger(0.1, { startDelay: 0.75 });

function useFormAnimation(isActive) {
    const [scope, animate] = useAnimate();
  
    useEffect(() => {
        animate(
            ".stag__form",
            isActive
                ? { 
                    opacity: 1, 
                    width: "100%",
                    maxWidth: "500px",
                    height: "100%",
                    maxHeight: "800px",
                    padding: "30px 20px",
                    marginTop: "20px",
                }
                : { 
                    opacity: 0, 
                    width: "0px",
                    height: "100%",
                    maxHeight: "0px", 
                    padding: "0px 0px",
                    marginTop: "0px",
                },
            {
                type: "tween",
                ease: "circInOut",
                bounce: 0,
                duration: 0.5,
                damping: 3, 
                stiffness: 50,
            }
        );
    
        animate(
            "form",
            isActive
                ? { opacity: 1, scale: 1, filter: "blur(0px)", width: "100%" }
                : { opacity: 0, scale: 0, filter: "blur(20px)", width: "100%" },
            {
                duration: 0.75,
                delay: isActive ? 0.5 : 0.2,
            }
        );
    
        animate(
            ".forms_form__group__ONbro",
            isActive
                ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
            {
                duration: 1.2,
                delay: isActive ? staggerFormInputs : 0,
            }
        );
    }, [isActive]);
  
    return scope;
}

export default function BtnWithForm({ text }) {

    const [ isActive, setIsActive ] = useState(false)
    const scope = useFormAnimation(isActive);

    return (
        <FadeInLeft>
            <div 
                className={`${style.wrapper} main__wrap`}
                ref={scope}
            >
                <motion.button 
                    className={`${style.button} ${style.popup__button}`}
                    onClick={() => setIsActive(!isActive)}
                >
                    <PerspectiveText
                        label={text}
                    />
                </motion.button>
                <div 
                    className={`${style.form_wrap} stag__form`}
                >
                    <ContactForm/>                    
                </div>
            </div>
        </FadeInLeft>        
    )
}

function PerspectiveText({label}) {
    return (    
        <div className={style.perspectiveText}>
            <span>{label}</span>
            <span>{label}</span>
        </div>
    )
}