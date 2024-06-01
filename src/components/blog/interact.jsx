import Link from 'next/link'
import { Share } from '../socials'
import style from './blog.module.css'

export default function Interact({ articleSource, sourceLink, title }) {
    return (
        <div className={style.interactive__sec}>
            <Source 
                articleSource={articleSource} 
                articleSourceLink={sourceLink}
            />
            <div className={`${style.interactive__sub__sec} ${style.share__topic}`}>
                <span>
                    Share this article
                </span>
                <Share title={title}/>
            </div>
        </div>
    )
}

export const Source = ({ articleSource, articleSourceLink }) => {
    return (
        <div className={style.interactive__sub__sec}>
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