import React, {Component} from 'react';
import Profile from './../Profile/Profile';
import {getUserProfile} from './../../redux/ProfileReducer';
import {connect} from 'react-redux';
import {withRouter, Redirect} from 'react-router-dom';
import {withAuthRedirect} from './../hoc/withAuthRedirect.jsx';
import {compose} from 'redux';

class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId)
            userId = 2;
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default compose(connect(mapStateToProps, {getUserProfile}),
    withRouter
)(ProfileContainer);