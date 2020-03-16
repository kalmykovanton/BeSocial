import React from 'react';
import Users from './Users';
import styles from './Users.module.css';
import {connect} from 'react-redux';
import {followAC} from './../../redux/UsersReducer';
import {unfollowAC} from './../../redux/UsersReducer';
import {setUserAC} from './../../redux/UsersReducer';
import {setCurrentPageAC} from './../../redux/UsersReducer';
import {setTotalUsersCountAC} from './../../redux/UsersReducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize
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
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;