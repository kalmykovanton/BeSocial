import React from 'react';
import styles from './MyPosts.module.css';
import NewPostContainer from "./NewPost/NewPostContainer";
import PostsContainer from "./Posts/PostsContainer";

const MyPosts = React.memo(props => {
	console.log('Render');
	return (
		<div className={styles.container}>
			<h3>My Posts</h3>
			<NewPostContainer/>
			<PostsContainer/>
		</div>
	)
});

export default MyPosts;