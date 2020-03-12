import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator}
    from './../../../redux/DialogsReducer';
import NewMessage from './NewMessage';

const NewMessageContainer = (props) => {

    let newMessageText = props.store.getState().dialogsPage.newMessageText;

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    const clearTextArea = () => {
        props.store.dispatch(updateNewMessageTextActionCreator(''));
    }

    const changeText = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <NewMessage clearTextArea={clearTextArea}
                    addMessage={addMessage}
                    changeText={changeText}
                    newMessageText={newMessageText}/>
    )
};

export default NewMessageContainer;