import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss'

const MenuItem = ({head, subtitle, url, size, history, link})=>(
    <div 
        className={`menu-item ${size}`} 
        onClick={()=> history.push(`/${link}`)}
    >
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

export default withRouter(MenuItem);