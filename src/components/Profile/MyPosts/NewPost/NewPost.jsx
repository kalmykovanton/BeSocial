import React from 'react';
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";
import styles from './NewPost.module.css';
import {Field, reduxForm} from 'redux-form';


const NewPost = (props) => {

    const addPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div >
            <NewPostFormRedux onSubmit={addPost}/>
        </div>
    )
};

const maxLength10 = maxLengthCreator(10);

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.container} >
            <Field component={Textarea}
                   placeholder={"write your post..."}
                   name={"newPostText"}
                   validate={ [ required, maxLength10 ] } />
            <div className={styles.buttons}>
                <button className={`${styles.button} ${styles.post}`}> Post</button>
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
