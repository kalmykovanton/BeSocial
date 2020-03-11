import React from 'react';
import styles from './NewPost.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator}
    from './../../../../redux/state';

const NewPost = (props) => {

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const clearTextArea = () => {
        props.dispatch(updateNewPostTextActionCreator(''));
    }

    const pressEnter = (event) => {
        if (event.key === "Enter") {
            addPost();
        }
    }

    const changeText = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={styles.container}>
			<textarea className={styles.text}
                      placeholder={"what about you thinking?.."}
                      onKeyPress={pressEnter}
                      onChange={changeText}
                      value={props.newPostText}></textarea>
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
