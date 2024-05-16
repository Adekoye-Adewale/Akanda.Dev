import React from 'react'
import { Heading } from '@/components/text'
import PriBtn from '@/components/btn/priBtn'
import { ContactPageCopy } from '@/webContents/contactPageCopy'
import styles from './contactPageContent.module.css'

export default function Hero() {
    return (
        <div className={`${styles.hero__wrapper} grid__center full__screen`}>
            <Heading head={ContactPageCopy.hero}/>
            <PriBtn text={'Arrange a meeting'} href={'/'}/>
        </div>
    )
}