import React from 'react';
import styles from './NewPost.module.css';

const NewPost = (props) => {
	return (
		<div className={styles.container}>
			<textarea className={styles.text} placeholder={props.placeholder}>
			</textarea>
			<div className={styles.buttons}>
				<button className={`${styles.button} ${styles.post}`}>Post</button>
				<button className={`${styles.button} ${styles.clear}`}>Clear</button>
			</div>
		</div>
	)
};

export default NewPost;