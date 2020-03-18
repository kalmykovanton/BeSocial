import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import FriendsContainer from "./components/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Footer from "./components/Footer/Footer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
	return (
			<div className={"app-wrapper"}>
				<Header/>
				<Navbar/>
				<div className={"app-wrapper-content"}>
					<Route path={'/profile'} render={() => <ProfileContainer />}/>
					<Route path={'/friends'} render={() => <FriendsContainer />}/>
					<Route path={'/dialogs'} render={() => <DialogsContainer />}/>
					<Route path={'/users'} render={() => <UsersContainer />}/>
					<Route path={'/news'} component={News}/>
					<Route path={'/music'} component={Music}/>
					<Route path={'/settings'} component={Settings}/>
				</div>
				<Footer/>
			</div>
	);
}

export default App;
