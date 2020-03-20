import React from 'react';
import styles from './Header.module.css';
import logo from '../../img/logo.png';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
	return (
		<header className={styles.header}>
			<div>
				<img src={logo} alt="Logo"/>
			</div>
			<h1>BeSocial!</h1>
			<div className={styles.login}>
				{ props.isAuth ? <NavLink className={styles.loginLink} to={`/profile/${props.id}`}>{props.login}</NavLink>
					: <NavLink to={'/login'} className={styles.loginLink} pathName>Login</NavLink> }
			</div>
		</header>
	)
};

export default Header;