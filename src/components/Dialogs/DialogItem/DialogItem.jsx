import React from 'react';
import styles from './DialogItem.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {

	const path = `/dialogs/${props.id}`;

	return (
		<div className={styles.dialog}>
			<NavLink to={path} className={styles.nonActive} activeClassName={styles.active}>{props.name}</NavLink>
		</div>
	)
};

export default DialogItem;