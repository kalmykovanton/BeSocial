import React from 'react';
import Users from './Users';
import styles from './Users.module.css';
import {connect} from 'react-redux';
import {followAC} from './../../redux/UsersReducer';
import {unfollowAC} from './../../redux/UsersReducer';
import {setUserAC} from './../../redux/UsersReducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUserAC(users));
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;