'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getBackgroundColor } from './getBackgroundColor'
import style from './portfolioLists.module.css'

export default function Cards({ CardList }) {

    const [filter, setFilter] = useState('all')

    const filteredList = CardList.filter((card) => {
        if (filter === 'all') return true
        return card.projectFramework.toLowerCase().includes(filter.toLowerCase())
    })

    return (
        <div className={style.parent__wrap}>
            <div className={style.parent__wrap__filter}>
                <label htmlFor="filter">
                    Filter by Project Technology
                </label>
                <select
                    id="filter" 
                    name="filter"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="gohighlevel">GoHighLevel</option>
                    <option value="html & css">HTML & CSS</option>
                    <option value="next js">Next.js</option>
                    <option value="react js">React.js</option>
                    <option value="wordpress">WordPress</option>
                </select>
            </div>
            <div className={style.parent__card__wrap}>
                {filteredList.length > 0 ? (
                    filteredList.map((list) => (
                        <Link
                            {...list.slug}
                            target="_blank"
                            key={list.id}
                            className={style.wrap}
                        >
                            <Card
                                img={list.img}
                                title={list.title}
                                type={list.type}
                            />
                        </Link>
                    ))
                ) : (
                    <p className={style.no__result}>
                        No projects found for this technology.
                    </p>
                )
                }
            </div>
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