import React from 'react';
import styles from './Profile.module.css';
import Info from "./Info/Info";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {

return (
		<div className={styles.content} >
			<Info/>
			<MyPosts />
		</div>
	)
};
export default Profile;