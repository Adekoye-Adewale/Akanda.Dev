import React from 'react'
import Link from 'next/link'
import { FootCard } from '@/webContents/siteFooterCopy'
import style from './siteFooter.module.css'

export default function FootCards() {
    return (
        <div className={style.foot__cards_wrap}>
            <Cards/>
        </div>
    )
}


export function Cards() {
    return (
        <ul>
            {FootCard.map(( card, index ) => (
                <>
                    <li key={index}>
                        <Link
                            href={card.link}
                        >
                            <Card 
                                pri={card.pri} 
                                sec={card.sec} 
                                desc={card.desc}
                            />
                        </Link>
                    </li>
                    <hr />
                </>
            ))}
        </ul>
    )
}

export function Card({ pri, sec, desc }) {
    return (
        <>
            <div className={style.left}>
                <span className={style.link__pri__text}>
                    {pri}
                </span>
                <span className={style.link__sec__text}>
                    {sec}
                </span>
                <span className={style.link__pri__text}>
                    {desc}
                </span>
            </div>
            <div  className={style.right}>
                <div className={style.svg__wrap}>
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 44.25V6.75" stroke="#C2C2C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M31.25 13L25 6.75L18.75 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </>
    )
}