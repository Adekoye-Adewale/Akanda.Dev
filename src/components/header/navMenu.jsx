'use client';
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Button from './Button';
import Nav from './Nav';
import styles from './navMenu.module.css';

const menu = {
    desktop: {
        open: {
            width: "480px",
            height: "650px",
            top: "-15px",
            right: "-15px",
            transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]}
        },
        closed: {
            width: "100px",
            height: "40px",
            top: "0px",
            right: "0px",
            transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]}
        }
    },
    mobile: {
        open: {
            width: "90vw",
            height: "650px",
            top: "-10px",
            right: "-10px",
            transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]}
        },
        closed: {
            width: "100px",
            height: "40px",
            top: "0px",
            right: "0px",
            transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]}
        }
    }
}

export default function NavMenu() {

    const [isActive, setIsActive] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const variant = isMobile ? menu.mobile : menu.desktop;

    return (
        <div className={styles.wrapper}>
            <motion.div 
                className={styles.menu}
                variants={variant}
                animate={isActive ? "open" : "closed"}
                initial="closed"
            >
                <AnimatePresence>
                    {isActive && <Nav navClose={() => {setIsActive(!isActive)}} />}
                </AnimatePresence>
            </motion.div>
            <Button 
                isActive={isActive} 
                toggleMenu={() => {setIsActive(!isActive)}}
            />
        </div>
    )
}