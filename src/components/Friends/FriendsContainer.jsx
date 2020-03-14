import React from 'react';
import styles from './Friends.module.css';
import Friend from './Friend/Friend';
import Friends from './Friends';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	let friendsItem = state.friendsPage.friends
		.map( friend => <Friend name={friend.name}
								img={friend.img}
								id={friend.id}/>);
	return {
		friendsItem: friendsItem
	}
};

const mapDispatchToProps = (dispatch) => {
	return {

	}
};

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;