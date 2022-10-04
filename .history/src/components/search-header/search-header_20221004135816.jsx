import styles from "./search-header.module.css"

import React from 'react';

const SearchHeader = (props) => {
    return (
        <header>
            <img src ="/img/logo.png" alt= "logo" />
            <h1>Youtube</h1>
            <input type="search" placeholder="search.." />
            <button type="submit">
                <img src="/images/search.png" alt="search" />
            </button>

        </header>
    )
};

export default SearchHeader;