import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Friend from './../Friends/Friend/Friend';
import NewMessage from './NewMessage/NewMessage';

const Dialogs = (props) => {

	let dialogsItem = props.state.dialogs
		.map( dialog => <DialogItem id={dialog.id} name={dialog.name}/> );

	let messagesItem = props.state.messages
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
				<NewMessage dispatch={props.dispatch} newMessageText={props.state.newMessageText}/>
			</div>
		</div>
	)
};

export default Dialogs;