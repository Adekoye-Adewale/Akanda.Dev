import Link from 'next/link'
import Image from 'next/image'
import { getBackgroundColor } from './getBackgroundColor'
import style from './portfolioLists.module.css'

export default function Cards({ CardList }) {
    return (
        <div className={style.parent__wrap}>
            {CardList.map((list) => (
                <Link 
                    {...list.slug} 
                    target='_blank'
                    key={list.id} 
                    className={style.wrap}
                >
                    <Card 
                        img={list.img}
                        title={list.title}
                        type={list.type}
                    />
                </Link>
            ))}
        </div>
    )
};

export const Card = ({ img, title, type }) => {
    const backgroundColor = getBackgroundColor(type);
    return (
        <>
            <div className={style.img__wrap}>
                <Image {...img} /> 
                <div 
                    className={style.img__wrap__label}
                    style={{ backgroundColor }}
                >
                    <span>
                        {type}
                    </span>
                </div>   
            </div>
            <div className={style.copy__wrap}>
                <h4>
                    {title}
                </h4>
            </div>
        </>
    );
}