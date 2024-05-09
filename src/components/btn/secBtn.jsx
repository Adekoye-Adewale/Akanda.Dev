import Link from 'next/link'
import style from './btn.module.css'

export default function SecBtn({ text, href }) {
    return (
        <Link 
            href={href} 
            title={text}
            className={style.sec__btn}
        >
            <button>
                {text}
            </button>
        </Link>
    )
}
