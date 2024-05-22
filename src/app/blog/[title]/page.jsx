import { SingleBlogPage } from '@/components/pages/blogPageContent'
import React from 'react'

export default function page({ params }) {
    return (
        <>
            <SingleBlogPage 
                img={params.img} 
                title={params.title} 
                type={params.type} 
                category={params.category} 
                date={params.date}
            />
            This is my Dynamic Title: {params.title}
        </>
    )
}
