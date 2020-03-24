import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Friend from './../Friends/Friend/Friend';
import NewMessageContainer from './NewMessage/NewMessageContainer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {

	let dialogsItem = state.dialogsPage.dialogs
		.map( dialog => <DialogItem id={dialog.id} name={dialog.name}/> );

	let messagesItem = state.dialogsPage.messages
		.map( message => <Message id={message.id} message={message.message}/> );

	return {
		dialogsItem: dialogsItem,
		messagesItem: messagesItem,
		isAuth: state.auth.isAuth
	}
};

const mapDispatchToProps = (dispatch) => {
	return {

	}
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;