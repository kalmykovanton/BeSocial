import React from 'react';
import styles from './MyPosts.module.css';
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";

const MyPosts = (props) => {
	return (
		<div className={styles.container}/* posts={props.posts}*/>
			<h3>My Posts</h3>
			<NewPost placeholder={"what about you thinking?.."} addPost={props.addPost}/>
			<Posts state={props.state.posts}/>
		</div>
	)
};

export default MyPosts;