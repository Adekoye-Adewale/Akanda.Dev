import style from './blog.module.css'
import BlogArticle from './blogArticle'
import dynamic from 'next/dynamic';

const RelatedArticles = dynamic(() => import('./relatedArticles'), {
    ssr: false,
});

export default function BlogBody({ blog, related }) {
    return (
        <div className={style.blog__body}>
            <BlogArticle blog={blog}/>
            {related.length > 0 && <RelatedArticles related={related} />}
        </div>
    )
}
