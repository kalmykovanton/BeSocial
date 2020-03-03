import React from 'react';
import styles from './Header.module.css';
import logo from '../../img/logo.png';

const Header = (props) => {
	return (
		<header className={styles.header}>
			<div>
				<img src={logo} alt="Logo"/>
			</div>
			<h1>BeSocial!</h1>
		</header>
	)
};

export default Header;