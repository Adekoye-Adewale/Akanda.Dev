import React from 'react'
import { Body, SubTitle, Title } from '@/components/text'
import Tab from '@/components/tab'
import { HomeContent } from '@/webContents/homePage'
import style from './homePage.module.css'
import Accordion from '@/components/accordion'
import { FAQ } from '@/webContents/faq'
import SecBtn from '@/components/btn/secBtn'

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
            <section className={style.faq__sec}>
                <div>
                    <Title title={HomeContent.faq.title}/>
                </div>
                <div>
                    <Body text={HomeContent.faq.desc}/>
                    <SecBtn {...HomeContent.faq.btn}/>
                </div>
                <Accordion Content={FAQ}/>
            </section>
        </>
    )
}
