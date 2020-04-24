//import React from 'react';
import profileReducer, {addPost} from "./ProfileReducer.js";

let state = {
    posts: [
        {
            id: 1,
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            likesCounter: 25,
            date: "XX.XX.XXXX AA:AA"
        },
        {
            id: 2,
            message: "Lorem ipsum dolor sit amet.",
            likesCounter: 44,
            date: "YY.YY.YYYY BB:BB"
        },
        {
            id: 3,
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing " +
                "elit. Corporis dolores earum ex non perspiciatis quia, totam.",
            likesCounter: 60,
            date: "ZZ.ZZ.ZZZZ CC:CC"
        }
    ],
    profile: null,
    status: ''
};

it('length of posts should be incremented', () => {
    let action = addPost("new post text");
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4);
});