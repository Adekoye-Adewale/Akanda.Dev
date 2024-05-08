import React from 'react'
import { SubTitle, Title } from '../text'
import Tab from '../tab'
import { HomeContent } from '@/webContents/homePage'
import style from './homePage.module.css'

export default function HomePage() {
    return (
        <>
            <section className={style.skill__sec}>
                <div className='hidden'>
                    <Title title={"Akanda Skill"}/>
                </div>
                <div className={style.skill__sec__title}>
                    <SubTitle subTitle={HomeContent.skillTitle}/>
                </div>
                <Tab/>
            </section>
        </>
    )
}
