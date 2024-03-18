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
                                    <Link 
                                        href={href} 
                                        title={title}
                                        className={`perspective__text`}
                                        onClick={() => handleSeeMoreClick(facts, setFacts)}
                                    >
                                        <span>{title}</span>
                                        <span>{title}</span>
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
                                className={`perspective__text`}
                                key={`f_${i}`}
                                href={href}
                                title={title}
                                target='_blank'
                                rel="nofollow noreferrer"
                            >
                                <span>{title}</span>
                                <span>{title}</span>
                            </motion.a>
                        )
                    })
                }
            </motion.div>
        </div>
    )
}
