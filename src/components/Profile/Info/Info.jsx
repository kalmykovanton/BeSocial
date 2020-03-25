import React from 'react';
import styles from './Info.module.css';
import Preloader from './../../common/Preloader/Preloader';
import defaultImage from './../../../img/user1.png';
import ProfileStatus from './ProfileStatus.jsx';

const Info = (props) => {
	if (!props.profile) {
		return <Preloader />
	}

	return (
		<div className={styles.container}>
			<div>
				{
					(!props.profile.data.photos.large) ?
					<img className={styles.avatar} src={defaultImage} alt="Ava"/>
					: <img className={styles.avatar} src={props.profile.data.photos.large} alt="Ava"/>
				}
			</div>
			<div className={styles.description}>
				<div className={styles.fullName}>{props.profile.data.fullName}</div>
				<div>{props.profile.data.aboutMe}</div>
				<div>
					<ProfileStatus status={'I am cool man!!!'}/>
				</div>
			</div>
		</div>
	)
};

export default Info;