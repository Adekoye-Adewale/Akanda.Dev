import React from 'react'
import { Body, Title } from '../text'
import { HomeContent } from '@/webContents/homePage'
import style from './HomeAboutSec.module.css'

export default function HomeAboutSec() {

    return (
        <div className={style.wrap}>
            <div>
                <Title 
                    title={HomeContent.introAbout} 
                />
            </div>
            <div></div>
            <div>
                <Body text={HomeContent.about}/>
            </div>
        </div>
    )
}
