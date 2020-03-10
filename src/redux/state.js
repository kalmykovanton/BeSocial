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
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    _addPost() {

        if (!this._state.profilePage.newPostText)
            return;

        let date = new Date();
        let dateFormat = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

        this._state.profilePage.posts
            .push(
                {
                    id: this._state.profilePage.posts.length,
                    message: this._state.profilePage.newPostText,
                    likesCounter: 0,
                    date: dateFormat
                }
            );
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    _addMessage() {
        if (!this._state.dialogsPage.newMessageText)
            return;
        this._state.dialogsPage.messages
            .push(
                {
                    id: this._state.dialogsPage.messages.length,
                    message: this._state.dialogsPage.newMessageText
                }
            );
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    _updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        switch (action.type) {
            case 'ADD-POST':
                this._addPost();
                break;
            case 'UPDATE-NEW-POST-TEXT':
                this._updateNewPostText(action.newText);
                break;
            case 'ADD-MESSAGE':
                this._addMessage();
                break;
            case 'UPDATE-NEW-MESSAGE-TEXT':
                this._updateNewMessageText(action.newText);
                break;
        }
    }
};git

export default store;

window.store = store;