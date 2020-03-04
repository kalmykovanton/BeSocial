import React from 'react';
import styles from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {

	let postsItems = props.state
		.map( post => <Post message={post.message}
		                 likesCounter={post.likesCounter}
		                 date={post.date}/> );

	return (
		<div className={styles.container}>
			{postsItems}
		</div>
	)
};

export default Posts;