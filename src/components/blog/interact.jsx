import Link from 'next/link'
import React from 'react'
import { Share } from '../socials'

export default function Interact({ articleSource, sourceLink, title }) {
    return (
        <div>
            <Source 
                articleSource={articleSource} 
                articleSourceLink={sourceLink}
            />
            <Share title={title}/>
        </div>
    )
}

export const Source = ({ articleSource, articleSourceLink }) => {
    return (
        <div>
            <span>
                Article Source:
            </span>
            <Link 
                href={articleSourceLink || '/'} 
                title={articleSource} 
                target='_blank'
            >
                {articleSource}
            </Link>
        </div>
    )
}