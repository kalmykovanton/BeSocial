import React from 'react';
import styles from './Users.module.css';

const Users = (props) => {
    return (
        <div className={styles.container}>
            {
                props.users.map(user => <div className={styles.user} key={user.id}>
                    <div className={styles.avatar}>
                        <div>
                            <img className={styles.img} src={user.photoUrl} alt="ava"/>
                        </div>
                        <div>
                            { user.followed
                                ? <button onClick={ () => { props.unfollow(user.id) } }
                                          className={styles.followButton}>Unfollow</button>
                                : <button onClick={ () => { props.follow(user.id) } }
                                          className={styles.followButton}>Follow</button>}
                        </div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.name}>
                            {user.fullName}
                        </div>
                        <div>
                            {user.status}
                        </div>
                    </div>
                    <div className={styles.location}>
                        <div>
                            City: {user.location.city}
                        </div>
                        <div>
                            Country: {user.location.country}
                        </div>
                    </div>
                </div>)
            }
            <div className={styles.buttonContainer}>
                <button className={styles.moreButton}>More Users</button>
            </div>
        </div>
    );
}

export default Users;