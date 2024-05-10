import React from 'react'
import style from './HomeAboutSec.module.css'
import { Body, Title } from '../text'

export default function HomeAboutSec() {
    return (
        <div className={style.wrap}>
            <div>
                <Title title={'With a focus on the digital realm, Akanda specializes in website design and development, mobile app development, web analytics, and SEO.'}/>
            </div>
            <div></div>
            <div>
                <Body text={'Akanda forte is taking industry leaders forward with digital products that focuses and meet their wants and needs.'}/>
            </div>
        </div>
    )
}
