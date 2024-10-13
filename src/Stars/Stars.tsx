import Star from './Star/Star.tsx';
import './Star.css';
import { nanoid } from 'nanoid';
import React from 'react';

type StarCount = {
    count: number
}

export const Stars = ({count = 0}: StarCount) => {
    if (Number.isNaN(count)) return null;
    if (count < 1 || count > 5) return null;

    const starsListItem = [];
    
    for(let i = 1; i <= count; i++ ) {
        starsListItem.push(<li key={nanoid()}><Star /></li>);
    }

    return (
        <ul className='card-body-stars'>
            {[starsListItem]}
        </ul>
    )
}

export default Stars;
