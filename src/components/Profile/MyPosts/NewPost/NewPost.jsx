import React from 'react';
import styles from './NewPost.module.css';

const NewPost = () => {
	return (
		<div className={styles.container}>
			<textarea className={styles.text} placeholder={"what about you thinkin?.."}>
			</textarea>
			<div className={styles.buttons}>
				<button className={styles.button}>Post</button>
				<button className={styles.button}>Clear</button>
			</div>
		</div>
	)
};

export default NewPost;