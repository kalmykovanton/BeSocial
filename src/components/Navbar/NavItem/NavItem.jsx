import React from 'react';
import styles from './NavItem.module.css';
import {NavLink} from 'react-router-dom';

const NavItem = (props) => {
	return (
		<div className={styles.item}>
			<NavLink to={props.id} activeClassName={styles.active}>{props.name}</NavLink>
		</div>
	)
};

export default NavItem;