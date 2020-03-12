import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Friend from './../Friends/Friend/Friend';
import NewMessageContainer from './NewMessage/NewMessageContainer';

const Dialogs = (props) => {

	let state = props.store.getState().dialogsPage;

	let dialogsItem = state.dialogs
		.map( dialog => <DialogItem id={dialog.id} name={dialog.name}/> );

	let messagesItem = state.messages
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
				<NewMessageContainer store={props.store}/>
			</div>
		</div>
	)
};

export default Dialogs;