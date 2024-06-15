import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { SubTitle, Title } from '../text'
import Slider from './slider'
import style from './projectPage.module.css'
import PriBtn from '../btn/priBtn';

export default function MainContent({ mainWorksCopy, imgList }) {
    return (
        <section className={`${style.main__copy__content__sec}`}>
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
    const { title, serviceProvided, objectiveSummary, mainService, mainDescription, techList, link } = mainWorksCopy

    const summary = documentToReactComponents(objectiveSummary);
    const description = documentToReactComponents(mainDescription);

    return (
        <div className={style.left__content__sec}>
            <div>
                <Title 
                    title={`${title} ${serviceProvided}`}
                />
                <div>
                    {summary}
                </div>
            </div>
            <div>
                <SubTitle 
                    subTitle={mainService}
                />
                <div>
                    {description}
                </div>
            </div>
            <div>
                <SubTitle 
                    subTitle={"Tech Stack & Major Plugins"}
                />
                <ul>
                    {techList.map(( list, index ) => (
                        <li 
                            key={index}
                        >
                            {list}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <PriBtn 
                    text={"Visit Site"} 
                    href={link}
                    target={"_blank"}
                />
            </div>
        </div>
    )
}

const Right = ({ imgList }) => {
    return (
        <div className={`${style.right__content__sec} portfolio__page__slider`}>
            <Slider 
                imgList={imgList}
            />
        </div>
    )
}