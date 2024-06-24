import React from 'react';
import { Heading, SubTitle } from '../text';
import Image from 'next/image';
import { Akanda } from '@/webContents/aboutPage';

export default function IntroSec() {

    const intro = Akanda.alwaysReady

    return (
        <section>
            <div>
                <Heading head={intro.title}/>
            </div>
            <div>
                <Image {...intro.img}/>
            </div>
            <div>
                <SubTitle subTitle={intro.subTitle}/>
            </div>
        </section>
    )
}
