import React from 'react'
import Hero from './hero'
import IntroSec from './introSec'
import CtaWrap from '../siteFooter/ctaWrap'
import Interest from './interest'
import SectionFoot from '../sectionFooter'

export default function AboutPageComponent() {
    return (
        <>
            <Hero/>
            <IntroSec/>
            <Interest/>
            <SectionFoot/>
            <CtaWrap/>
        </>
    )
}
