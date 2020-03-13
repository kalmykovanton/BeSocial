import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator}
    from './../../../redux/DialogsReducer';
import NewMessage from './NewMessage';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        changeText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        }
    }
};

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage);

export default NewMessageContainer;