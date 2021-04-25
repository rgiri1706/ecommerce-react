import React from 'react';
import './menu-item.styles.scss'

export const MenuItem = ({head, subtitle, url, size})=>(
    <div className={`menu-item ${size}`} >
        <div 
          className="background-image"
          style={{backgroundImage: `url(${url})`}}
        />  
        <div className="content">
            <h1 className="title">{head.toUpperCase()}</h1>
            <span className="subtitle">{subtitle}</span>    
        </div>
    </div>
);