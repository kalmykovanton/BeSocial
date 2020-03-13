import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator}
    from './../../../../redux/ProfileReducer';
import NewPost from './NewPost';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        value: state.profilePage.newPostText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        changeText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        }
    }
};

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;
