'use client'
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { SubTitle } from '../text';
import Image from 'next/image';
import { articlePageCopy } from '@/webContents/blogCopy';
import '@splidejs/react-splide/css/core';
import style from './blog.module.css';
import Link from 'next/link';

export default function RelatedArticles() {
    const Related = articlePageCopy;
    const options = {
        type: 'loop',
        drag: 'free',
        // wheel: true,
        snap: true,
        gap: '2rem',
        perPage: 3,
        perMove: 1,
        autoWidth: 'true',
        cover: true,
        lazyLoad: 'nearby',
        breakpoints: {
            800: {
              perPage: 2,
              gap: '1rem',
              autoHeight : 'true',
            },
        },
        autoplay: true,
        autoScroll: {
            speed: 1,
        },
    };
    
    return (
        <div className={`${style.related__section__wrap} blog__related__section`}>
            <div className={style.related__title}>
                <SubTitle subTitle={'Related Articles'}/>
            </div>
            <div className={style.related__cards__wrap}>
                <Splide options={options}>
                    {Related.slice(0, 3).map((card) => (
                        <Link 
                            href={card.slug} 
                            title={card.title}
                            target='__blank'
                            key={card.id}
                        >
                            <Card 
                                title={card.title} 
                                img={card.img}
                            />
                        </Link>
                    ))}
                </Splide>
            </div>
        </div>
    )
}

const Card = ({ title, img }) => {
    return (
        <SplideSlide 
            className={style.related__articles__wrap}
        >
            <div className={style.related__articles__img__wrap}>
                <Image {...img}/>
            </div>
            <span className={style.related__articles__title}>
                {title}
            </span>
        </SplideSlide>
    )
}