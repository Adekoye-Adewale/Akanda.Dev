import React from 'react'
import style from './btn.module.css'

export default function PopUpBtn({ text, onClick }) {
    return (
        <button 
            className={style.button}
            onClick={onClick}
        >
            <div 
                className={style.el}
            >
                <PerspectiveText
                    label={text}
                />
            </div>
            <div 
                className={style.el}
            >
                <PerspectiveText
                    label={text}
                />
            </div>
        </button>
    )
}

function PerspectiveText({label}) {
    return (    
        <div className={style.perspectiveText}>
            <p>{label}</p>
            <p>{label}</p>
        </div>
    )
}