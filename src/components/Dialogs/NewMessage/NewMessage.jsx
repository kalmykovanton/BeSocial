import React from 'react';
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import styles from './../../Profile/MyPosts/NewPost/NewPost.module.css';
import {Field, reduxForm} from 'redux-form';

const maxLength30 = maxLengthCreator(30);

const NewMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
                <Field component={Textarea}
                       validate={ [ required, maxLength30 ] }
                       name={"newMessageBody"}
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