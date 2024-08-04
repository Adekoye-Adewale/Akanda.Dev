import React from 'react'
import { Title } from '../text'
import style from './contactInfo.module.css'
import { SocialIcon } from '../socials'

export default function SocialMedia({ title }) {
    return (
        <div className={style.social}>
            <Title title={title}/>
            <div className={style.socials__wrap}>
                <SocialIcon/>
            </div>
        </div>
    )
}
