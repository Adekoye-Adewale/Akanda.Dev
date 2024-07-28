import { Body, Title } from '../text'
import { FooterCTA } from '@/webContents/ctaCopy'
import style from './siteFooter.module.css'
import BtnWithForm from '../btn/btnWithForm'
import { FadeIn } from '../ui/enteranceAnimation'

export default function CtaWrap() {
    return (
        <div className={style.cta__wrap}>
            <div>
                <FadeIn>
                    <Title title={FooterCTA.main}/>
                </FadeIn>
                <FadeIn delay={0.5}>
                    <Body text={FooterCTA.body}/>
                </FadeIn>
            </div>
            <div className='cta__wrap__button'>
                <BtnWithForm text={FooterCTA.link.text}/>
            </div>

        </div>
    )
}
