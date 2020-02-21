import React from 'react'
import {withRouter} from 'react-router-dom'
import './menu-items-component'
import './menu-items-styls.scss'
const MenuItem = ({title, subtitle, imageUrl, size, history, match, linkUrl}) => (
<div  className={`${size } menu-item`} onClick={()=> history.push(`${match.url}${linkUrl}`)} >
<div
    className='background-image'
    style={{
        backgroundImage: `url(${imageUrl})`}}

/>
    <div className='content'>
        <div className='title'>{title.toUpperCase()}</div>
        <span className='subtitle'>{subtitle}</span>
        </div>
    </div>
);
export default withRouter(MenuItem)