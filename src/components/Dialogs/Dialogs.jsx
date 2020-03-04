import React from 'react';
import styles from './Dialogs.module.css';
import NewPost from './../Profile/MyPosts/NewPost/NewPost';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

	let dialogs = [
		{id: 1, name: "Olechka"},
		{id: 2, name: "Arthour"},
		{id: 3, name: "Ruslan"},
		{id: 4, name: "Dima"},
		{id: 5, name: "Artyom"}
	];

	let messages = [
		{id: 1, message: "Hello!"},
		{id: 2, message: "How are you?"},
		{id: 3, message: "Have a nice day!"},
		{id: 4, message: "I'm fine))"},
		{id: 5, message: "Good Bye!"}
	];

	let dialogsItem = dialogs
		.map( dialog => <DialogItem id={dialog.id} name={dialog.name}/> );

	let messagesItem = messages
		.map( message => <Message id={message.id} message={message.message}/> );

	return (
		<div className={styles.container}>
			<div className={styles.dialogs}>
				{dialogsItem}
			</div>
			<div className={styles.messagesContainer}>
				<div className={styles.messages}>
					{messagesItem}
				</div>
				<NewPost placeholder={"Your message..."}/>
			</div>
		</div>
	)
};

export default Dialogs;