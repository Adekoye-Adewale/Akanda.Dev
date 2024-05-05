import Link from 'next/link'
import style from './btn.module.css'

export default function PriBtn({ text, href }) {
    return (
        <Link 
            href={href} 
            title={text}
            className={style.pri__btn}
        >
            <button>
                {text}
            </button>
        </Link>
    )
}