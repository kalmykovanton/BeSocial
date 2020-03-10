import React from 'react';
import styles from './NewPost.module.css';

const NewPost = (props) => {

    let newPostElement = React.createRef();

    const addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }

    const clearTextArea = () => {
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: ''});
    }

    const pressEnter = (event) => {
        if (event.key === "Enter") {
            addPost();
        }
    }

    const changeText = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
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