import React from 'react'
import { HeroSection } from '../HomePageComponents'
import { portfolioHero } from '@/webContents/portfolioPageCopy'
import SectionFoot from '@/components/sectionFooter'
import SectionRotate from '@/components/util/sectionRotate'
import PortfolioLists from '@/components/portfolioLists'
import CtaWrap from '@/components/siteFooter/ctaWrap'

export default function PortfolioContents() {
    return (
        <main>
            <HeroSection 
                className={`portfolio__hero`}
                Hero={portfolioHero}
            />
            <SectionRotate>
                <PortfolioLists/>
            </SectionRotate>
            <SectionFoot/>
            <CtaWrap/>
        </main>
    )
}
