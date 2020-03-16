import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from './../../img/user1.png';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
        &count=${this.props.pageSize}`)
            .then( response => {
                this.props.setUsers(response.data.items);
                if ( response.data.totalCount < 60 )
                this.props.setTotalUsersCount(response.data.totalCount);
                else this.props.setTotalUsersCount(60);
            });
    }

    setCurrentPage = (currentPage) => {
    this.props.setCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}
        &count=${this.props.pageSize}`)
            .then( response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        const pageCount = Math.ceil( this.props.totalUsersCount / this.props.pageSize );

        const pages = [];

        for ( let i = 1; i <= pageCount; i++ ) {
            pages.push(i);
        }

        return (
            <div className={styles.container}>
                <div className={styles.pagesSelector}>
                    { pages.map( page => {
                        return <span className={this.props.currentPage === page && styles.selectedPage}
                        onClick={ () => this.setCurrentPage(page) }>{page}</span>
                    })}
                </div>
                {
                    this.props.users.map(user => <div className={styles.user} key={user.id}>
                        <div className={styles.avatar}>
                            <div>
                                <img className={styles.img}
                                     src={ user.photos.small ? user.photos.small : userPhoto } alt="ava"/>
                            </div>
                            <div>
                                { user.followed
                                    ? <button onClick={ () => { this.props.unfollow(user.id) } }
                                              className={styles.followButton}>Unfollow</button>
                                    : <button onClick={ () => { this.props.follow(user.id) } }
                                              className={styles.followButton}>Follow</button>}
                            </div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.name}>
                                {user.name}
                            </div>
                            <div>
                                {user.status}
                            </div>
                        </div>
                        <div className={styles.location}>
                            <div>
                                City: {"user.location.city"}
                            </div>
                            <div>
                                Country: {"user.location.country"}
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
}

export default Users;