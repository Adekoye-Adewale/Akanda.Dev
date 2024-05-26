import Image from 'next/image'
import { Heading } from '../text'
import style from './blog.module.css'

export default function ArchiveHero() {
    return (
        <div 
            className={style.hero__wrap}
        >
            <Blink type={'Blogs'}/>
            <div className={style.hero__title__wrap}>
                <Heading 
                    head={`My Latest Articles`} 
                />
            </div>
        </div>
    )
}


export const BlogHero = ({ img, title, type, category, date }) => {
    return (
        <div className={style.blog__hero__wrap}>
            <div className={style.blog__hero__img__wrap}>
                <Image {...img}/>
            </div>
            <div className={style.blog__hero__copy__wrap}>
                <div>
                    <Heading 
                        head={title}
                    />
                </div>
                <div className={style.hero__metadata__wrap}>
                    <Blink type={type}/>
                    <MetaData title={category}/>
                    <MetaData title={date}/>
                </div>
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