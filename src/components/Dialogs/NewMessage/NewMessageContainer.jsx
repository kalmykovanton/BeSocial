import React from 'react';
import {addMessage, updateNewMessageText}
    from './../../../redux/DialogsReducer';
import NewMessage from './NewMessage';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText
    }
};

const NewMessageContainer = connect(mapStateToProps, {addMessage, updateNewMessageText})(NewMessage);

export default NewMessageContainer;