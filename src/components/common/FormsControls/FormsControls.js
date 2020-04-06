import React from 'react';
import styles from './FormsControls.module.css';

const FormControl = ({meta: {touched, error}, children}) => {

    const hasError = touched && error;

    return (
        <div>
            <div className={hasError ? styles.error : ''}>
                {children}
            </div>
            { hasError && <span className={styles.errorMessage}>{error}</span> }
        </div>
    )
};

export const Textarea = (props) => {

    const {input, meta, child, ...restProps} = props;

    return (
        <FormControl {...props}>
            <textarea {...input } {...restProps}
                      className={styles.text} />
        </FormControl>
    )
};

export const Input = (props) => {

    const {input, meta, child, ...restProps} = props;

    return (
        <FormControl {...props}>
            <input {...input } {...restProps}
                   className={styles.input} />
        </FormControl>
    )
};