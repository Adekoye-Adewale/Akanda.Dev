import React from 'react'
import style from './blog.module.css'
import { Title } from '../text'
import Image from 'next/image'

export default function ArchiveHero() {
    return (
        <div 
            className={style.hero__wrap}
        >
            <Blink type={'Blogs'}/>
            <div>
                <Title 
                    title={`My Latest Articles`} 
                />
            </div>
        </div>
    )
}


export const BlogHero = ({ img, title, type, category, date }) => {
    return (
        <div className={style.blog__hero__wrap}>
            <Image {...img}/>
            <div>
                <Title 
                    title={title} 
                />
            </div>
            <div className={style.hero__metadata__wrap}>
                <Blink type={type}/>
                <MetaData title={category}/>
                <MetaData title={date}/>
            </div>
        </div>
    )
}

const Blink = ({ type }) => {
    return (
        <div 
            className={style.hero__meta__blink}
        >
            <div 
                className={`${style.hero__blinks}`}
            >
            </div>
            <span>
                {type}
            </span>
        </div>
    )
}


const MetaData = ({ title }) => {
    return (
        <div 
            className={style.metadata}
        >
            <span>
                {title}
            </span>
        </div>
    )
}