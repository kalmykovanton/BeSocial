import React from 'react';
import styles from './Post.module.css';
import avatar from './../../../../../img/ava_kot.jpg';

const Post = () => {
	return (
		<div className={styles.container}>
			<div className={styles.avatar}>
				<img src={avatar} alt="Ava"/>
			</div>
				<div className={styles.text}>
					Lorem ipsum dolor sit amet
				</div>
			<div></div>
			<div className={styles.likeDate}>
				<div className={styles.like}>
					<div>
						<svg aria-hidden="true" focusable="false" data-prefix="fas"
						     data-icon="heart" className="svg-inline--fa fa-heart fa-w-16"
						     role="img" xmlns="http://www.w3.org/2000/svg"
						     viewBox="0 0 512 512">
							<path fill="currentColor"
							      d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256
							      96.5l-19.7-20.3C186.1 24.3 104.5 15.9
							      49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5
							      199.8c12.5 12.9 32.8 12.9 45.3
							      0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/>
						</svg>
					</div>
					<div> 88</div>
				</div>
				<div className={styles.date}>Date</div>
			</div>
		</div>
	);
};

export default Post;