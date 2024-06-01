import { X, Facebook, LinkedIn, Medium, Email, ShareLink, PrintPage } from "."
import style from './socialIcons.module.css'

export default function Share({ title }) {
    return (
        <div className={style.icons__wrap}>
            <X/>
            <LinkedIn/>
            <Facebook/>
            <Medium/>
            <Email title={title}/>
            <PrintPage/>
            <ShareLink/>
        </div>
    )
}
