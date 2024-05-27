import Link from "next/link";
import Image from "next/image"
import style from './blog.module.css'

export default function Cards({ Contents }) {
    // const Contents = articlePageCopy;
    return (
        <div className={style.archive__cards}>
            {Contents.map (( card ) => (
                <Link 
                    href={card.slug}
                    title={card.title}
                    target="__blank"
                    className={style.archive__card}
                    key={card.id}
                >
                    <Card 
                        img={card.img} 
                        title={card.title}
                    />
                </Link>
            ))}
        </div>
    )
}

const Card = ({ img, title }) => {
    return (
        <>
            <div 
                className={`${style.archive__card__img__wrap}`}
            >
                 <Image {...img}/>
            </div>
            <span className={style.archive__card__title}>
                {title}
            </span>
        </>
    )
}