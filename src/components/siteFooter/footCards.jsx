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
                <Link 
                    key={index}
                    href={card.link}
                >
                    <Card 
                        pri={card.pri} 
                        sec={card.sec} 
                    />
                </Link>
            ))}
        </ul>
    )
}

export function Card({ pri, sec }) {
    return (
        <li>
            <div className={style.left}>
                <span className={style.link__pri__text}>
                    {pri}
                </span>
                <span className={style.link__sec__text}>
                    {sec}
                </span>
            </div>
            <div  className={style.right}>
                <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 44.25V6.75" stroke="#C2C2C2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M31.25 13L25 6.75L18.75 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </li>
    )
}