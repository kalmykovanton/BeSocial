import React from 'react';
import styles from './MyPosts.module.css';
import PostsContainer from "./Posts/PostsContainer";
import NewPostContainer from "./NewPost/NewPostContainer";

const MyPosts = (props) => {
	return (
		<div className={styles.container}>
			<h3>My Posts</h3>
			<NewPostContainer />
			<PostsContainer />
		</div>
	)
};

export default MyPosts;