import React from 'react';
import Image from 'next/image';
import { Body, SubTitle } from '../text';
import { HomeContent } from '@/webContents/homePage';
import style from './about.module.css';

export default function HeroSecTwo() {

    const whyAkandaList = HomeContent.whyAkandaList;

    return (
        <div 
            className={style.hero__two__sec__wrapper}
        >
            {whyAkandaList.map(( list, index ) => (
                <div 
                    key={index}
                    className={style.list__wrap}
                >
                    <div 
                        className={style.list__img__wrap}
                    >
                        <Image 
                            {...list.img}
                        />
                    </div>
                    <div 
                        className={style.list__copy__wrap}
                    >
                        <SubTitle 
                            subTitle={list.title}
                        />
                        <Body 
                            text={list.text}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}
