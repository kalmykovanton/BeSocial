import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Users.module.css';
import userPhoto from './../../img/user1.png';
import Preloader from './../common/Preloader/Preloader';
import {NavLink} from 'react-router-dom';
import * as axios from 'axios';

const Users = (props) => {

    const pageCount = Math.ceil( props.totalUsersCount / props.pageSize );

    return (
        <div className={styles.container}>
            { props.isFatching ? <Preloader /> : null }
            <ReactPaginate pageCount={pageCount}
                           pageRangeDisplayed={3}
                           marginPagesDisplayed={2}
                           pageClassName={styles.paginatorItems}
                           activeClassName={styles.paginatorItemsActive} c
                           containerClassName={styles.paginator}
                           onPageChange={(data) => props.setCurrentPage(data)}
                           breakLabel={'...'}
                           nextClassName={styles.next}
                           previousClassName={styles.previous}
                           breakClassName={styles.break}/>

            {
                props.users.map(user => <div className={styles.user} key={user.id}>
                    <div className={styles.avatar}>
                        <div>
                            <NavLink to={`/profile/${user.id}`}>
                                <img className={styles.img}
                                     src={ user.photos.small ? user.photos.small : userPhoto } alt="ava"/>
                            </NavLink>
                        </div>
                        <div>
                            { user.followed
                                ? <button onClick={ () => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                        { withCredentials: true,
                                        headers: {"API-KEY": "72504f2d-c808-4763-827c-9710053e4d15" }
                                        })
                                        .then( response => {
                                            if (response.data.resultCode == 0) {
                                            props.unfollow(user.id)
                                        }
                                    });
                                } } className={styles.followButton}>Unfollow</button>
                                : <button onClick={ () => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                        {}, { withCredentials: true,
                                            headers: {"API-KEY": "72504f2d-c808-4763-827c-9710053e4d15" }
                                            })
                                        .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.follow(user.id)
                                        }
                                    });
                                } } className={styles.followButton}>Follow</button>}
                        </div>
                    </div>
                    <div className={styles.info}>
                        <NavLink to={`/profile/${user.id}`} className={styles.name}>
                            <div className={styles.name}>
                                {user.name}
                            </div>
                        </NavLink>
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

export default Users;