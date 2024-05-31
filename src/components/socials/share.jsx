import { X, Facebook, LinkedIn, Medium, Email, ShareLink, PrintPage } from "."

export default function Share() {
    return (
        <div className={style.icons__wrap}>
            <X/>
            <LinkedIn/>
            <Facebook/>
            <Medium/>
            <Email/>
            <PrintPage/>
            <ShareLink/>
        </div>
    )
}
