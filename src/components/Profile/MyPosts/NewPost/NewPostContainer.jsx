import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator}
    from './../../../../redux/ProfileReducer';
import NewPost from './NewPost';

const NewPostContainer = (props) => {

    const currentValue = props.store.getState().profilePage.newPostText;

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    const changeText = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <NewPost addPost={addPost}
                 changeText={changeText}
                 value={currentValue}/>
    )
};

export default NewPostContainer;
