'use client'
import React from 'react';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import style from './projectPage.module.css';

export default function Slider({ imgList }) {

    const options = {
        type: 'loop',
        drag: 'free',
        snap: true,
        gap: '1rem',
        padding: '5rem',
        perPage: 2,
        perMove: 1,
        autoWidth: 'true',
        autoHeight : 'true',
        lazyLoad: 'nearby',
        cover: true,
        breakpoints: {
            800: {
                autoHeight : 'true',
            },
        },
    };

    return (
        <Splide options={options}>
            {imgList.map(( list ) => (
                <SplideSlide 
                    className={style.img__slider__wrap}
                    key={list.id}
                >
                    <div className={`${style.img__slide} drag`}>
                        <Image 
                            {...list}
                            layout='responsive' 
                        />
                    </div>
                </SplideSlide>
            ))}
        </Splide>
    )
}
