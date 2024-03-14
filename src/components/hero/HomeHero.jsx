import React from 'react'
import { Heading } from '../text'
import styles from './hero.module.css'

const homeHero = `<span class='italic'>In Business</span> of making everyone <span>visible on the internet</span>`

export default function HomeHero() {
    return (
        <section className={`${styles.wrapper} grid__center`}>
            <Heading head={homeHero}/>
        </section>
    )
}
