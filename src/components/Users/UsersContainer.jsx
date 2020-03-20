import React from 'react';
import {connect} from 'react-redux';
import { follow,
         unfollow,
         setUsers,
         setCurrentPage,
         setTotalUsersCount,
         toggleIsFatching } from './../../redux/UsersReducer';
import Users from './Users';
import {userAPI} from './../../api/api';

class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFatching(true);

        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then( data => {
            this.props.toggleIsFatching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }

    setCurrentPage = (data) => {
        const currentPage = data.selected + 1;

        this.props.setCurrentPage(currentPage);
        this.props.toggleIsFatching(true);

        userAPI.getUsers(currentPage, this.props.pageSize).then( data => {
            this.props.toggleIsFatching(false);
            this.props.setUsers(data.items);
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