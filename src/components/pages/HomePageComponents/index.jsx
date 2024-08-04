'use client'
import { useRef } from 'react'
import { useScroll } from "framer-motion";
import { Body, SubTitle, Title } from '@/components/text'
import { HomeContent, homeHero } from '@/webContents/homePage'
import { FAQ } from '@/webContents/faq'
import Tab from '@/components/tab'
import Accordion from '@/components/accordion'
import SecBtn from '@/components/btn/secBtn'
import SectionFoot from '@/components/sectionFooter'
import HomeAboutSec from '@/components/homeAboutSec'
import HomePortfolioSec from '@/components/homePortfolioSec'
import WhyChoose from '@/components/whyChooseSec'
import HomeHero from '@/components/hero/HomeHero';
import SectionRotate from '@/components/util/sectionRotate';
import CtaWrap from '@/components/siteFooter/ctaWrap';
import style from './homePage.module.css'
import { FadeIn, FadeInLeft } from '@/components/ui/enteranceAnimation';

export default function HomePage() {
    
    return (
        <main>
            <HeroSection 
                Hero={homeHero}
            />
            <SectionRotate className={`${style.about__sec}`}>
                <HomeAboutSec/>
            </SectionRotate>
            <section className={`${style.portfolio__sec}`}>
                <HomePortfolioSec/>
            </section>
            <SectionRotate className={`${style.skill__sec}`}>
                <FadeInLeft className='hidden'>
                    <Title title={"Akanda Skill"}/>
                </FadeInLeft>
                <FadeInLeft 
                    delay={"0.5"} 
                    className={style.skill__sec__title}
                >
                    <SubTitle subTitle={HomeContent.skillTitle}/>
                </FadeInLeft>
                <Tab/>
            </SectionRotate>
            <SectionRotate className={`${style.why__sec}`}>
                <WhyChoose 
                    desc={HomeContent.whyAkanda} 
                    Why={HomeContent.whyAkandaList}
                />
            </SectionRotate>
            <SectionRotate className={`${style.faq__sec}`}>
                <FadeInLeft>
                    <Title title={HomeContent.faq.title}/>
                </FadeInLeft>
                <FadeInLeft
                    delay={"0.5"}
                >
                    <Body text={HomeContent.faq.desc}/>
                    <SecBtn {...HomeContent.faq.btn}/>
                </FadeInLeft>
                <Accordion Content={FAQ}/>
            </SectionRotate>
            <SectionFoot/>
            <CtaWrap/>
        </main>
    )
}


export const HeroSection = ({ Hero, className }) => {
    const hero = useRef();
    const { scrollYProgress } = useScroll({
        target: hero,
        offset: ["end start", "end end"]
    }) 

    return (
        <section 
            ref={hero} 
            className={className}
        >
            {/* <FadeIn> */}
                <HomeHero 
                    Hero={Hero} 
                    scrollYProgress={scrollYProgress}
                />    
            {/* </FadeIn> */}
        </section>
    )
}