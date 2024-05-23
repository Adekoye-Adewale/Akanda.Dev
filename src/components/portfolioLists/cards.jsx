import Link from 'next/link'
import Image from 'next/image'
import style from './portfolioLists.module.css'

export default function Cards({ CardList }) {
    return (
        <div className={style.parent__wrap}>
            {CardList.map((list, index) => (
                <Link 
                    {...list.slug} 
                    key={index} 
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
    return (
        <>
            <div className={style.img__wrap}>
                <Image {...img} />    
            </div>
            <div className={style.copy__wrap}>
                <span>{title}</span>
                <h4>{type}</h4>
            </div>
        </>
    );
}