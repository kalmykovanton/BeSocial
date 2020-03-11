const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            if (!state.newMessageText)
                return;
            state.messages
                .push(
                    {
                        id: state.messages.length,
                        message: state.newMessageText
                    }
                );
            state.newMessageText = '';
            break;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            break;
    }

    return state;
}

export default dialogsReducer;