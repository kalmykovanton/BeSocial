import React from 'react';
import styles from './NewPost.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator}
    from './../../../../redux/state';

const NewPost = (props) => {

    let newPostElement = React.createRef();

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

    const changeText = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={styles.container}>
			<textarea ref={newPostElement} className={styles.text}
                      placeholder={"what about you thinking?.."} onKeyPress={pressEnter}
                      onChange={changeText} value={props.newPostText}></textarea>
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
