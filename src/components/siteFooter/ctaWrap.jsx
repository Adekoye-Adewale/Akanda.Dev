import { Body, Title } from '../text'
import { FooterCTA } from '@/webContents/ctaCopy'
import style from './siteFooter.module.css'
import BtnWithForm from '../btn/btnWithForm'

export default function CtaWrap() {
    return (
        <div className={style.cta__wrap}>
            <div>
                <Title title={FooterCTA.main}/>
                <Body text={FooterCTA.body}/>
            </div>
            <div className='cta__wrap__button'>
                <BtnWithForm text={FooterCTA.link.text}/>
            </div>

        </div>
    )
}
