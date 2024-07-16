import React from 'react'
import { Body, SubTitle, Title } from '../text'
import { Hobby } from '@/webContents/aboutPage'
import style from './about.module.css'

export default function Interest() {
    return (
        <section className={style.intro__sec}>
            <div>
                <Title title={Hobby.title}/>
            </div>
            <Tabs/>
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
