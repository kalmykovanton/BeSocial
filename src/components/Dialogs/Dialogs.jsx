import React from 'react';
import styles from './Dialogs.module.css';
import NewPost from './../Profile/MyPosts/NewPost/NewPost';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
	return (
		<div className={styles.container}>
			<div className={styles.dialogs}>
				<DialogItem id={1} name={"Olechka"}/>
				<DialogItem id={1} name={"Arthour"}/>
				<DialogItem id={1} name={"Ruslan"}/>
				<DialogItem id={1} name={"Dima"}/>
				<DialogItem id={1} name={"Artyom"}/>
			</div>
			<div className={styles.messagesContainer}>
				<div className={styles.messages}>
					<Message message={"Hello!"}/>
					<Message message={"How are you?"}/>
					<Message message={"Have a nice day!"}/>
				</div>
				<NewPost placeholder={"Your message..."}/>
			</div>
		</div>
	)
};

export default Dialogs;