import React from 'react';
import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "9a3f002f-62ae-4604-a96a-eb4974fac9c9" }
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
    },
    getProfile (userId) {
        return instance.get(`profile/${userId}`)
    },
    getMyAuthData () {
        return instance.get(`auth/me`)
    }
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    }
}
