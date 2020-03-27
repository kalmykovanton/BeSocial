import React from 'react';
import styles from './../../Profile/MyPosts/NewPost/NewPost.module.css';
import {Field, reduxForm} from 'redux-form';


const NewMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
                <Field component={"textarea"}
                       name={"newMessageBody"}
                       className={styles.text}
                       placeholder={"Your message..."}>
                </Field>
            <div className={styles.buttons}>
                <button className={`${styles.button} ${styles.post}`}> Send </button>
                {/*<button className={`${styles.button} ${styles.clear}`}> Clear </button>*/}
            </div>
        </form>
    )
};

const NewMessage = (props) => {

    const addNewMessage = (values) => {
        props.addMessage(values.newMessageBody);
    };

    return (
        <div className={styles.container}>
            <NewMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
};

const NewMessageFormRedux = reduxForm({
    form: 'dialogsNewMessageForm'
})(NewMessageForm);

export default NewMessage;