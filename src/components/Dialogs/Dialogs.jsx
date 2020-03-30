import React from 'react';
import styles from './Dialogs.module.css';
import NewMessageContainer from './NewMessage/NewMessageContainer';

const Dialogs = (props) => {

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