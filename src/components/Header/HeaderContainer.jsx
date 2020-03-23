import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Header from './Header';
import {getAuthUserData} from './../../redux/AuthReducer';
import {connect} from 'react-redux';
import {authAPI} from './../../api/api.js';

class HeaderContainer extends Component {

	componentDidMount() {
		this.props.getAuthUserData();
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

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);