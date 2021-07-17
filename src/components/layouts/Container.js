import React from 'react'
import './Container.css'

export const Container = ({children, className='', bgimg='', bgcolor=''}) => {
    return (
        <div 
            className={`Container ${className}`}
            style={{backgroundImage:bgimg, backgroundColor:bgcolor}}
            >
            {children}
        </div>
    )
}
