import React, {Component} from 'react';
import {getUserStatus, updateUserStatus} from "../../redux/ProfileReducer";
import Profile from './../Profile/Profile';
import {getUserProfile} from './../../redux/ProfileReducer';
import {connect} from 'react-redux';
import {withRouter, Redirect} from 'react-router-dom';
import {compose} from 'redux';

class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId)
            userId = 6437;
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}
            status={this.props.status.data} updateUserStatus={this.props.updateUserStatus} />
        )
    }

}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter
)(ProfileContainer);