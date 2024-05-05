import { Body, Title } from '../text'
import PriBtn from '../btn/priBtn'
import { FooterCTA } from '@/webContents/ctaCopy'
import style from './siteFooter.module.css'

export default function CtaWrap() {
    return (
        <div className={style.cta__wrap}>
            <div>
                <Title title={FooterCTA.main}/>
                <Body text={FooterCTA.body}/>
            </div>
            <div>
                <PriBtn {...FooterCTA.link}/>
            </div>
        </div>
    )
}
