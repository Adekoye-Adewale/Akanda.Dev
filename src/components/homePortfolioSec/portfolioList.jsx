'use client'
import React,{ useRef} from 'react'
import { useScroll, useTransform, motion} from 'framer-motion';
import { Body, SubTitle } from '../text'
import Image from 'next/image'
import style from "./homePortfolioSec.module.css";


export default function PortfolioList() {
    const Works = [
    {
        client:`Mediatek NG`,
        summary:`A media independent company`,
        img: {
            src: `/images/mediatelNG.webp`,
            alt: `Mediatek NG-A media independent company`,
            title: `Mediatek NG-A media independent company`,
            width: `700`,
            height: `409`,
        },
        url: {
            href: `https://www.mediatekng.com/`,
            title: `Click to visit Mediatek NG website`,
        },
    },
    {
        client:`Design Glaze`,
        summary:`uPVC Windows and Doors Installer in United Kingdom`,
        img: {
            src: `/images/design-glaze-uk.webp`,
            alt: `Design Glaze-uPVC Windows and Doors Installer in United Kingdom`,
            title: `Design Glaze-uPVC Windows and Doors Installer in United Kingdom`,
            width: `700`,
            height: `409`,
        },
        url: {
            href: `https://www.mediatekng.com/`,
            title: `Click to visit Mediatek NG website`,
        },
    },
    {
        client:`BLBrand`,
        summary:`A fashion brand that produces stylish adire infused with streetwear`,
        img: {
            src: `/images/blbrand.webp`,
            alt: `BLBrand is a fashion brand that produces stylish adire infused with streetwear to give you a rebrand of Adire in fulfilment of fashion needs.`,
            title: `BLBrand is a fashion brand that produces stylish adire infused with streetwear to give you a rebrand of Adire in fulfilment of fashion needs.`,
            width: `700`,
            height: `409`,
        },
        url: {
            href: `https://www.mediatekng.com/`,
            title: `Click to visit Mediatek NG website`,
        },
    },
]

    return (
        <div className={style.list__wrap}>
            {Works.map(({client, img, summary, url}) => (
                <div key={client} className={style.list}>
                    <div className={style.copy__wrap}>
                        <Body text={summary}/>
                        <SubTitle subTitle={client}/>
                    </div>
                    <GrowImg 
                        img={img}
                    />
                </div>
            ))}
        </div>
    )
}


const GrowImg = ({ img }) => {

    const el = useRef(null);
    const { scrollYProgress } = useScroll({
        target: el,
        offset: ['start 0.8', 'end start']
    })

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.3, 0.5]);
    const radius = useTransform(scrollYProgress, [0, 0.5, 1], [0, 30, 0])

    return (
        <motion.div 
            ref={el}
            style={{scale, borderRadius: radius}}
            className={style.img__wrap}
        >
            <Image {...img}/>
        </motion.div>
    )
}
