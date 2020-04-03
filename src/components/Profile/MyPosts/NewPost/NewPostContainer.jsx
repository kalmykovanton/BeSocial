import React from 'react';
import {addPost} from './../../../../redux/ProfileReducer';
import NewPost from './NewPost';
import {connect} from 'react-redux';


const NewPostContainer = connect(null, { addPost })(NewPost);

export default NewPostContainer;
