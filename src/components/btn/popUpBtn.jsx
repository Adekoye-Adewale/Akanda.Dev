import React from 'react'
import style from './btn.module.css'

export default function PopUpBtn({ text, onClick }) {
    return (
        <button 
            className={style.button}
            onClick={onClick}
        >
            <PerspectiveText
                label={text}
            />
        </button>
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