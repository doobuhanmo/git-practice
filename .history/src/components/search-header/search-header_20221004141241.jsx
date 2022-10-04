import styles from "./search-header.module.css"

import React from 'react';

const SearchHeader = (props) => {
    const onClick = () => {
        console.log('onclick');

    };

    const onKeyPress = () => {
        console.log('key pressed');

    };
    return (
        <header className ={styles.header}>
            <div className={styles.logo}>
                <img className ={styles.img} src ="/img/logo.png" alt= "logo" />
                <h1 className ={styles.title}>Youtube</h1>
            </div>
            <input className ={styles.input} type="search" placeholder="search.." onKeyPress={onKeyPress}/>
            <button className ={styles.button} type="submit" onClick={onclick}>
                <img className={styles.buttonImg} src="/images/search.png" alt="search" />
            </button>

        </header>
    )
};

export default SearchHeader;