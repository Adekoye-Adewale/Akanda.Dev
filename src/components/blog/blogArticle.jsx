import style from './blog.module.css'

export default function BlogArticle({ blog }) {
    return (
        <article 
            className={style.blog__content__wrap}
        >
            {blog}
        </article>
    )
}
