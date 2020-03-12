import React from 'react';
import styles from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {

return (
		<div className={styles.container}>
			{props.postsItems}
		</div>
	)
};

export default Posts;