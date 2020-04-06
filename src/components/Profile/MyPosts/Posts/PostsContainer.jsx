import React from 'react';
import styles from './Posts.module.css';
import Posts from "./Posts";
import Post from './Post/Post';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	let postsItems = [...state.profilePage.posts]
		.reverse()
		.map( post => <Post message={post.message}
							likesCounter={post.likesCounter}
							date={post.date}/> );
	return {
		postsItems: postsItems
	}
};

const PostsContainer = connect(mapStateToProps, null)(Posts);

export default PostsContainer;