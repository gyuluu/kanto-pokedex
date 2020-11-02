import React from 'react';
import './Searchbox.css';

export const SearchBox = ({placeholder, handleChange}) => {
    return (
        <input className="search-bar" type="search" placeholder={placeholder} onChange={handleChange}/>
    )
}