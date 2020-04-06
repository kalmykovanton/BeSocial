import defaultImage from './../img/user1.png';

let initialState = {
    friends: [
        {
            id: 1,
            name: "Olechka",
            img: defaultImage
        },
        {
            id: 2,
            name: "Arthur",
            img: defaultImage
        },
        {
            id: 3,
            name: "Ruslan",
            img: defaultImage
        },
        {
            id: 4,
            name: "Dima",
            img: defaultImage
        },
        {
            id: 5,
            name: "Artyom",
            img: defaultImage
        }
    ]
};

const friendsReducer = (state = initialState, action) => {

    return state;
};

export default friendsReducer;