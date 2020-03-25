import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {withAuthRedirect} from './../hoc/withAuthRedirect.jsx';
import {compose} from 'redux';

const mapStateToProps = (state) => {

    let dialogsItem = state.dialogsPage.dialogs
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);

    let messagesItem = state.dialogsPage.messages
        .map(message => <Message id={message.id} message={message.message}/>);

    return {
        dialogsItem: dialogsItem,
        messagesItem: messagesItem
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);