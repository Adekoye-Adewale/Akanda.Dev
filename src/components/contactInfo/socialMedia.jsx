import React from 'react'
import { Title } from '../text'
import style from './contactInfo.module.css'
import { SocialIcon } from '../socials'

export default function SocialMedia({ title, Socials }) {
    return (
        <div className={style.social}>
            <Title title={title}/>
            <div>
                <SocialIcon/>
            </div>
        </div>
    )
}
