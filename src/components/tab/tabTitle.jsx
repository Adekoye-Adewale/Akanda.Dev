import React from 'react'
import style from './tab.module.css'

export default function TabTitleBtn({ text }) {
    return (
        <button className={style.title__btn}>
            {text}
        </button>
    )
}
