import React from 'react';
import styles from './NewPost.module.css';

const NewPost = (props) => {

    const addPost = () => {
        props.addPost();
    }

    const clearTextArea = () => {
        props.updateNewPostText('');
    }

    const pressEnter = (event) => {
        if (event.key === "Enter") {
            props.addPost();
        }
    }

    const changeText = (event) => {
        let text = event.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={styles.container}>
			<textarea className={styles.text}
                      placeholder={"write your post..."}
                      onKeyPress={pressEnter}
                      onChange={changeText}
                      value={props.value}></textarea>
            <div className={styles.buttons}>
                <button onClick={addPost}
                        className={`${styles.button} ${styles.post}`}>Post
                </button>
                <button onClick={clearTextArea}
                        className={`${styles.button} ${styles.clear}`}>Clear
                </button>
            </div>
        </div>
    )
};

export default NewPost;
