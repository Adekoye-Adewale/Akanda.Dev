import React from 'react'
import { Body, Title } from '../text'
import style from "./whyChoose.module.css"
import Image from 'next/image'

export default function WhyChoose({ Why, desc }) {
    return (
        <>
            <Title title={'Why choose Akanda.Dev?'}/>
            <div className={style.wrap}>
                <div className={style.copy__wrap}>
                    <Body text={desc}/>
                </div>
                <div className={style.list__wrap}>
                    {Why.map((choose, index)=>(
                        <span key={index}  className={style.list}>
                            {choose.title}
                            <Image {...choose.img}/>
                        </span>
                    ))}
                </div>
            </div>
        </>
    )
}
