import React from 'react'
import './menu-items-component'
import './menu-items-styls.scss'
const MenuItem = ({title, subtitle, imageUrl, size}) => (
<div  className={`${size } menu-item`}>
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
export default MenuItem