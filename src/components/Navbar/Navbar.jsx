import React from 'react';
import styles from './Navbar.module.css';
import NavItem from './NavItem/NavItem';

const Navbar = (props) => {
	return (
		<nav className={styles.nav}>
			<NavItem id={"/profile"} name={"Profile"}/>
			<NavItem id={"/friends"} name={"Friends"}/>
			<NavItem id={"/dialogs"} name={"Dialogs"}/>
			<NavItem id={"/news"} name={"News"}/>
			<NavItem id={"/music"} name={"Music"}/>
			<NavItem id={"/settings"} name={"Settings"}/>
		</nav>
	)
};

export default Navbar;