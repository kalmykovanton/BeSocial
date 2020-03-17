import React from 'react';
import {connect} from 'react-redux';
import { follow,
         unfollow,
         setUsers,
         setCurrentPage,
         setTotalUsersCount,
         toggleIsFatching } from './../../redux/UsersReducer';
import * as axios from 'axios';
import Users from './Users';

class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFatching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
        &count=${this.props.pageSize}`)
            .then( response => {
                this.props.toggleIsFatching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    setCurrentPage = (data) => {
        const currentPage = data.selected + 1;
        this.props.setCurrentPage(currentPage);
        this.props.toggleIsFatching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}
        &count=${this.props.pageSize}`)
            .then( response => {
                this.props.toggleIsFatching(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return  (<Users setCurrentPage={this.setCurrentPage}
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        isFatching={this.props.isFatching}
        />);
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isFatching: state.usersPage.isFatching
    }
};

const UsersContainer = connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage,
    setTotalUsersCount, toggleIsFatching
    })(UsersAPIContainer);

export default UsersContainer;