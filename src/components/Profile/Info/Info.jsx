import React from 'react';
import styles from './Info.module.css';
import Preloader from './../../common/Preloader/Preloader';
import defaultImage from './../../../img/user1.png';
import ProfileStatus from "./ProfileStatus";

const Info = (props) => {
	if (!props.profile) {
		return <Preloader />
	}

	return (
		<div className={styles.container}>
			<div>
				{
					(!props.profile.photos.large) ?
					<img className={styles.avatar} src={defaultImage} alt="Ava"/>
					: <img className={styles.avatar} src={props.profile.photos.large} alt="Ava"/>
				}
			</div>
			<div className={styles.description}>
				<div className={styles.fullName}>{props.profile.fullName}</div>
				<div>{props.profile.aboutMe}</div>
				<div className={styles.statusContainer}>
					<ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
				</div>
			</div>
		</div>
	)
};

export default Info;