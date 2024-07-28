import React from 'react';
import { Body, Title } from '../text';
import style from "./whyChoose.module.css";
import { FadeInLeft } from '../ui/enteranceAnimation';

export default function WhyChoose({ Why, desc }) {
    return (
        <>
            <FadeInLeft>
                <Title title={'Why choose Akanda.Dev?'}/>                
            </FadeInLeft>
            <div className={style.wrap}>
                <div className={style.copy__wrap}>
                    <FadeInLeft
                        delay={"500ms"}
                    >
                        <Body text={desc}/>
                    </FadeInLeft>
                </div>
                <div className={style.list__wrap}>
                    {Why.map((choose, index)=>(
                        <div key={index} className={style.list}>
                            <span className={style.hover}></span>
                            <span className={style.list__word}>
                                {choose.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
