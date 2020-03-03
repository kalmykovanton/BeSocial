import React from 'react';
import styles from './Dialogs.module.css';
import NewPost from './../Profile/MyPosts/NewPost/NewPost';
import {NavLink} from 'react-router-dom';

const Dialogs = () => {
	return (
		<div className={styles.container}>
			<div className={styles.dialogs}>
				<div className={styles.dialog}>
					<NavLink to={'/dialogs/1'}>Olechka</NavLink>
				</div>
				<div className={styles.dialog}>
					<NavLink to={'/dialogs/2'}>Arthur</NavLink>
				</div>
				<div className={styles.dialog}>
					<NavLink to={'/dialogs/3'}>Ruslan</NavLink>
				</div>
				<div className={styles.dialog}>
					<NavLink to={'/dialogs/4'}>Dima</NavLink>
				</div>
				<div className={styles.dialog}>
					<NavLink to={'/dialogs/5'}>Artyom</NavLink>
				</div>
			</div>
			<div className={styles.messagesContainer}>
				<div className={styles.messages}>
					<div className={styles.message}>
						Hello!
					</div>
					<div className={styles.message}>
						How are you?
					</div>
					<div className={styles.message}>
						Have a nice day!
					</div>
				</div>
				<NewPost placeholder={"Your message..."}/>
			</div>
		</div>
	)
};

export default Dialogs;