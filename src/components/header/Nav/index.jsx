import styles from './nav.module.css';
import { motion } from 'framer-motion';
import { links, menuFooterLinks } from '@/webContents/header';
import { perspective, slideIn } from "./anim";
import Link from 'next/link';

export default function Nav() {
    return (
        <div className={styles.nav}>
            <div className={styles.body}>
                {
                    links.map( (link, i) => {
                        const { title, href } = link;
                        return (
                            <div key={`b_${i}`} className={styles.linkContainer}>
                                <motion.div
                                    custom={i}
                                    variants={perspective}
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                >
                                    <Link href={href}>
                                        {title}
                                    </Link>
                                </motion.div>
                            </div>
                        )
                    })
                }
            </div>
            <motion.div className={styles.footer}>
                {
                    menuFooterLinks.map( (link, i) => {
                        const { title, href } = link;
                        return (
                            <motion.a 
                                variants={slideIn}
                                custom={i} 
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                key={`f_${i}`}
                                href={href}
                                target='_blank'
                                rel="nofollow noreferrer"
                                title={title}
                            >
                                {title}
                            </motion.a>
                        )
                    })
                }
            </motion.div>
        </div>
    )
}
