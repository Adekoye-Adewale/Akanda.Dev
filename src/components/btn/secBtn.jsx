import Link from 'next/link'
import style from './btn.module.css'

export default function SecBtn({ text, href }) {
    return (
        <Link 
            href={href} 
            title={text}
            className={style.sec__btn}
        >
            <button className={style.button}>
                <PerspectiveText
                    label={text}
                />
            </button>
        </Link>
    )
}

function PerspectiveText({label}) {
    return (    
        <div className={style.perspectiveText}>
            <span>{label}</span>
            <span>{label}</span>
        </div>
    )
}