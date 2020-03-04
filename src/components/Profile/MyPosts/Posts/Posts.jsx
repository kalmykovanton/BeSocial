import React from 'react';
import styles from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {

	let posts = [
		{
			id: 1,
			message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
			likesCounter: 25,
			date: "XX.XX.XXXX AA:AA"
		},
		{
			id: 2,
			message: "Lorem ipsum dolor sit amet.",
			likesCounter: 44,
			date: "YY.YY.YYYY BB:BB"
		},
		{
			id: 3,
			message: "Lorem ipsum dolor sit amet, consectetur adipisicing " +
				"elit. Corporis dolores earum ex non perspiciatis quia, totam.",
			likesCounter: 60,
			date: "ZZ.ZZ.ZZZZ CC:CC"
		}
	];

	let postsItems = posts
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