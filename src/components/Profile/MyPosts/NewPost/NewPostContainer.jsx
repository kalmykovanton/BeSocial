import React from 'react';
import {addPost} from './../../../../redux/ProfileReducer';
import NewPost from './NewPost';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {

    }
};

const NewPostContainer = connect(mapStateToProps, { addPost })(NewPost);

export default NewPostContainer;
