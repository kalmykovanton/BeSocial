import React from 'react';
import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "72504f2d-c808-4763-827c-9710053e4d15" }
})

export const userAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}
                 &count=${pageSize}`)
                    .then(response => response.data)
    },
    unfollowUser (userId) {
        return instance.delete(`follow/${userId}`)
                .then( response => response.data );
    },
    followUser (userId) {
        return instance.post(`follow/${userId}`, {})
                .then( response => response.data );
    }
}
