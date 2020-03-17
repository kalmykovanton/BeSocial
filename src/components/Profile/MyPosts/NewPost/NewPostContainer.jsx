import React from 'react';
import {addPost, updateNewPostText} from './../../../../redux/ProfileReducer';
import NewPost from './NewPost';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        value: state.profilePage.newPostText
    }
};

const NewPostContainer = connect(mapStateToProps, { addPost, updateNewPostText })(NewPost);

export default NewPostContainer;
