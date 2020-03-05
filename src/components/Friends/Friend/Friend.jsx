import React from 'react';
import styles from './Friend.module.css';
import {NavLink} from 'react-router-dom';

const Friend = (props) => {

	return (
		<div className={styles.container}>
			<div><img src="./../../../img/Olechka.jpg" alt="Ava"/></div>
			<h5>{props.name}</h5>
		</div>
	)
};

export default Friend;