import React from 'react';
import styles from './Info.module.css';

const Info = (props) => {
	return (
		<div className={styles.container}>
			<div className={styles.avatar}>
			</div>
			<div className={styles.description}>
				Description
			</div>
		</div>
	)
};

export default Info;