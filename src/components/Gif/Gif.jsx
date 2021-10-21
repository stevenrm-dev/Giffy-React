import React from 'react';
import './Gif.css';

import {Link} from 'wouter';

export default function Gif({title, id, url}) {
    return(
        <Link to={`#${id}`} className='Gif'>
            <h6 className='Gif-tx'>{title}</h6>
            <img className='Gif-img' alt={title} src={url} loading='lazy' />
        </Link>
    )
}