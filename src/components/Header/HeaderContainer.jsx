import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Header from './Header';
import * as axios from 'axios';
import {setAuthUserData} from './../../redux/AuthReducer';
import {connect} from 'react-redux';

class HeaderContainer extends Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
				withCredentials: true
			})
			.then( response => {
				if (response.data.resultCode === 0)	{
					const {id, email, login} = response.data.data;
					this.props.setAuthUserData(id, email, login);
				}
			});
	}

	render() {
		return <Header {...this.props} />;
	}
};

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
	id: state.auth.id
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);