import React from 'react';
import preloader from './../../../img/spinner.gif';
import styles from './Preloader.module.css';

const Preloader = (props) => {
    return (
            <img src={preloader} alt={"Preloader"} className={styles.preloaderGif} />
    );
}

export default Preloader;