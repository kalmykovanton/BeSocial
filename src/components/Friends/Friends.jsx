import React from 'react';
import styles from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {

	let friendsItem = props.state.friends
		.map( friend => <Friend name={friend.name}
								img={friend.img}
								id={friend.id}/>);

	return (
		<div className={styles.container}>
			{friendsItem}
		</div>
	)
};

export default Friends;