import React, {Component} from 'react';
import Profile from './../Profile/Profile';
import {setUserProfile} from './../../redux/ProfileReducer';
import {connect} from 'react-redux';
import * as axios from 'axios';

class ProfileContainer extends Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
			.then( response => {
				this.props.setUserProfile(response);
			});
	}

	render() {
		return (
			<Profile {...this.props} profile={this.props.profile}/>
			)
	}

};

const mapStateToProps = (state) => {
	return ({
		profile: state.profilePage.profile
	});
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);