import Cards from './cards'
import { worksList } from '@/webContents/portfolioPageCopy';

export default async function PortfolioLists() {
    return (
        <>
            <Cards 
                CardList={worksList}
            />
        </>
    )
}
