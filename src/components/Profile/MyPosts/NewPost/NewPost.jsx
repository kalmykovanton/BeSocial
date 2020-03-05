import React from 'react';
import styles from './NewPost.module.css';

const NewPost = (props) => {

	let newPostElement = React.createRef();

	const addPost = () => {

	}

	const clearTextArea = () => {
		newPostElement.current.value = '';
	}

	return (
		<div className={styles.container}>
			<textarea ref={newPostElement} className={styles.text}
			          placeholder={props.placeholder} ></textarea>
			<div className={styles.buttons}>
				<button onClick={ addPost }
				        className={`${styles.button} ${styles.post}`}>Post</button>
				<button onClick={ clearTextArea }
				        className={`${styles.button} ${styles.clear}`}>Clear</button>
			</div>
		</div>
	)
};

export default NewPost;