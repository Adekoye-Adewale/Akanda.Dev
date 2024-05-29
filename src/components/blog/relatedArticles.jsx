'use client'
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { SubTitle } from '../text';
import Image from 'next/image';
import { articlePageCopy } from '@/webContents/blogCopy';
import '@splidejs/react-splide/css/core';
import style from './blog.module.css';
import Link from 'next/link';

export default function RelatedArticles({ Related }) {
    // const Related = articlePageCopy;

    console.log('Relat1::', Related, articlePageCopy );

    const options = {
        type: 'loop',
        drag: 'free',
        snap: true,
        gap: '2rem',
        perPage: 3,
        perMove: 1,
        autoWidth: 'true',
        lazyLoad: 'nearby',
        cover: true,
        breakpoints: {
            800: {
                perPage: 2,
                gap: '1rem',
                autoHeight : 'true',
            },
        },
    };
    
    return (
        <div className={`${style.related__section__wrap} blog__related__section`}>
            <div className={style.related__title}>
                <SubTitle subTitle={'Related Articles'}/>
            </div>
            <div className={style.related__cards__wrap}>
                <Splide options={options}>
                    {Related.map((card) => (
                        <SplideSlide 
                            className={style.related__articles__wrap}
                            key={card.id}
                        >
                            <Card 
                                title={card.title} 
                                img={card.img}
                                slug={card.slug}
                            />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    )
}

const Card = ({ title, img, slug }) => {
    return (
            <Link 
                href={slug} 
                title={title}
                target='__blank'
            >
                <div className={style.related__articles__img__wrap}>
                    <Image {...img}/>
                </div>
                <span className={style.related__articles__title}>
                    {title}
                </span>
            </Link>
    )
}