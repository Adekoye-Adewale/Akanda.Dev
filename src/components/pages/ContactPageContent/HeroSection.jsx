import React from 'react'
import { Heading } from '@/components/text'
import styles from './contactPageContent.module.css'
import PriBtn from '@/components/btn/priBtn'

const ContactHero = `<span class='hello italic'>Hello </span><span>Let's Connect, Meet,</span><span>Drink, and Work Together.</span>`

export default function Hero() {
    return (
        <div className={`${styles.hero__wrapper}`}>
            <Heading head={ContactHero}/>
            <PriBtn text={'Arrange a meeting'} href={'/'}/>
        </div>
    )
}