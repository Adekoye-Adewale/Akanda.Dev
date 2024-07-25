import React from 'react'
import { Heading } from '@/components/text'
import { ContactPageCopy } from '@/webContents/contactPageCopy'
import BtnWithForm from '@/components/btn/btnWithForm'
import styles from './contactPageContent.module.css'

export default function Hero() {
    return (
        <div 
            className={`${styles.hero__wrapper} grid__center`}
        >
            <Heading 
                head={ContactPageCopy.hero}
            />
            <BtnWithForm 
                text={ContactPageCopy.cta}
            />
        </div>
    )
}