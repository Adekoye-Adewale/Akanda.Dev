import React from 'react';
import Image from 'next/image';
import { Body, SubTitle } from '../text';
import { Tabs } from '@/webContents/skills';
import style from './about.module.css';

export default function HeroSecTwo() {

    const whyAkandaList = Tabs;

    return (
        <div 
            className={style.hero__two__sec__wrapper}
        >
            <div 
                className={style.list__wrap}
            >
                {whyAkandaList.map((list, i) => (
                    <div 
                        key={i} 
                        style={{ '--r': i }} 
                        className={style.list__copy__wrap}
                    >
                        <div>
                            <SubTitle 
                                subTitle={list.label}
                            />
                        </div>
                        <div 
                            className={style.list__img__wrap}
                        >
                            <Image {...list.aboutImg}/>
                        </div>
                        <div>
                            <Body 
                                text={list.text}
                            />
                        </div>   
                    </div>
                ))}
            </div>
        </div>
    )
}
