import React from 'react';
import styles from './../../Profile/MyPosts/NewPost/NewPost.module.css';

const NewMessage = (props) => {

    const addMessage = () => {
        props.addMessage();
    }

    const clearTextArea = () => {
        props.updateNewMessageText('');
    }

    const changeText = (event) => {
        let text = event.target.value;
        props.updateNewMessageText(text);
    }

    const pressEnter = (event) => {
        if (event.key == "Enter") {
            props.addMessage();
        }
    }

    return (
        <div className={styles.container}>
			<textarea className={styles.text}
                      placeholder={"Your message..."}
                      onChange={changeText}
                      value={props.newMessageText}
                      onKeyPress={pressEnter}>
            </textarea>
            <div className={styles.buttons}>
                <button onClick={addMessage}
                        className={`${styles.button} ${styles.post}`}>Send
                </button>
                <button onClick={clearTextArea}
                        className={`${styles.button} ${styles.clear}`}>Clear
                </button>
            </div>
        </div>
    )
};

export default NewMessage;