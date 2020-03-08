import React from 'react';
import styles from './NewPost.module.css';

const NewPost = (props) => {

    let newPostElement = React.createRef();

    const addPost = () => {
        props.addPost(props.newPostText);
    }

    const clearTextArea = () => {
        props.updateNewPostText('');
    }

    const changeText = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    const pressEnter = (event) => {
        if (event.key == "Enter") {
            addPost();
        }
    }

    return (
        <div className={styles.container}>
			<textarea ref={newPostElement} className={styles.text}
                      placeholder={"what about you thinking?.."} onChange={changeText}
                      value={props.newPostText} onKeyPress={pressEnter}></textarea>
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