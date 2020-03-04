import React from 'react';
import styles from './Profile.module.css';
import Banner from "./Banner/banner";
import Info from "./Info/Info";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {

return (
		<div className={styles.content} >
			<Banner/>
			<Info/>
			<MyPosts state={props.state}/>
		</div>
	)
};
export default Profile;