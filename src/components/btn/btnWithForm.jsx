`use client`
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import style from './btn.module.css'

export default function BtnWithForm({ text}) {

    const vari = {
        open: {
            width: "480px",
            height: "650px",
            top: "-15px",
            right: "-15px",
            backgroundColor: `#fe0000`,
            transition: { 
                duration: 0.75, 
                type: "tween", 
                ease: [0.76, 0, 0.24, 1]
            },
        },
        closed: {
            width: "100px",
            height: "40px",
            top: "0px",
            right: "0px",
            // transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]}
        }
    }

    const [ useActive, setUseActive ] = useState(false)

    const onClick = () => {
        if (!useActive) {
            setUseActive(true)
        } else{
            setUseActive(false)
        }    
    }

    return (
        <motion.div className={`${style.wrapper}`}>
            <button 
                className={`${style.button} ${style.popup__button}`}
                onClick={onClick}
            >
                <PerspectiveText
                    label={text}
                />
            </button>
            <motion.div 
                className={`${style.form_wrap} ${useActive ? `${style.relative}` : `${style.absolute}`}`}
                variants={vari}
                animate={useActive ? "closed" : "open"}
                initial="closed"
            >

            </motion.div>
        </motion.div>
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