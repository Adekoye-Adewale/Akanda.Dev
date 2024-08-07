import React from 'react'
import { Title } from '../text'
import { HomeContent } from '@/webContents/homePage';
import style from "./homePortfolioSec.module.css";
import PortfolioList from './portfolioList';


export default function HomePortfolioSec() {
    return (
        <div className={style.wrap}>
            <Title title={HomeContent.portfolioTitle}/>
            <PortfolioList/>
        </div>
    )
}
