import React from 'react'
import './Button.css'

export const Button = ({children, type = "primary"}) => {
    return (
        <button className={`Button btn-${type}`}>
            {children}
        </button>
    )
}
