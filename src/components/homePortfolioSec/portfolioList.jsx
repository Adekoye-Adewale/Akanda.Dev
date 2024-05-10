import React from 'react'
import { Body, SubTitle } from '../text'
import Image from 'next/image'
import style from "./homePortfolioSec.module.css";

export default function PortfolioList({ Works }) {
    return (
        <div className={style.list__wrap}>
            {Works.map((work, index) => (
                <div key={index} className={style.list}>
                    <Body text={work.summary}/>
                    <SubTitle subTitle={work.client}/>
                    <div className={style.img__wrap}>
                        <Image {...work.img}/>
                    </div>
                </div>
            ))}
        </div>
    )
}
