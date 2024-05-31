import { X, Facebook, LinkedIn, Email, ShareLink, PrintPage } from "."
import style from './socialIcons.module.css'

export default function SocialIcon() {
    return (
        <div className={style.icons__wrap}>
            <X/>
            <LinkedIn/>
            <Facebook/>
            <Email title={"title"}/>
            <ShareLink/>
            <PrintPage/>
        </div>
    )
}