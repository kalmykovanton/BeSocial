const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            if (!action.newMessageBody)
                return state;
            return {
                ...state,
                messages: [...state.messages, {
                                    id: state.messages.length,
                                    message: action.newMessageBody
                            }]
            };
        default:
            return state;
    }
};

export const addMessage = (newMessageBody) =>
    ({type: ADD_MESSAGE, newMessageBody});

export default dialogsReducer;