import React from 'react'
import { Heading } from '../text'
import styles from './hero.module.css'

const homeHero = `<span class='italic'>In Business</span> <span>of making everyone </span> <div><span>visible</span> <span>on the internet</span></div>`

export default function HomeHero() {
    return (
        <section className={`${styles.wrapper} grid__center`}>
            <Heading head={homeHero}/>
        </section>
    )
}
