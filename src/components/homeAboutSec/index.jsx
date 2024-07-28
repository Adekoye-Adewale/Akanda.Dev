import React from 'react'
import { Body, Title } from '../text'
import { HomeContent } from '@/webContents/homePage'
import style from './HomeAboutSec.module.css'
import { FadeInLeft, FadeInRight } from '../ui/enteranceAnimation'

export default function HomeAboutSec() {

    return (
        <div className={`${style.wrap}`}>
            <FadeInLeft>
                <Title 
                    title={HomeContent.introAbout} 
                />
            </FadeInLeft>
            <div></div>
            <FadeInRight>
                <Body text={HomeContent.about}/>
            </FadeInRight>
        </div>
    )
}
