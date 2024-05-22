import { BlogHero } from '@/components/blog/hero'
import CtaWrap from '@/components/siteFooter/ctaWrap'
import React from 'react'

export default function SingleBlogPage({ img, title, type, category, date }) {
    return (
        <main>
            <BlogHero 
                img={img} 
                title={title} 
                type={type} 
                category={category} 
                date={date}
            />
            <CtaWrap/>
        </main>
    )
}
