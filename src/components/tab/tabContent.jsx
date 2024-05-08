import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Body } from '../text'
import style from './tab.module.css'

const tabContentImgVariants = {
    initial: { 
                y: 10, 
                x: -10,
                opacity: 0 
            },
    enter: { 
                y: 0,
                x: 0, 
                opacity: 1 
            },
    exit: { 
                y: -10, 
                x: -10,
                opacity: 0 
            }
}

const tabContentCopyVariants = {
    initial: { 
                y: 10, 
                x: 10,
                opacity: 0 
            },
    enter: { 
                y: 0,
                x: 0, 
                opacity: 1,
                transition: { 
                    delay: .1,
                    duration: 0.5, 
                    type: "tween",
                    opacity: {
                        duration: 0.8,
                        delay: 0.25,
                    }
                }
            },
    exit: { 
                y: -10, 
                x: 10,
                opacity: 0,
            }
}

export default function TabContent({ img, text, link }) {

    const aspectRatio = img.width / img.height;

    const styles = {
        maxWidth: `${img.width}px`,
        maxHeight: `${img.height}px`,
        aspectRatio: `${aspectRatio}`,
    };

    return (
        <div className={style.tab__content_box}>
            <AnimatePresence>
                <motion.div 
                    className={style.tab__img}
                    variants={tabContentImgVariants}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    transition={{ duration: .3 }}
                >
                    <Image {...img} style={styles}/>
                </motion.div>
                <motion.div 
                    key={link.title}
                    className={style.tab__copy}
                    variants={tabContentCopyVariants}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    transition={{ duration: .5 }}
                >
                    <Body text={text}/>
                    <Link {...link}>
                        {link.title}
                    </Link>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
