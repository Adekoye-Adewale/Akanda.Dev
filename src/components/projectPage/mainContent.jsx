import React from 'react'
import { Body, SubTitle, Title } from '../text'
import Slider from './slider'
import style from './projectPage.module.css'

export default function MainContent({ mainWorksCopy, imgList }) {
    return (
        <section className={style.main__copy__content__sec}>
            <Left 
                mainWorksCopy={mainWorksCopy}
            />
            <Right 
                imgList={imgList}
            />
        </section>
    )
}

const Left = ({ mainWorksCopy }) => {
    const { title, serviceProvided, summary, mainService, mainDescription, techList } = mainWorksCopy
    return (
        <div className={style.left__content__sec}>
            <div>
                <Title 
                    title={`${title} ${serviceProvided}`}
                />
                <Body 
                    text={summary}
                />
            </div>
            <div>
                <SubTitle 
                    subTitle={mainService}
                />
                <Body 
                    text={mainDescription}
                />
            </div>
            <div>
                <SubTitle 
                    subTitle={"Tech Stack & Major Plugins"}
                />
                <ul>
                    {techList.map(( list ) => (
                        <li 
                            key={list.id}
                        >
                            {list.tech}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
 const Right = ({ imgList }) => {
    return (
        <div className={style.right__content__sec}>
            <Slider 
                imgList={imgList}
            />
        </div>
    )
 }