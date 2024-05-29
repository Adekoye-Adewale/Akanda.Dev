import style from './blog.module.css'
import BlogArticle from './blogArticle'
import RelatedArticles from './relatedArticles'

export default function BlogBody({ blog, related }) {
    return (
        <div className={style.blog__body}>
            <BlogArticle blog={blog}/>
            {/* <RelatedArticles Related={related}/> */}
        </div>
    )
}
