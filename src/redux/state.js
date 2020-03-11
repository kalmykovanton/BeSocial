import profileReducer from './ProfileReducer';
import dialogsReducer from './DialogsReducer';
import friendsReducer from './FriendsReduser';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
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
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                {id: 1, message: "Hello!"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Have a nice day!"},
                {id: 4, message: "I'm fine))"},
                {id: 5, message: "Good Bye!"}
            ],
            newMessageText: '',
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
    },
    _callSubscriber() {},

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.friendsPage = friendsReducer(this._state.friendsPage, action);

        this._callSubscriber(this._state);

    }
};

export default store;

window.store = store;