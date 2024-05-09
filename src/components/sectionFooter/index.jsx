import React from 'react'
import Link from 'next/link'
import { Body } from '../text'

export default function SectionFoot() {
    return (
        <div>
            <Link href={'/'}>
                @__akanda__
            </Link>
            <Body text={"A Creative & Problem Solving Software Engineer From Nigeria"}/>
            <Body text={'A Creator of Things On The WorldWideWeb'}/>
        </div>
    )
}
