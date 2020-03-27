import React from 'react';
import styles from './NewPost.module.css';
import {Field, reduxForm} from 'redux-form';

const NewPost = (props) => {

    const addPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={styles.container}>
			<NewPostFormRedux onSubmit={addPost} />
        </div>
    )
};

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
			<Field className={styles.text}
                   component={"textarea"}
                    placeholder={"write your post..."}
                    name={"newPostText"}/>
            <div className={styles.buttons}>
                <button className={`${styles.button} ${styles.post}`}> Post </button>
                {/*<button onClick={clearTextArea}
                        className={`${styles.button} ${styles.clear}`}>Clear
                </button>*/}
            </div>
        </form>
    )
};

const NewPostFormRedux = reduxForm({
    form: "profileNewPostForm"
})(NewPostForm);

export default NewPost;
