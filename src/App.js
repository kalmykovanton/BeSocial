import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import './App.css';
import Preloader from "./components/common/Preloader/Preloader";
import HeaderContainer from "./components/Header/HeaderContainer";
import withSuspense from "./components/hoc/withSuspense";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Footer from "./components/Footer/Footer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Login from './components/Login/Login.jsx';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/AppReducer';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const FriendsContainer = React.lazy(() => import('./components/Friends/FriendsContainer'));

class App extends React.Component {

	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialized)
			return (
				<Preloader />
				);

		return (
			<div className={"app-wrapper"}>
				<HeaderContainer/>
				<Navbar/>
				<div className={"app-wrapper-content"}>
					<Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
					<Route path={'/friends'} render={withSuspense(FriendsContainer)}/>
					<Route path={'/dialogs'} render={withSuspense(DialogsContainer)}/>
					<Route path={'/users'} render={withSuspense(UsersContainer)}/>
					<Route path={'/news'} component={News}/>
					<Route path={'/music'} component={Music}/>
					<Route path={'/settings'} component={Settings}/>
					<Route path={'/login'} component={Login}/>
				</div>
				<Footer/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
});


export default compose(
	withRouter,
	connect(mapStateToProps, {initializeApp}))(App);
