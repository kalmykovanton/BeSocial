import React from 'react';
import styles from './MyPosts.module.css';
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";

const MyPosts = (props) => {
	return (
		<div className={styles.container}>
			<h3>My Posts</h3>
			<NewPost dispatch={props.dispatch} newPostText={props.state.newPostText}/>
			<Posts state={props.state.posts}/>
		</div>
	)
};

export default MyPosts;