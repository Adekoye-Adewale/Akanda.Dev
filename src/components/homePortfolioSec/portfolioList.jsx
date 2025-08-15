'use client'
import React,{ useRef } from 'react';
import { useScroll, useTransform, motion} from 'framer-motion';
import { Body, SubTitle } from '../text';
import Image from 'next/image';
import Link from 'next/link';
import style from "./homePortfolioSec.module.css";

export default function PortfolioList() {
    const works = [
    {
        id: 1001,
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
        id: 1002,
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
            href: `https://designglaze.com/`,
            title: `Click to visit Design Glaze website`,
        },
    },
    {
        id: 1003,
        client:`BLBrand`,
        summary:`A fashion brand that produces stylish Adire infused with streetwear`,
        img: {
            src: `/images/blbrand.webp`,
            alt: `BLBrand is a fashion brand that produces stylish Adire infused with streetwear to give you a rebrand of Adire in fulfilment of fashion needs.`,
            title: `BLBrand is a fashion brand that produces stylish Adire infused with streetwear to give you a rebrand of Adire in fulfilment of fashion needs.`,
            width: `700`,
            height: `409`,
        },
        url: {
            href: `https://blbrand.shop/`,
            title: `Click to visit BL Brand website`,
        },
    },
]

    return (
        <div className={style.list__wrap}>
            {works.map(( work ) => (
                <div key={work.id} className={style.list}>
                    <div className={style.copy__wrap}>
                        <Body text={work.summary}/>
                        <SubTitle subTitle={work.client}/>
                    </div>
                    <GrowImg 
                        img={work.img}
                        url={work.url}
                    />
                </div>
            ))}
        </div>
    )
}

const GrowImg = ({ img, url }) => {

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
            <Link 
                {...url} 
                target='_blank'
            >
                <LinkArrow/>
            </Link>
            <Image {...img}/>
        </motion.div>
    )
}

const LinkArrow = () => {

    const linkEl = useRef(null);
    const { scrollYProgress } = useScroll({
        target: linkEl,
        offset: ['start 0.9', 'start 0.1']
    })

    const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 180, 359]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.5, 0.5]);
    const x = useTransform(scrollYProgress, [0, 0.5, 1], [`-50%`, `-50%`, `-50%`]);
    const y = useTransform(scrollYProgress, [0, 0.5, 1], [`-50%`, `-50%`, `-50%`]);

    return (
        <motion.div 
            ref={linkEl}
            style={{
                scale,
                rotate,
                x,
                y,
            }}
            className={style.link_icon__wrap}
        >
            <svg 
                width="30" 
                height="30" 
                viewBox="0 0 50 50" 
                fill="none" 
                xmlns="https://www.w3.org/2000/svg"
            >
                <path 
                    d="M25 44.25V6.75" 
                    stroke="#C2C2C2" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
                <path 
                    d="M31.25 13L25 6.75L18.75 13" 
                    stroke="white" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
            </svg>
        </motion.div>
    )
}