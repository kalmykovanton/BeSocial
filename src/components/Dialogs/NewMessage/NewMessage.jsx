import React from 'react';
import styles from './../../Profile/MyPosts/NewPost/NewPost.module.css';

const NewMessage = (props) => {

    let newMessageElement = React.createRef();

    const addMessage = () => {
        props.addMessage(newMessageElement.current.value);
        newMessageElement.current.value = '';
    }

    const clearTextArea = () => {
        newMessageElement.current.value = '';
    }

    return (
        <div className={styles.container}>
			<textarea ref={newMessageElement} className={styles.text}
                      placeholder={"Your message..."} ></textarea>
            <div className={styles.buttons}>
                <button onClick={ addMessage }
                        className={`${styles.button} ${styles.post}`}>Send</button>
                <button onClick={ clearTextArea }
                        className={`${styles.button} ${styles.clear}`}>Clear</button>
            </div>
        </div>
    )
};

export default NewMessage;