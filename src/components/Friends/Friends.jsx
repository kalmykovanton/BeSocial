import React from 'react';
import styles from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {

	return (
		<div className={styles.container}>
			{props.friendsItem}
		</div>
	)
};

export default Friends;