import React from 'react';
import styles from './Posts.module.css';
import Posts from "./Posts";
import Post from './Post/Post';

const PostsContainer = (props) => {

	let state = props.store.getState().profilePage.posts;

	let postsItems = state
		.map( post => <Post message={post.message}
		                 likesCounter={post.likesCounter}
		                 date={post.date}/> );

	return (
		<Posts postsItems={postsItems}/>
	)
};

export default PostsContainer;