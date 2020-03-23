import React from 'react';
import {connect} from 'react-redux';
import { follow,
         unfollow,
         setCurrentPage,
         getUsers } from './../../redux/UsersReducer';
import Users from './Users';

class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    setCurrentPage = (data) => {
        const currentPage = data.selected + 1;
        this.props.setCurrentPage(currentPage);
        this.props.getUsers(currentPage, this.props.pageSize);
    }

    render() {
        return  (<Users setCurrentPage={this.setCurrentPage}
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        isFatching={this.props.isFatching}
                        isFollowingInProgress={this.props.isFollowingInProgress}
                 />);
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isFatching: state.usersPage.isFatching,
        isFollowingInProgress: state.usersPage.isFollowingInProgress
    }
};

const UsersContainer = connect(mapStateToProps, {
    follow, unfollow, setCurrentPage,getUsers })(UsersAPIContainer);

export default UsersContainer;