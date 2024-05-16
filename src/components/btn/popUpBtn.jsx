import React from 'react'

export default function PopUpBtn({ text, onClick }) {
    return (
        <button 
            onClick={onClick} 
            data-text={text}
        >
            {text}
        </button>
    )
}
