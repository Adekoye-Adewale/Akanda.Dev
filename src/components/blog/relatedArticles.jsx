import { SubTitle } from '../text'
import Image from 'next/image'
import style from './blog.module.css'
import { articlePageCopy } from '@/webContents/blogCopy'

export default function RelatedArticles() {
    const Related = articlePageCopy;
    
    return (
        <div className={style.related__section__wrap}>
            <div className={style.related__title}>
                <SubTitle subTitle={'Related Articles'}/>
            </div>
            <div className={style.related__cards__wrap}>
                {Related.slice(0, 3).map((card) => (
                    <Card 
                        key={card.id}
                        title={card.title} 
                        img={card.img}
                    />
                ))}
            </div>
        </div>
    )
}

const Card = ({ key, title, img }) => {
    return (
        <div className={style.related__articles__wrap} key={key}>
            <div className={style.related__articles__img__wrap}>
                <Image {...img}/>
            </div>
            <span className={style.related__articles__title}>
                {title}
            </span>
        </div>
    )
}