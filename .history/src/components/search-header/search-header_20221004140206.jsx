import styles from "./search-header.module.css"

import React from 'react';

const SearchHeader = (props) => {
    return (
        <header className ={styles.header}>
            <img className ={styles.img} src ="/img/logo.png" alt= "logo" />
            <h1 className ={styles.title}>Youtube</h1>
            <input className ={styles.input} type="search" placeholder="search.." />
            <button className ={styles.button} type="submit">
                <img src="/images/search.png" alt="search" />
            </button>

        </header>
    )
};

export default SearchHeader;