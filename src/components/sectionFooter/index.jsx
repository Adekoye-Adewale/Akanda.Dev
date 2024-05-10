import React from 'react'
import Link from 'next/link'
import { Body } from '../text'
import style from './sectionFoot.module.css'

export default function SectionFoot() {
    return (
        <div className={style.wrap}>
            <Link 
                href={'https://mobile.twitter.com/__akanda__'} 
                target={'_blank'}
                title={'Twitter Link'}
            >
                @__akanda__
            </Link>
            <Body text={"A Creative & Problem Solving Software Engineer From Nigeria"}/>
            <Link 
                href={''} 
                target={'_blank'} 
                title={'GitHub Link'}
            >
                A Creator of Things On The WorldWideWeb
            </Link>
        </div>
    )
}
