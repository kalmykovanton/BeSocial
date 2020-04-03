import React from 'react';
import {connect} from 'react-redux';
import {
    getCurrentPage,
    getIsFetching,
    getIsFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/UsersSelectors";
import {
    follow,
    unfollow,
    setCurrentPage,
    requestUsers
} from './../../redux/UsersReducer';
import Users from './Users';
import {compose} from 'redux';
import {withAuthRedirect} from './../hoc/withAuthRedirect.jsx';

class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    setCurrentPage = (data) => {
        const currentPage = data.selected + 1;
        this.props.setCurrentPage(currentPage);
        this.props.requestUsers(currentPage, this.props.pageSize);
    };

    render() {
        return (<Users setCurrentPage={this.setCurrentPage}
                       totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       isFatching={this.props.isFetching}
                       isFollowingInProgress={this.props.isFollowingInProgress}
        />);
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        isFetching: getIsFetching(state),
        isFollowingInProgress: getIsFollowingInProgress(state)
    }
};

export default compose(withAuthRedirect,
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage, requestUsers
    }))(UsersAPIContainer);