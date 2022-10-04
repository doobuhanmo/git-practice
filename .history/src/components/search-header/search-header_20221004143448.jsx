import styles from "./search-header.module.css"

import React, {useRef} from 'react';

const SearchHeader = props => {
    const inputRef = useRef();
    const handleSearch = () => {
        const value = inputRef.current.value;
        console.log(value);

    }
    const onClick = () => {
        handleSearch();
        console.log('onclick');

    };

    const onKeyPress = () => {
        if (event.key === 'Enter') {
            handleSearch();
        }
        handleSearch();
        console.log('key pressed');

    };
    return (
        <header className ={styles.header}>
            <div className={styles.logo}>
                <img className ={styles.img} src ="/img/logo.png" alt= "logo" />
                <h1 className ={styles.title}>Youtube</h1>
            </div>
            <input ref={inputRef} className ={styles.input} type="search" placeholder="search.." onKeyPress={onKeyPress}/>
            <button className ={styles.button} type="submit" onClick={onClick}>
                <img className={styles.buttonImg} src="/images/search.png" alt="search" />
            </button>

        </header>
    )
};

export default SearchHeader;