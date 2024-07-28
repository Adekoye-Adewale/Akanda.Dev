import React from 'react'
import { Body, SubTitle, Title } from '../text'
import { FadeIn, FadeInLeft } from '../ui/enteranceAnimation'
import { Hobby } from '@/webContents/aboutPage'
import style from './about.module.css'

export default function Interest() {
    return (
        <section className={style.intro__sec}>
            <FadeInLeft 
                delay={'.5'}
            >
                <div className={style.hobby__title}>
                    <Title title={Hobby.title}/>
                </div>
            </FadeInLeft>
            <FadeIn>
                <Tabs/>
            </FadeIn>
        </section>
    )
}

const Tabs = () => {
    return (
        <div  className={style.interest__tabs__wrapper}>
            {Hobby.interest.map( ( items, i ) => (
                <Tab
                    key={i}
                    label={items.label}
                    body={items.body}
                />
            ))}
        </div>
    )
}

const Tab = ({ label, body }) => {
    return (
        <div className={style.interest__tab__wrap}>
            <span></span>
            <SubTitle 
                subTitle={label}
            />
            <Body 
                text={body}
            />
        </div>
    )
}
