import React from 'react';
import {addMessage} from './../../../redux/DialogsReducer';
import NewMessage from './NewMessage';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {

    }
};

const NewMessageContainer = connect(mapStateToProps, {addMessage})(NewMessage);

export default NewMessageContainer;