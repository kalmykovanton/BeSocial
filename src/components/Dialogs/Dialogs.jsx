import React from 'react';
import styles from './Dialogs.module.css';
import NewPost from './../Profile/MyPosts/NewPost/NewPost';

const Dialogs = () => {
	return (
		<div className={styles.container}>
			<div className={styles.dialogs}>
				<div className={styles.dialog + ' ' + styles.active}>
					Olechka
				</div>
				<div className={styles.dialog}>
					Arthur
				</div>
				<div className={styles.dialog}>
					Ruslan
				</div>
				<div className={styles.dialog}>
					Dima
				</div>
				<div className={styles.dialog}>
					Artyom
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