import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Friend from './../Friends/Friend/Friend';
import NewMessageContainer from './NewMessage/NewMessageContainer';
import {Redirect} from 'react-router-dom';

const Dialogs = (props) => {

	if (!props.isAuth) return <Redirect to={'/login'}/>

return (
		<div className={styles.container}>
			<div className={styles.dialogs}>
				{props.dialogsItem}
			</div>
			<div className={styles.messagesContainer}>
				<div className={styles.messages}>
					{props.messagesItem}
				</div>
				<NewMessageContainer />
			</div>
		</div>
	)
};

export default Dialogs;