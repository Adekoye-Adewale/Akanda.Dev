import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Body, SubTitle, Title } from '../text'
import Slider from './slider'
import style from './projectPage.module.css'

export default function MainContent({ mainWorksCopy }) {
    return (
        <section className={style.main__copy__content__sec}>
            <Left 
                mainWorksCopy={mainWorksCopy}
            />
            {/* <Right 
                imgList={imgList}
            /> */}
        </section>
    )
}

const Left = ({ mainWorksCopy }) => {
    const { title, serviceProvided, objectiveSummary, mainService, mainDescription, techList } = mainWorksCopy

    const summary = documentToReactComponents(objectiveSummary);
    const description = documentToReactComponents(mainDescription);

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
                    text={description}
                />
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
        </div>
    )
}

// const Right = ({ imgList }) => {
// return (
//     <div className={style.right__content__sec}>
//         <Slider 
//             imgList={imgList}
//         />
//     </div>
// )
// }