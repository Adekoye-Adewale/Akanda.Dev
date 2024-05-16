import React from 'react'
import List from './list'
import SocialMedia from './socialMedia'
import { Body } from '../text'
import { ContactInfoCopy } from '@/webContents/contactPageCopy'
import style from './contactInfo.module.css'

export default function ContactInfo() {
    return (
        <div className={`${style.contact__info__sec}`}>
            <div className={style.contact__details}>
                <List Lists={ContactInfoCopy.Lists}/>
                <SocialMedia 
                    title={ContactInfoCopy.title} 
                    Socials={ContactInfoCopy.Socials}
                />
            </div>
            <div className={style.contact__desc}>
                <Body text={ContactInfoCopy.text}/>
            </div>
        </div>
    )
}
