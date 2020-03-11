const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            if (!state.newPostText)
                return;

            const date = new Date();
            const dateFormat = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} 
            ${date.getHours()}:${date.getMinutes()}`;

            state.posts
                .push(
                    {
                        id: state.posts.length,
                        message: state.newPostText,
                        likesCounter: 0,
                        date: dateFormat
                    }
                );
            state.newPostText = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            break;
    }

    return state;
}

export default profileReducer;