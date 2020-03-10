import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Friends from "./components/Friends/Friends";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
	return (
			<div className={"app-wrapper"}>
				<Header/>
				<Navbar/>
				<div className={"app-wrapper-content"}>
					<Route path={'/profile'} render={() =>
						<Profile state={props.state.profilePage} dispatch={props.dispatch}/>}/>
					<Route path={'/friends'} render={() =>
						<Friends state={props.state.friendsPage}/>}/>
					<Route path={'/dialogs'} render={() =>
						<Dialogs state={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
					<Route path={'/news'} component={News}/>
					<Route path={'/music'} component={Music}/>
					<Route path={'/settings'} component={Settings}/>
				</div>
				<Footer/>
			</div>
	);
}

export default App;
