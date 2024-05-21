import React from 'react'
import Cards from './cards'
import { portfolioList } from '@/webContents/portfolioPageCopy'

export default function PortfolioLists() {
    return (
        <div>
            <Cards CardList={portfolioList}/>
        </div>
    )
}
