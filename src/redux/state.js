import {renderEntireTree} from './../render';

let state = {
    profilePage: {
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
        ]
    },
    dialogsPage: {
        messages: [
            {id: 1, message: "Hello!"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "Have a nice day!"},
            {id: 4, message: "I'm fine))"},
            {id: 5, message: "Good Bye!"}
        ],
        dialogs: [
            {id: 1, name: "Olechka"},
            {id: 2, name: "Arthur"},
            {id: 3, name: "Ruslan"},
            {id: 4, name: "Dima"},
            {id: 5, name: "Artyom"}
        ]
    },
    friendsPage: {
        friends: [
            {id: 1, name: "Olechka", img: "/img/Olechka.jpg"},
            {id: 2, name: "Arthur", img: "./../img/Arthur.jpg"},
            {id: 3, name: "Ruslan", img: "./../img/Ruslan.jpg"},
            {id: 4, name: "Dima", img: "./../img/Dima.jpg"},
            {id: 5, name: "Artyom", img: "./../img/Artyom.jpg"}
        ]
    }
}

export const addPost = (text) => {

    let date = new Date();
    let dateFormat = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}.${date.getMinutes()}`;

    state.profilePage.posts
        .push(
            {
                id: state.profilePage.posts.length,
                message: text,
                likesCounter: 0,
                date: dateFormat
            }
        );
    renderEntireTree(state);
};

export const addMessage = (text) => {
    state.dialogsPage.messages
        .push(
            {
                id: state.dialogsPage.messages.length,
                message: text
            }
        );
    renderEntireTree(state);
};

export default state;