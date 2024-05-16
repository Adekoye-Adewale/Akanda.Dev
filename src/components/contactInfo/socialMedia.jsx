import React from 'react'
import { Title } from '../text'
import Link from 'next/link'
import Image from 'next/image'
import Magnetic from '../magnetic'
import style from './contactInfo.module.css'

export default function SocialMedia({ title, Socials }) {
    return (
        <div className={style.social}>
            <Title title={title}/>
            <div>
                {Socials.map(( social, index ) => (
                    <div key={index}>
                        <Link {...social.url}>
                            <Magnetic>
                                <Image {...social.img}/>
                            </Magnetic>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
