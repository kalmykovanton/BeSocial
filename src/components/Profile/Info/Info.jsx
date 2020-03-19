import React from 'react';
import styles from './Info.module.css';
import Preloader from './../../common/Preloader/Preloader';

const Info = (props) => {
	if (!props.profile) {
		return <Preloader />
	}

	return (
		<div className={styles.container}>
			<div>
				<img className={styles.avatar} src={props.profile.data.photos.large} alt="Ava"/>
			</div>
			<div className={styles.description}>
				<div className={styles.fullName}>{props.profile.data.fullName}</div>
				<div>{props.profile.data.aboutMe}</div>
				<div></div>
			</div>
		</div>
	)
};

export default Info;