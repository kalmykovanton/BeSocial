import React from 'react';
import styles from './Profile.module.css';
import Info from "./Info/Info";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {

return (
		<div className={styles.content} >
			<Info/>
			<MyPosts state={props.state} addPost={props.addPost}/>
		</div>
	)
};
export default Profile;